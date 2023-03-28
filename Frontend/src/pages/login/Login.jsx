/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './login.css'
import Axios from 'axios'


function Login_Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState("");
  const [signupData, setSignupData] = useState("");

  const signup = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/signup", {
      username: name,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setSignupData(response.data.message);
        console.log(response.data.message);
      } else {
        console.log("Signup Successfull");
      }
    });
  };
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/login", {
      name: name,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginData(response.data.message);
        console.log(response.data.message);
      } else {
        setLoginData(response.data[0].email);
        console.log("login Successfull");
      }
    });
  };








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
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <input className="button1" type="submit" name="login" value="Login"
                      onClick={login}
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
                      name="username"
                      value={signupData.username}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Name" required
                    />
                  </div>
                  <div className="input-box">

                    <input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
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
                      onChange={signupData.passwordConfirm}
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
                      onClick={signup}
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

export default Login_Signup