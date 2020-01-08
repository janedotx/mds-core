/* eslint-disable @typescript-eslint/no-floating-promises */
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

import NATS from 'node-nats-streaming'
import processor from '@mds-core/mds-event-processor'

const { env, pid } = process

/* eslint-reason avoids import of logger */
/* eslint-disable-next-line no-console */
// EventServer(processor).listen(PORT, () => console.log(`${npm_package_name} running on port ${PORT}`))

const nats = NATS.connect('knative-nats-streaming', `mds-event-processor-${pid}`, {
  url: `nats://${env.STAN}:4222`
})

try {
  nats.on('connect', () => {
    const eventSubscription = nats.subscribe(`${env.TENANT_ID ?? 'mds'}.event`, {
      ...nats.subscriptionOptions(),
      manualAcks: true,
      maxInFlight: 1
    })

    eventSubscription.on('message', async (msg: any) => {
      const data = JSON.parse(msg.getData())
      await processor('event', data)
      msg.ack()
    })

    const telemetrySubscription = nats.subscribe(`${env.TENANT_ID ?? 'mds'}.telemetry`, {
      ...nats.subscriptionOptions(),
      manualAcks: true,
      maxInFlight: 1
    })

    telemetrySubscription.on('message', async (msg: any) => {
      const data = JSON.parse(msg.getData())
      await processor('telemetry', data)
      msg.ack()
    })
  })
} catch (err) {
  console.log(err)
}
