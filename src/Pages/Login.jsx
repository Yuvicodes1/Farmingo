import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='Login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your name' required/>
          <input type="email" placeholder='email-address' required/>
          <input type="password" name="" id="" placeholder='Password' required/>
        </div>
        <button>Continue</button>
        <p className='login-login'>Already have an account ? <span>Login Here !</span></p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
