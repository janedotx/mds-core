declare module 'asymmetric-crypto' {
  export function sign(payload: string, secretKey: string): string
  export function verify(payload: string, signature: string, publicKey: string): string
}