import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Compliance API Tests

describe('MDS Compliance API Tests', () => {

  // API call test: GET /snapshot/:policy_uuid
  describe('GET /snapshot/:policy_uuid', () => {
    it('Makes a GET call to /snapshot/:policy_uuid', async () => {
      const urlParams = {'policy_uuid': 'some_value'}
      const {policy_uuid} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/snapshot/${policy_uuid}/`,
        auth: {
          bearer: getAuthToken('', {
            scope: "admin:all test:all"
          }, '')
        },
        method: 'GET',
        json: true,
        resolveWithFullResponse: true
      })

      // TODO assertions here
      assert.strictEqual(res.statusCode, 200)
    })
  })

  // API call test: GET /count/:rule_id
  describe('GET /count/:rule_id', () => {
    it('Makes a GET call to /count/:rule_id', async () => {
      const urlParams = {'rule_id': 'some_value'}
      const {rule_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/count/${rule_id}/`,
        auth: {
          bearer: getAuthToken('', {
            scope: "admin:all test:all"
          }, '')
        },
        method: 'GET',
        json: true,
        resolveWithFullResponse: true
      })

      // TODO assertions here
      assert.strictEqual(res.statusCode, 200)
    })
  })

})
