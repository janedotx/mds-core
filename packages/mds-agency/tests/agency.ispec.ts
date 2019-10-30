import requestPromise from 'request-promise'
import assert from 'assert'
import { Buffer } from 'buffer'
import { MOCHA_PROVIDER_ID } from '@mds-core/mds-providers'
import uuid from 'uuid'
import { PROPULSION_TYPES, VEHICLE_TYPES } from '@mds-core/mds-types'
import { getAuthToken } from '../../../tests/get-auth-token'
import { gitBranch, nodeVersion, isIsoDate, resetDb, closeDb } from '../../../tests/environment'
import { dockerComposeConfig, kubernetesConfig } from '../../../tests/agency.env'

const config = process.env.TEST_ENV === 'docker-compose' ? dockerComposeConfig : kubernetesConfig

describe('Agency', async () => {
  it('successfully initializes', async () => {
    const res = await requestPromise({
      url: 'http://localhost:4001',
      auth: {
        bearer: getAuthToken(
          '',
          {
            scope: 'admin:all test:all'
          },
          ''
        )
      },
      method: 'GET',
      json: true,
      resolveWithFullResponse: true
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.strictEqual(res.headers.server, config.serverHeader)
    assert.strictEqual(res.body.name, '@container-images/mds-agency')
    // fixme: get package version from env
    // assert.strictEqual(res.body.version, packageVersion())
    assert.strictEqual(isIsoDate(res.body.build.date), true)
    assert.strictEqual(res.body.build.branch, gitBranch())
    assert.strictEqual(res.body.build.commit, config.commit)
    assert.strictEqual(`v${res.body.node}`, nodeVersion())
    assert.strictEqual(res.body.status, 'Running')
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
        url: 'http://localhost:4001/vehicles',
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
        url: 'http://localhost:4001/vehicles',
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
})
