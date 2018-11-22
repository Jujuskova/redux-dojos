export const AUTH = (userData) => {
  return ({
  type: 'AUTH',
  payloads: userData
})
}