import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/counterActions'

const initialState = {
  countValue: 0
}

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INCREASE_COUNTER:
      return { ...state, countValue: state.countValue + payload }
    case DECREASE_COUNTER:
      return { ...state, countValue: state.countValue - payload }
    default:
      return state
  }
}

export default counterReducer