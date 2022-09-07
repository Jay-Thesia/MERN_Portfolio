import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Register from "./Register";

const Login = () => {
  return (
    <>
      <div className="login" id="login">
        <div className="main-container">
          <h1 className="title">Login for admin</h1>

          <div className="login-center">
            <form action="">
              <p>You edited it</p>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                required
              />

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                required
              />

              <div className="login-btn">
                <button id="login" type="submit">Login</button>
                <Link to="/">
                  <button>Back to home</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Register */}
      {/* <Register/> */}
    </>
  );
};

export default Login;
