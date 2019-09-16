/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable promise/prefer-await-to-callbacks */
/*
    Copyright 2019 City of Los Angeles.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

// eslint directives:
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-destructuring */
import assert from 'assert'
import { sign, verify } from '../index'

const getPolicy = () => {
  return {
    name: 'LADOT Mobility Caps: Lime',
    rules: [
      {
        name: 'SFV DACs',
        maximum: 0,
        rule_id: 'd7dc6e5b-cefb-4392-a87d-f990c7b1a21b',
        statuses: {
          trip: [],
          reserved: [],
          available: [],
          unavailable: []
        },
        rule_type: 'count',
        geographies: ['e3ed0a0e-61d3-4887-8b6a-4af4f3769c14'],
        vehicle_types: ['bicycle', 'scooter']
      },
      {
        name: 'All other DACs (scooters)',
        maximum: 2500,
        rule_id: 'dc926dc9-62fb-45bf-8655-0651b59655ac',
        statuses: {
          trip: [],
          reserved: [],
          available: [],
          unavailable: []
        },
        rule_type: 'count',
        geographies: ['0c444869-1674-4234-b4f3-ab5685bcf0d9'],
        vehicle_types: ['bicycle', 'scooter']
      },
      {
        name: 'Non-DAC',
        maximum: 3000,
        rule_id: 'e659737d-e62d-45d6-8c71-ef302c355065',
        statuses: {
          trip: [],
          reserved: [],
          available: [],
          unavailable: []
        },
        rule_type: 'count',
        geographies: ['1f943d59-ccc9-4d91-b6e2-0c5e771cbc49'],
        vehicle_types: ['bicycle', 'scooter']
      }
    ],
    end_date: null,
    policy_id: 'f09ad24a-ad0e-4fb0-8770-4fd24e06eb2c',
    start_date: 1558389669540,
    description: 'Mobility caps as described in the One-Year Permit',
    provider_ids: ['63f13c48-34ff-49d2-aca7-cf6a5b6171c3'],
    publish_date: 1566936824458,
    prev_policies: null
  }
}

describe('MDS Signing Tool', () => {
  it('signs a blob', () => {
    const policy = getPolicy()
    assert(sign(policy) === 'f1CiW4VkXGVauUtq4GUt5wCcYR3XJZy8P8rnQ+4Hs2LgZhBPhkA5eoshcT4f5YeXvI7Ai4N3piJoukyUBTFeDg==')
  })

  describe('Verification tests', () => {
    it('Affirmatively verifies signature', () => {
      const policy = getPolicy()
      const signature = sign(policy)
      assert(verify(policy, signature))
    })

    it('Detects invalid signature', () => {
      const policy = getPolicy()
      const bogusSignature = 'a1CiW4VkXGVauUtq4GUt5wCcYR3XJZy8P8rnQ+4Hs2LgZhBPhkA5eoshcT4f5YeXvI7Ai4N3piJoukyUBTFeDg=='
      assert(!verify(policy, bogusSignature))
    })

    it('Detects bad policy payload', () => {
      const policy = getPolicy()
      const signature = sign(policy)
      const bogusPolicy = {
        ...getPolicy(),
        name: 'Bogus Policy Name'
      }
      assert(!verify(bogusPolicy, signature))
    })
  })
})
