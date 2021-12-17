export const REQUEST_USERS_INFO = 'REQUEST_USERS_INFO'
export const REQUEST_USERS_INFO_SUCCESS = 'REQUEST_USERS_INFO_SUCCESS'
export const REQUEST_USERS_INFO_FAIL = 'REQUEST_USERS_INFO_FAIL'
export const REQUEST_USERS = 'REQUEST_USERS'

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  }
}

export const requestUsersInfo = () => {
  return {
    type: REQUEST_USERS_INFO
  }
}

export const requestUsersInfoSuccess = (value) => {
  return {
    type: REQUEST_USERS_INFO_SUCCESS,
    payload: value
  }
}

export const requestUsersInfoFail = () => {
  return {
    type: REQUEST_USERS_INFO_FAIL
  }
}