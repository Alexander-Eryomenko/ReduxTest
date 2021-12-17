import { REQUEST_USERS_INFO, REQUEST_USERS_INFO_SUCCESS, REQUEST_USERS_INFO_FAIL } from '../actions/usersAction'

const usersState = {
  users: [],
  isLoading: false,
  error: ''
}

const usersReducer = (state = usersState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_USERS_INFO:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_USERS_INFO_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
        error: ''
      }
    case REQUEST_USERS_INFO_FAIL:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: 'Data loading failed'
      }
    default:
      return state
  }
}

export default usersReducer