import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Native API Tests

describe('MDS Native API Tests', () => {

  // API call test: GET /events/:cursor?
  describe('GET /events/:cursor?', () => {
    it('Makes a GET call to /events/:cursor?', async () => {
      const urlParams = {'cursor': 'some_value'}
      const {cursor} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/events/${cursor}/`,
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

  // API call test: GET /vehicles/:device_id
  describe('GET /vehicles/:device_id', () => {
    it('Makes a GET call to /vehicles/:device_id', async () => {
      const urlParams = {'device_id': 'some_value'}
      const {device_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/vehicles/${device_id}/`,
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

  // API call test: GET /providers
  describe('GET /providers', () => {
    it('Makes a GET call to /providers', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/providers/`,
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
