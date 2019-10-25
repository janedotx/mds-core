import { execSync } from 'child_process'
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

export const gitHash = () => {
  return execSync('git rev-parse --short HEAD').toString().trim()
}

export const gitBranch = () => {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

export const nodeVersion = () => {
  return execSync('node --version').toString().trim()
}

export const packageVersion = () => {
  // fixme: get package-version from env
  return "0.1.14";
}

export const isIsoDate = (s : string) => {
  return (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(s)) ? false : new Date(s).toISOString() == s;
}

export const seedDb = async () => {
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

  const devices: Device[] = makeDevices(7, now())
  const events = makeEventsWithTelemetry(devices, now() - 100000, CITY_OF_LA, 'trip_end')
  const telemetry: Telemetry[] = []
  devices.forEach(device => {
    telemetry.push(makeTelemetryInArea(device, now(), CITY_OF_LA, 10))
  })
  const seedData = { devices, events, telemetry }
  await Promise.all([db.initialize(), cache.initialize(), stream.initialize()]).then(() => {
  })
  await Promise.all([db.seed(seedData), cache.seed(seedData)]).then(async () => {
    const geography = { name: 'la', geography_id: GEOGRAPHY_UUID, geography_json: la_city_boundary }
    await db.writeGeography(geography)
    await db.writePolicy(COUNT_POLICY_JSON)
    await db.publishPolicy(COUNT_POLICY_UUID)
  })
}

export const resetDb = async () => {
  await db.initialize()
}