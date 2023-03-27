import React, { useState } from 'react'
import './login.css'

const Login = () => {

  const [loginData, setLoginData] = useState({
    name :"",
    password: ""
  })
  const [signupData, setsignupData] = useState({
    name :"",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  function handleloginChange(event) {
    const {name, value} = event.target
    setLoginData(prevFormData => ({
        ...prevFormData,
        [name]:  value
    }))
}
  function handleSignupChange(event) {
    const {name, value} = event.target
    setsignupData(prevsignData => ({
        ...prevsignData,
        [name]:  value
    }))
    
}

  function handleLogin (){
    console.log("hello")
  }






  return (
    <div className='login'>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <div className="text">
              <span className="text-1">I S L A M E Y A T <br /> Islam is peace</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>

          <div className="back">
            <div className="text">
              <span className="text-1">ISLAMEYAT <br /> Islam is peace</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="" >
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      name="name"
                      value={loginData.name}
                      onChange={handleloginChange}
                      placeholder="Enter your Name"
                      required 
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleloginChange} 
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <input type="submit" name="login" value="Login" 
                     onClick={handleLogin}
                    />
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
                </div>
              </form>
            </div>



            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="" method="POST">
                <div className="input-boxes">
                  <div className="input-box">
                    
                    <input
                      type="text"
                      pattern=".{3,}"
                      title="User Name Must Be Larger Than 3 Characters"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange} 
                      placeholder="Enter your Name" required
                    />
                  </div>
                  <div className="input-box">

                    <input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange} 
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    
                    <input
                      type="password"
                      minlength="4"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange} 
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="input-box">
                    
                    <input
                      type="password"
                      minlength="4"
                      name="passwordConfirm"
                      value={signupData.passwordConfirm}
                      onChange={handleSignupChange}  
                      placeholder="Enter your password again" 
                      required
                    />
                  </div>
                  <div >
                    <input
                      className="button"
                      type="submit"
                      name="signup"
                      value="Sign up"
                    />
                  </div>
                  <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login