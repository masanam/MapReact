import React from 'react'
import { Link } from 'react-router-dom'

import './UserForm.css'

const LoginForm = (props) => (
  <div className='row'>
    <div className='col-md-offset-4 col-md-3'>
      <div>{props.error}</div>
      <form className='user-form'>
        <h4>Login here</h4>
        <input
          className='form-control input-sm chat-input'
          name='email'
          type='text'
          placeholder='email'
          onChange={props.onChange} />
        <br />
        <input
          className='form-control input-sm chat-input'
          type='password'
          name='password'
          placeholder='password'
          onChange={props.onChange} />
        <br />
        <div className='wrapper'>
          <span className='group-btn'>
            <input
              className='btn btn-primary btn-md'
              value='Login'
              type='submit'
              onClick={props.onSave} />
          </span>
          <br />
          <br />
          <p>
            <span>New user? </span>
            <Link to='/company/register'>Create new account</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
)

export default LoginForm
