import React from "react";
import { connect } from 'react-redux'
import { incValue, decValue, setValue } from './redux/actions/actions'

import './App.css'


const App = ({ countValue, onIncreaseValue, onDecreaseValue, onSetCountValue }) => {
  return (
    <div className="flex">
      <div>{countValue}</div>
      <div className="pt30">
        <input 
          onChange={(event) => onSetCountValue(event.target.value)} type="text" />
        <button onClick={() => onDecreaseValue()}>Decrement</button>
        <button onClick={() => onIncreaseValue()}>Increment</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  countValue: state.countValue
})
const mapDispathToProps = (dispatch) => ({
  onSetCountValue: (value) => dispatch(setValue(value)),
  onIncreaseValue: () => dispatch(incValue()),
  onDecreaseValue: () => dispatch(decValue())
})
export default connect(mapStateToProps, mapDispathToProps)(App)