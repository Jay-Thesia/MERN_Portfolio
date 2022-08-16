import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="login">
        <div className="main-container">
          <h1 className="title">Login for admin</h1>

          <div className="login-center">
            <form action="">
              <p>You edited it</p>
              <label htmlFor="name">Name :</label>
              <input
                type="email"
                placeholder="Enter your Name"
                name="email"
                required
              />
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
                <button id="login" type="submit">
                  Register
                </button>
                <Link to="/">
                  <button>Back to home</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Register;
