export function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{0,9}$/
  return regex.test(email)
}
export function validatePassword(password) {
  const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
  return regex.test(password)
}

export function validateDomain(url) {
  const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(:[0-9]{1,})?(\/.*)?$/

  const match = url.match(regex)

  if (match) {
    return match[3]
  }

  return null
}
