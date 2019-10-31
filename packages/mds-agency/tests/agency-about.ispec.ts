import requestPromise from 'request-promise'
import assert from 'assert'
import { Buffer } from 'buffer'
import { MOCHA_PROVIDER_ID } from '@mds-core/mds-providers'
import uuid from 'uuid'
import { PROPULSION_TYPES, VEHICLE_TYPES } from '@mds-core/mds-types'
import { getAuthToken } from '../../../tests/get-auth-token'
import { gitHash, gitBranch, nodeVersion, packageVersion, isIsoDate, resetDb, closeDb } from '../../../tests/environment'
import { dockerComposeConfig, kubernetesConfig } from './agency.env'

const baseConfig = process.env.TEST_ENV === 'docker-compose' ? dockerComposeConfig : kubernetesConfig
interface EnvOverrides {
  // host_url?: string
  [key: string]: string | undefined
}
const envOverrides : EnvOverrides = {
  'host_url': process.env.HOST_URL
}
function filterObject(obj : EnvOverrides) {
  const ret : EnvOverrides = {}
  Object.keys(obj)
      .filter((key) => obj[key] !== undefined)
      .forEach((key) => ret[key] = obj[key])
  return ret
}
const config = {
  ...baseConfig,
  ...filterObject(envOverrides)
}

describe('Agency about', function() {
  it('successfully initializes', async function() {
    const res = await requestPromise({
      url: `${config.host_url}/agency`,
      auth: {
        bearer: getAuthToken('', {
          scope: "admin:all test:all"
        }, '')
      },
      method: 'GET',
      json: true,
      resolveWithFullResponse: true
    })

    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.strictEqual(res.headers['server'], 'istio-envoy')
    assert.strictEqual(res.body.name, "@container-images/mds-agency")
    assert.strictEqual(res.body.version, packageVersion('mds-agency'))
    assert.strictEqual(isIsoDate(res.body.build.date), true)
    assert.strictEqual(res.body.build.branch, gitBranch())
    assert.strictEqual(res.body.build.commit, gitHash())
    assert.strictEqual(`v${res.body.node}`, nodeVersion())
    assert.strictEqual(res.body.status, "Running")
  })
})

describe('/vehicles', async () => {
  before(async () => {
    await resetDb()
  })

  after(async () => {
    await closeDb()
  })

  it('Inits a vehicle', async () => {
    const res = await requestPromise({
      url: `${config.host_url}/agency/vehicles`,
      headers: {
        Authorization: `Basic ${Buffer.from(`${MOCHA_PROVIDER_ID}|admin:all test:all`).toString('base64')}`
      },
      method: 'POST',
      json: true,
      resolveWithFullResponse: true,
      body: {
        device_id: uuid(),
        vehicle_id: uuid(),
        type: VEHICLE_TYPES.bicycle,
        propulsion: [PROPULSION_TYPES.combustion],
        year: 1984,
        mfgr: 'foo',
        model: 'foo'
      }
    })
    assert.strictEqual(res.statusCode, 201)
  })

  it('Gets some vehicles', async () => {
    const res = await requestPromise({
      url: `${config.host_url}/agency/vehicles`,
      headers: {
        // FIXME: consolidate this vs. bearer token
        Authorization: `Basic ${Buffer.from(`${MOCHA_PROVIDER_ID}|admin:all test:all`).toString('base64')}`
      },
      method: 'GET',
      json: true,
      resolveWithFullResponse: true,
      body: {}
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.body.vehicles.length, 1)
  })
})