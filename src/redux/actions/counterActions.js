export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export const incValue = (value) => {
  return {
    type: INCREASE_COUNTER,
    payload: value
  }
}

export const decValue = (value) => {
  return {
    type: DECREASE_COUNTER,
    payload: value
  }
}