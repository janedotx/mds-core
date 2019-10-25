import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Policy API Tests

describe('MDS Policy API Tests', () => {

  // API call test: GET /policies
  describe('GET /policies', () => {
    it('Makes a GET call to /policies', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/`,
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

  // API call test: GET /policies/:policy_id
  describe('GET /policies/:policy_id', () => {
    it('Makes a GET call to /policies/:policy_id', async () => {
      const urlParams = {'policy_id': 'some_value'}
      const {policy_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/${policy_id}/`,
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

  // API call test: GET /geographies/:geography_id
  describe('GET /geographies/:geography_id', () => {
    it('Makes a GET call to /geographies/:geography_id', async () => {
      const urlParams = {'geography_id': 'some_value'}
      const {geography_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies/${geography_id}/`,
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

  // API call test: GET /schema/policy
  describe('GET /schema/policy', () => {
    it('Makes a GET call to /schema/policy', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/schema/policy/`,
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
