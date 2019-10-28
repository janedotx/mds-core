import requestPromise from 'request-promise'
import assert from 'assert'
import { Buffer } from 'buffer'
import { MOCHA_PROVIDER_ID } from '@mds-core/mds-providers'
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
  it('Inits a vehicle', async () => {
    const res = await requestPromise({
      url: 'http://localhost:4001/vehicles',
      headers: {
        Authorization: `Basic ${Buffer.from(`${MOCHA_PROVIDER_ID}|admin:all test:all`).toString('base64')}`
      },
      method: 'POST',
      json: true,
      resolveWithFullResponse: true,
      body: {}
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.strictEqual(res.headers.server, 'istio-envoy')
    assert.strictEqual(res.body.name, '@container-images/mds-agency')
    // fixme: get package version from env
    // assert.strictEqual(res.body.version, packageVersion())
    assert.strictEqual(isIsoDate(res.body.build.date), true)
    assert.strictEqual(res.body.build.branch, gitBranch())
    assert.strictEqual(res.body.build.commit, gitHash())
    assert.strictEqual(`v${res.body.node}`, nodeVersion())
    assert.strictEqual(res.body.status, 'Running')
  })
})
