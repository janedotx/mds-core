import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Provider API Tests

describe('MDS Provider API Tests', () => {

  // API call test: GET /trips
  describe('GET /trips', () => {
    it('Makes a GET call to /trips', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/`,
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

  // API call test: GET /status_changes
  describe('GET /status_changes', () => {
    it('Makes a GET call to /status_changes', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/status_changes/`,
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
