export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'
export const SET_VALUE = 'SET_VALUE'

export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value
  }
}

export const incValue = () => {
  return {
    type: INCREASE_COUNTER,
  }
}

export const decValue = () => {
  return {
    type: DECREASE_COUNTER,
  }
}