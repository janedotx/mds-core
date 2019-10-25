import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from '../get-auth-token'

// MDS Daily API Tests

describe('MDS Daily API Tests', () => {

  // API call test: GET /admin/vehicle_counts
  describe('GET /admin/vehicle_counts', () => {
    it('Makes a GET call to /admin/vehicle_counts', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/vehicle_counts/`,
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

  // API call test: GET /admin/events
  describe('GET /admin/events', () => {
    it('Makes a GET call to /admin/events', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/events/`,
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

  // API call test: GET /admin/last_day_trips_by_provider
  describe('GET /admin/last_day_trips_by_provider', () => {
    it('Makes a GET call to /admin/last_day_trips_by_provider', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/last_day_trips_by_provider/`,
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

  // API call test: GET /admin/raw_trip_data/:trip_id
  describe('GET /admin/raw_trip_data/:trip_id', () => {
    it('Makes a GET call to /admin/raw_trip_data/:trip_id', async () => {
      const urlParams = {'trip_id': 'some_value'}
      const {trip_id} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/raw_trip_data/${trip_id}/`,
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

  // API call test: GET /admin/last_day_stats_by_provider
  describe('GET /admin/last_day_stats_by_provider', () => {
    it('Makes a GET call to /admin/last_day_stats_by_provider', async () => {
      const urlParams = {}
      const {} = urlParams
      const res = await requestPromise({
        url: `http://localhost/agency/admin/last_day_stats_by_provider/`,
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
