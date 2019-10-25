import requestPromise from 'request-promise'
import assert from 'assert'
import { getAuthToken } from './get-auth-token'
import { gitHash, gitBranch, nodeVersion, packageVersion, isIsoDate } from './environment'
import db from '../packages/mds-db'
import cache from '../packages/mds-cache'
import stream from '../packages/mds-stream'
import { Device, VEHICLE_TYPES } from '../packages/mds-types'
import { makeDevices, makeTelemetryInArea } from '../packages/mds-test-data'
import { makeEventsWithTelemetry } from '../packages/mds-test-data'
import { now } from '../packages/mds-utils'
import { Telemetry } from '../packages/mds-types'
import { Policy } from '../packages/mds-types'
import { RULE_TYPES } from '../packages/mds-types'
import { la_city_boundary } from '../packages/mds-policy/tests/la-city-boundary'

const CITY_OF_LA = '1f943d59-ccc9-4d91-b6e2-0c5e771cbc49'
const GEOGRAPHY_UUID = '8917cf2d-a963-4ea2-a98b-7725050b3ec5'
const COUNT_POLICY_UUID = '72971a3d-876c-41ea-8e48-c9bb965bbbcc'

const COUNT_POLICY_JSON: Policy = {
  name: 'LADOT Mobility Caps',
  description: 'Mobility caps as described in the One-Year Permit',
  policy_id: COUNT_POLICY_UUID,
  start_date: 1558389669540,
  end_date: null,
  prev_policies: null,
  provider_ids: [],
  rules: [
    {
      name: 'Greater LA',
      rule_id: '47c8c7d4-14b5-43a3-b9a5-a32ecc2fb2c6',
      rule_type: RULE_TYPES.count,
      geographies: [GEOGRAPHY_UUID],
      statuses: { available: [], unavailable: [], reserved: [], trip: [] },
      vehicle_types: [VEHICLE_TYPES.bicycle, VEHICLE_TYPES.scooter],
      maximum: 10,
      minimum: 5
    }
  ]
}

describe('Agency', async function() {
  // const devices: Device[] = makeDevices(7, now())
  // const events = makeEventsWithTelemetry(devices, now() - 100000, CITY_OF_LA, 'trip_end')
  // const telemetry: Telemetry[] = []
  // devices.forEach(device => {
  //   telemetry.push(makeTelemetryInArea(device, now(), CITY_OF_LA, 10))
  // })
  // const seedData = { devices, events, telemetry }
  // await Promise.all([db.initialize(), cache.initialize(), stream.initialize()]).then(() => {
  // })
  // await Promise.all([db.seed(seedData), cache.seed(seedData)]).then(async () => {
  //   const geography = { name: 'la', geography_id: GEOGRAPHY_UUID, geography_json: la_city_boundary }
  //   await db.writeGeography(geography)
  //   await db.writePolicy(COUNT_POLICY_JSON)
  //   await db.publishPolicy(COUNT_POLICY_UUID)
  // })
  it('successfully initializes', async function() {
    const res = await requestPromise({
      url: 'http://localhost/agency',
      auth: {
        bearer: getAuthToken('', {
          scope: "admin:all test:all"
        }, '')
      },
      method: 'GET',
      json: true,
      resolveWithFullResponse: true
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.strictEqual(res.headers['server'], 'istio-envoy')
    assert.strictEqual(res.body.name, "@container-images/mds-agency")
    // fixme: get package version from env
    // assert.strictEqual(res.body.version, packageVersion())
    assert.strictEqual(isIsoDate(res.body.build.date), true)
    assert.strictEqual(res.body.build.branch, gitBranch())
    assert.strictEqual(res.body.build.commit, gitHash())
    assert.strictEqual(`v${res.body.node}`, nodeVersion())
    assert.strictEqual(res.body.status, "Running")
  })

  it('Inits a vehicle', async function() {
    const res = await requestPromise({
      url: 'http://localhost/agency/vehicles',
      auth: {
        bearer: getAuthToken('', {
          scope: "admin:all test:all"
        }, '')
      },
      method: 'POST',
      json: true,
      resolveWithFullResponse: true,
      body: {
        provider_id: 'some-fake-uuid'
      }
    })
    assert.strictEqual(res.statusCode, 200)
    assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.strictEqual(res.headers['server'], 'istio-envoy')
    assert.strictEqual(res.body.name, "@container-images/mds-agency")
    // fixme: get package version from env
    // assert.strictEqual(res.body.version, packageVersion())
    assert.strictEqual(isIsoDate(res.body.build.date), true)
    assert.strictEqual(res.body.build.branch, gitBranch())
    assert.strictEqual(res.body.build.commit, gitHash())
    assert.strictEqual(`v${res.body.node}`, nodeVersion())
    assert.strictEqual(res.body.status, "Running")
  })
})
