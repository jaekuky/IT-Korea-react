import React from 'react'
import './Login.css'

import logo from '../../assets/Logo.png'

const Login = () => {
  return (
    <div className='login-container'>
      <div className="logo-box">
          <img src={logo} alt=""></img>
      </div>
      <div className="paragraph-wrapper">
          <div className="paragraph1">
              <p>Log Into Your</p>
          </div>
          <div className="paragraph2">
              <p className="word1">EduCore</p>
              <p className="word2">Account</p>
          </div>
          <div className="paragraph3">
              <p>SELECT YOUR ACCOUNT</p>
          </div>
        </div>
        <div className="button-wrapper">
            <button>Free EduCore Account</button>
            <button>Student Login</button>
            <button>EduCore Network Login</button>
            <button>Community Login</button>
        </div>
        <div className="create-account">
            <div className="first-line">
                <p>Don't have a Canvas account?</p>
                <a href="#">Create a free basic Canvas account here.</a>
                <p>Need help logging in,</p>
            </div>
            <div className="second-line">
                <p>creating an account, or using a join or pairing code?</p>
                <a href="#">View these Canvas Support FAQs.</a>
            </div>
        </div>
    </div>
  )
}

export default Login