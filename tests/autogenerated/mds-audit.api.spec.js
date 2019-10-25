import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Audit API Tests

describe('MDS Audit API Tests', () => {

  // API call test: POST /trips/:audit_trip_id/start
  describe('POST /trips/:audit_trip_id/start', () => {
    it('Makes a POST call to /trips/:audit_trip_id/start', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/start/`,
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

  // API call test: POST /trips/:audit_trip_id/vehicle/event
  describe('POST /trips/:audit_trip_id/vehicle/event', () => {
    it('Makes a POST call to /trips/:audit_trip_id/vehicle/event', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/vehicle/event/`,
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

  // API call test: POST /trips/:audit_trip_id/vehicle/telemetry
  describe('POST /trips/:audit_trip_id/vehicle/telemetry', () => {
    it('Makes a POST call to /trips/:audit_trip_id/vehicle/telemetry', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/vehicle/telemetry/`,
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

  // API call test: POST /trips/:audit_trip_id/note
  describe('POST /trips/:audit_trip_id/note', () => {
    it('Makes a POST call to /trips/:audit_trip_id/note', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/note/`,
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

  // API call test: POST /trips/:audit_trip_id/end
  describe('POST /trips/:audit_trip_id/end', () => {
    it('Makes a POST call to /trips/:audit_trip_id/end', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/end/`,
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

  // API call test: GET /trips/:audit_trip_id
  describe('GET /trips/:audit_trip_id', () => {
    it('Makes a GET call to /trips/:audit_trip_id', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/`,
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

  // API call test: DELETE /trips/:audit_trip_id
  describe('DELETE /trips/:audit_trip_id', () => {
    it('Makes a DELETE call to /trips/:audit_trip_id', async () => {
      const urlParams = {'audit_trip_id': 'some_value'}
      const {audit_trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/trips/${audit_trip_id}/`,
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

  // API call test: GET /vehicles
  describe('GET /vehicles', () => {
    it('Makes a GET call to /vehicles', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/vehicles/`,
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

  // API call test: GET /vehicles/:provider_id/vin/:vin
  describe('GET /vehicles/:provider_id/vin/:vin', () => {
    it('Makes a GET call to /vehicles/:provider_id/vin/:vin', async () => {
      const urlParams = {'provider_id': 'some_value', 'vin': 'some_value'}
      const {provider_id,vin} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/vehicles/${provider_id}/vin/${vin}/`,
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
