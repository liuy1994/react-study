export const timeout = (ms, result) => {
  return new Promise(resolve => setTimeout(() => resolve(result), ms))
}