import { INCREASE_COUNTER, DECREASE_COUNTER, SET_VALUE } from '../actions/actions'

const initialState = {
  countValue: 0
}

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case SET_VALUE:
      return { ...state, countValue: payload }
    case INCREASE_COUNTER:
      return { ...state, countValue: state.countValue + 1 }
    case DECREASE_COUNTER:
      return { ...state, countValue: state.countValue - 1 }
    default: 
      return state
  }
}

export default counterReducer