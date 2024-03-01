export function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{0,9}$/
  return regex.test(email)
}
export function validatePassword(password) {
  const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
  return regex.test(password)
}

export function validateDomain(url) {
  const regex = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
  return regex.test(url)
}
