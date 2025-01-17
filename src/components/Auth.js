import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {updateUserInfo} from '../ducks/reducer'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  login = () => {
    const {username, password} = this.state
    axios
      .post('/auth/login', {username, password})
      .then(res => {
        this.props.updateUserInfo(res.data.user)
        Swal.fire(res.data.message)
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        Swal.fire(err.response.data.message)
      })
  }

  register = () => {
      const { username, password } = this.state
      axios
        .post('/auth/register', {username, password})
        .then(res => {
          console.log(res.data)
          this.props.updateUserInfo(res.data.user)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
  }
  
  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange('username', e.target.value)}
          value={this.state.username}
          placeholder="Username"
          type="text"
        />
        <input
          onChange={e => this.handleChange('password', e.target.value)}
          value={this.state.password}
          placeholder="Password"
          type="password"
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.Register}>Register</button>

        {/* <Link to="/register">
          <h4>Need an account? Register here!</h4>
        </Link> */}
      </div>
    )
  }
}

// export default (Login)
export default connect(null, {updateUserInfo})(Login)