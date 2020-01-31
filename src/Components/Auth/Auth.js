import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Auth extends React.Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
    }

    handleInputChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value 
      })
    }

    render(){

        return(
            <div>
                <div>Auth</div>
                <div>
                    <input name='username' value={this.state.username}  onChange={this.handleInputChange} placeholder='username' />
                    <input name='password' value={this.state.password} onChange={this.handleInputChange} placeholder='password'/>
                </div>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}