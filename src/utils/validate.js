export function validateEmail(email) {
  console.log(email)
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{0,9}$/
  return regex.test(email)
}
export function validatePassword(password) {
  const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
  return regex.test(password)
}
