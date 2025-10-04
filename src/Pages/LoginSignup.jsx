import React from 'react'
import './Styles/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>Sign Up</h1>
            <div className='loginsignup-fields'>
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
            </div>
            <button>Sign Up</button>
            <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
            <div className='loginsignup-agree'>
                <input type='checkbox' name='agree' id='agree' />
                <p>By continuing i agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}
export default LoginSignup