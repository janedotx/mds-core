export function nullishCoalescing<T>(foo: T | undefined | null) {
  return foo !== null && foo !== undefined
}