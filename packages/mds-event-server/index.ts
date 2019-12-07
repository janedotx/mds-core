import express from 'express'
import logger from '@mds-core/mds-logger'
import { pathsFor, ServerError } from '@mds-core/mds-utils'
import { AboutRequestHandler, HealthRequestHandler, JsonBodyParserMiddleware } from '@mds-core/mds-api-server'
import Cloudevent, { BinaryHTTPReceiver } from 'cloudevents-sdk/v1'

export const EventServer = <TData, TResult>(
  handler: (type: string, data: TData, event: Cloudevent) => Promise<TResult>,
  server: express.Express = express()
): express.Express => {
  // Disable x-powered-by header
  server.disable('x-powered-by')

  const receiver = new BinaryHTTPReceiver()

  // Middleware
  server.use(JsonBodyParserMiddleware({ limit: '1mb' }))

  // Routes
  server.get(pathsFor('/'), AboutRequestHandler)

  server.get(pathsFor('/health'), HealthRequestHandler)

  server.post('/', async (req, res) => {
    try {
      const cloudevent = receiver.parse(req.body, req.headers)
      await logger.info('PARSE Cloud Event', 'BODY:', req.body, 'HEADERS:', req.headers, 'EVENT:', cloudevent.format())
      const result = await handler(cloudevent.getType(), cloudevent.getData(), cloudevent)
      return res.status(200).send({ result })
    } catch (error) {
      await logger.error('ERROR Cloud Event', 'BODY:', req.body, 'HEADERS:', req.headers, 'ERROR:', error)
      return res.status(500).send({ error: new ServerError(error, req.body) })
    }
  })

  return server
}
