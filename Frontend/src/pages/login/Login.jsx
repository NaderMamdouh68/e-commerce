/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './login.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';




function Login_Signup() {
  const [user_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loginData, setLoginData] = useState(false);
  const [signupData, setSignupData] = useState("");
  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    if (localStorage.getItem("type") === "admin") {
      return window.location.href = "/dashboard";
    } else {
      return window.location.href = "/";
    }
  }










  const signup = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/authentication/signup", {
      user_name: user_name,
      email: email,
      password: password,
      checkpassword: checkpassword,
      phonenumber: phonenumber,
    }).then((response) => {
      if (!response.data.signup) {
        setErrors(response.data.errors);
        console.log(response.data.errors);
        setSignupData(false);
        window.location.reload();
      } else {
        setSignupData(true);
        window.location.reload();
      }
    }
    );
  };


  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/authentication/login", {
      user_name: user_name,
      password: password,
    }).then((response) => {
      if (!response.data.login) {
        setLoginData(false);
      } else {
        setLoginData(true);
        localStorage.setItem("token", "Bearer " + response.data.token);
        localStorage.setItem("type", response.data.type);
        if (response.data.type === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }

      }
    }
    ).catch((err) => {
      setErrors(err.response.data.errors);
      console.log(err.response.data.errors);
    });
  };








  return (
    <div className='loginn'>
      <div className="containerr">
        <input type="checkbox" id="flip" />
        <div className="coverr">
          <div className="frontt">
            <div className="txt">
              <span className="txt-1">B L A C K S H O P P I N G <br /> E-Commerce</span>
              <span className="txt-2">Let's get connected</span>
            </div>
          </div>

          <div className="backk">
            <div className="txt">
              <span className="txt-1">B L A C K S H O P P I N G <br /> E-Commerce </span>
              <span className="txt-2">Let's get connected</span>
            </div>
          </div>
        </div>
        <div className="formss">
          <div className="form-contentt">
            <div className="loginn-form">

              <div className="title">Login</div>
              <form action="" >
                <div className="input-boxes">
                  <div className="input-boxx">

                    <input
                      className='inputt'
                      type="text"
                      name="user_name"
                      value={loginData.user_name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="txt"><a href="#">Forgot password?</a></div>
                  <div >
                    <input
                      className="button"
                      type="submit"
                      name="login"
                      value="Login"
                      onClick={login}
                    />
                  </div>
                  <div className="sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                  {errors && errors.map((error, index) => (
                    <div key={index} className="error">
                      {error.msg}
                    </div>
                  ))}
                </div>
              </form>
            </div>



            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="" method="POST">
                <div className="input-boxes">
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="text"
                      pattern=".{3,}"
                      title="User Name Must Be Larger Than 3 Characters"
                      name="user_name"
                      value={signupData.user_name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Name" required
                    />
                  </div>
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="text"
                      name="phonenumber"
                      value={signupData.phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      placeholder="Enter your phonenumber"
                      required
                    />
                  </div>
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="password"
                      minLength="4"
                      name="password"
                      value={signupData.password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="input-boxx">

                    <input
                      className='inputt'

                      type="password"
                      minLength="4"
                      name="checkpassword"
                      value={signupData.checkpassword}
                      onChange={(e) => setCheckpassword(e.target.value)}
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
                  <div className="sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
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