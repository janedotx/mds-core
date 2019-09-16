import asymmetricCrypto from 'asymmetric-crypto'

const { SECRET_KEY, PUBLIC_KEY } = process.env

const sign = (policy : object) => {
  return asymmetricCrypto.sign(JSON.stringify(policy), SECRET_KEY!)
}

const verify = (policy : object, signature : string) => {
  return asymmetricCrypto.verify(JSON.stringify(policy), signature, PUBLIC_KEY!)
}

const getPublicKey = () => {
  return PUBLIC_KEY
}

export { sign, verify, getPublicKey }