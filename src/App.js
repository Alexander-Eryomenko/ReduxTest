import React from "react";
import { connect } from 'react-redux'
import { incValue, decValue } from './redux/actions/counterActions'
import {requestUsers} from './redux/actions/usersAction'

import './App.css'

const Users = ({users}) => {
  return (
      <div className="pt30"> {users.map(item => {
        return(
          <div key={item.id}>
            {item.name}
          </div>
        )
      })} </div>
    
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 0
    }
  }

  onChange = (value) => {
    this.setState({
      inputValue: value
    })
  }

    render() {
      const { countValue, onIncreaseValue, onDecreaseValue, requestUsers, users } = this.props
      return (
        <div className="flex">
          <div>{countValue}</div>
          <div className="pt30">
            <input onChange={(event) => this.onChange(Number(event.target.value))} type="text" />
            <button onClick={() => onIncreaseValue(this.state.inputValue)}>Increment</button>
            <button onClick={() => onDecreaseValue(this.state.inputValue)}>Decrement</button>
          </div>
          <div className="pt30">
            <button onClick={() => requestUsers()}>Show name</button>
            {users && <Users users={users} />}
          </div>
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    countValue: state.counter.countValue,
    users: state.users.users
  }
  
}

const mapDispathToProps = (dispatch) => ({
  onIncreaseValue: (value) => dispatch(incValue(value)),
  onDecreaseValue: (value) => dispatch(decValue(value)),
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mapStateToProps, mapDispathToProps)(App)