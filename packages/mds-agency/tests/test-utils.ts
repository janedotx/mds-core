import { ApiRequest, ApiResponse } from 'packages/mds-api-server'
import Sinon from 'sinon'

type ExtendableReq<P> = Partial<Pick<ApiRequest, 'body'>> & P
type ExtendableRes<Q> = Partial<Pick<ApiResponse, 'status' | 'locals'>> & Q

export interface MockedApiHandlers<P, Q> {
  req: ExtendableReq<P>
  res: ExtendableRes<Q>
}

type TransformReq<P> = (baseReq: ExtendableReq<{}>) => ExtendableReq<P>
type TransformRes<Q> = (baseRes: ExtendableRes<{}>) => ExtendableReq<Q>

export function getExpressFixtures<P, Q>(transformReq: TransformReq<P>, transformRes: TransformRes<Q>) : MockedApiHandlers<P, Q> {
  const body = {}
  const baseRes: ExtendableRes<{}> = {}
  const sendHandler = Sinon.fake.returns('asdf')
  const statusHandler = Sinon.fake.returns({
    send: sendHandler
  })
  baseRes.status = statusHandler
  baseRes.locals = { claims: null, scopes: [] }
  const res = transformRes(baseRes)
  const baseReq : ExtendableReq<{}> = { body }
  const req = transformReq(baseReq)
  return { req, res }
}