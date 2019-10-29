import requestPromise from 'request-promise'
import assert from 'assert'
import { Buffer } from 'buffer'
import { MOCHA_PROVIDER_ID } from '@mds-core/mds-providers'
import uuid from 'uuid'
import { PROPULSION_TYPES, VEHICLE_TYPES } from '@mds-core/mds-types'
import { getAuthToken } from './get-auth-token'
import { gitHash, gitBranch, nodeVersion, packageVersion, isIsoDate, seedDb, resetDb } from './environment'

describe('Agency', function() {
  // TODO these should probably live in `beforeAll()`
  // await resetDb()
  // await seedDb()
  // it('successfully initializes', async function() {
  //   console.log('fire dis off')
  //   const res = await requestPromise({
  //     url: 'http://localhost:4001',
  //     auth: {
  //       bearer: getAuthToken(
  //         '',
  //         {
  //           scope: 'admin:all test:all'
  //         },
  //         ''
  //       )
  //     },
  //     method: 'GET',
  //     json: true,
  //     resolveWithFullResponse: true
  //   })
  //   console.log({ res })
  //   assert.strictEqual(res.statusCode, 200)
  //   assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  //   // assert.strictEqual(res.headers.server, 'istio-envoy')
  //   assert.strictEqual(res.body.name, '@container-images/mds-agency')
  //   // fixme: get package version from env
  //   // assert.strictEqual(res.body.version, packageVersion())
  //   assert.strictEqual(isIsoDate(res.body.build.date), true)
  //   assert.strictEqual(res.body.build.branch, gitBranch())
  //   assert.strictEqual(res.body.build.commit, gitHash())
  //   assert.strictEqual(`v${res.body.node}`, nodeVersion())
  //   assert.strictEqual(res.body.status, 'Running')
  // })

  // Look at mocha auth test data
  describe('/vehicles', async () => {
    let device
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
      device = res.body.device
    })

    it('Gets some vehicles', async () => {
      const res = await requestPromise({
        url: 'http://localhost:4001/vehicles',
        headers: {
          Authorization: `Basic ${Buffer.from(`${MOCHA_PROVIDER_ID}|admin:all test:all`).toString('base64')}`
        },
        method: 'GET',
        json: true,
        resolveWithFullResponse: true,
        body: {}
      })
      assert.strictEqual(res.statusCode, 200)
      console.log(res.body)
    })
  })
})
