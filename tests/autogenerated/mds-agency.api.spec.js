import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Agency API Tests

describe('MDS Agency API Tests', () => {

  // API call test: GET /service_areas
  describe('GET /service_areas', () => {
    it('Makes a GET call to /service_areas', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/service_areas/`,
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

  // API call test: GET /service_areas/:service_area_id
  describe('GET /service_areas/:service_area_id', () => {
    it('Makes a GET call to /service_areas/:service_area_id', async () => {
      const urlParams = {'service_area_id': 'some_value'}
      const {service_area_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/service_areas/${service_area_id}/`,
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

  // API call test: POST /vehicles
  describe('POST /vehicles', () => {
    it('Makes a POST call to /vehicles', async () => {
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

  // API call test: PUT /vehicles/:device_id
  describe('PUT /vehicles/:device_id', () => {
    it('Makes a PUT call to /vehicles/:device_id', async () => {
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

  // API call test: POST /vehicles/:device_id/event
  describe('POST /vehicles/:device_id/event', () => {
    it('Makes a POST call to /vehicles/:device_id/event', async () => {
      const urlParams = {'device_id': 'some_value'}
      const {device_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/vehicles/${device_id}/event/`,
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

  // API call test: POST /vehicles/telemetry
  describe('POST /vehicles/telemetry', () => {
    it('Makes a POST call to /vehicles/telemetry', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/vehicles/telemetry/`,
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

  // API call test: GET /admin/vehicle_ids
  describe('GET /admin/vehicle_ids', () => {
    it('Makes a GET call to /admin/vehicle_ids', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/vehicle_ids/`,
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

  // API call test: GET /admin/cache/info
  describe('GET /admin/cache/info', () => {
    it('Makes a GET call to /admin/cache/info', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/cache/info/`,
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

  // API call test: GET /admin/wipe/:device_id
  describe('GET /admin/wipe/:device_id', () => {
    it('Makes a GET call to /admin/wipe/:device_id', async () => {
      const urlParams = {'device_id': 'some_value'}
      const {device_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/wipe/${device_id}/`,
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

  // API call test: GET /admin/cache/refresh
  describe('GET /admin/cache/refresh', () => {
    it('Makes a GET call to /admin/cache/refresh', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/cache/refresh/`,
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
