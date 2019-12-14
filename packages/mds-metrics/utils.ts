import { now, yesterday, hours, days } from '@mds-core/mds-utils'

import { UUID } from '@mds-core/mds-types'
import { isArray } from 'util'
import { GetTimeBinsParams, MetricsApiRequest } from './types'

export function getTimeBins({
  start_time = yesterday(),
  end_time = now(),
  bin_size = 3600000
}: Partial<GetTimeBinsParams>) {
  const interval = end_time - start_time

  return [...Array(Math.floor(interval / bin_size))].map((_, idx) => ({
    start: start_time + idx * bin_size,
    end: start_time + (idx + 1) * bin_size
  }))
}

export function getBinSizeFromQuery(query: MetricsApiRequest['query']) {
  const bin_size_english: 'hour' | 'day' = query.bin_size || 'hour'
  const timeToMs = {
    hour: hours(1),
    day: days(1)
  }
  const bin_size = timeToMs[bin_size_english]
  return bin_size
}

export function getProviderIdArray(passedProviderId: UUID | UUID[] | undefined): UUID[] {
  let provider_id: UUID[]
  if (passedProviderId === undefined) {
    provider_id = []
  } else if (isArray(passedProviderId)) {
    provider_id = passedProviderId
  } else {
    provider_id = [passedProviderId]
  }
  return provider_id
}
