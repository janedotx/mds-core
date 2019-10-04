import db from '@mds-core/mds-db'
import Sinon from 'sinon'
import { mockReq, mockRes } from 'sinon-express-mock'
import { DailyApiRequest, DailyApiResponse } from '../types'
import { getRawTripData } from '../request-handlers'

describe('Request handlers', () => {
  describe('getRawTripData()', () => {
    it('handles a db read error in getRawTripData()', async () => {
      Sinon.replace(db, 'readEvents', Sinon.fake.rejects('fake-db-error'))
      const req: DailyApiRequest = mockReq({
        params: { trip_id: 'fake-trip-id' }
      })
      const res: DailyApiResponse = mockRes()
      await getRawTripData(req, res)
      Sinon.restore()
    })
  })
})
