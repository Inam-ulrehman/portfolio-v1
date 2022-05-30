// Store ==== USER ====
export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

export const addUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

// Store === SignIn ===

export const addSignInLocalStorage = (value) => {
  localStorage.setItem('isSignIn', value)
}
export const getSignInLocalStorage = () => {
  const result = localStorage.getItem('isSignIn')
  return result
}
export const removeSignInLocalStorage = () => {
  localStorage.removeItem('isSignIn')
}
