import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Policy-author API Tests

describe('MDS Policy-author API Tests', () => {

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

  // API call test: POST /policies
  describe('POST /policies', () => {
    it('Makes a POST call to /policies', async () => {
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

  // API call test: POST /policies/:policy_id/publish
  describe('POST /policies/:policy_id/publish', () => {
    it('Makes a POST call to /policies/:policy_id/publish', async () => {
      const urlParams = {'policy_id': 'some_value'}
      const {policy_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/${policy_id}/publish/`,
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

  // API call test: PUT /policies/:policy_id
  describe('PUT /policies/:policy_id', () => {
    it('Makes a PUT call to /policies/:policy_id', async () => {
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

  // API call test: DELETE /policies/:policy_id
  describe('DELETE /policies/:policy_id', () => {
    it('Makes a DELETE call to /policies/:policy_id', async () => {
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

  // API call test: GET /policies/meta/
  describe('GET /policies/meta/', () => {
    it('Makes a GET call to /policies/meta/', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/meta//`,
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

  // API call test: GET /policies/:policy_id/meta
  describe('GET /policies/:policy_id/meta', () => {
    it('Makes a GET call to /policies/:policy_id/meta', async () => {
      const urlParams = {'policy_id': 'some_value'}
      const {policy_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/${policy_id}/meta/`,
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

  // API call test: PUT /policies/:policy_id/meta
  describe('PUT /policies/:policy_id/meta', () => {
    it('Makes a PUT call to /policies/:policy_id/meta', async () => {
      const urlParams = {'policy_id': 'some_value'}
      const {policy_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/policies/${policy_id}/meta/`,
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

  // API call test: GET /geographies/meta/
  describe('GET /geographies/meta/', () => {
    it('Makes a GET call to /geographies/meta/', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies/meta//`,
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

  // API call test: POST /geographies/
  describe('POST /geographies/', () => {
    it('Makes a POST call to /geographies/', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies//`,
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

  // API call test: PUT /geographies/:geography_id
  describe('PUT /geographies/:geography_id', () => {
    it('Makes a PUT call to /geographies/:geography_id', async () => {
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

  // API call test: DELETE /geographies/:geography_id
  describe('DELETE /geographies/:geography_id', () => {
    it('Makes a DELETE call to /geographies/:geography_id', async () => {
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

  // API call test: GET /geographies/:geography_id/meta
  describe('GET /geographies/:geography_id/meta', () => {
    it('Makes a GET call to /geographies/:geography_id/meta', async () => {
      const urlParams = {'geography_id': 'some_value'}
      const {geography_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies/${geography_id}/meta/`,
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

  // API call test: GET /geographies
  describe('GET /geographies', () => {
    it('Makes a GET call to /geographies', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies/`,
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

  // API call test: PUT /geographies/:geography_id/meta
  describe('PUT /geographies/:geography_id/meta', () => {
    it('Makes a PUT call to /geographies/:geography_id/meta', async () => {
      const urlParams = {'geography_id': 'some_value'}
      const {geography_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/geographies/${geography_id}/meta/`,
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
