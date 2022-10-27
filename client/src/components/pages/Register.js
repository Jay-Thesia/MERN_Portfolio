import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");

  //onChangeInput

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  //register submit

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/user/register`, {

        username:user.username,
        email:user.email,
        password:user.password
      });

      setUser({ username: "", email: "", password: "" })
      setErr(res.data.msg)
    } catch (error) {
      error.response.data.msg && setErr(error.response.data.msg)
    }
  };
  return (
    <>
      <div className="login">
        <div className="main-container">
          <h1 className="title">Register admin</h1>

          <div className="login-center">
            <form onSubmit={registerSubmit}>
              <p>{err}</p>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="username"
                required
                value={user.username}
                onChange={onChangeInput}
              />
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                required
                value={user.email}
                onChange={onChangeInput}
              />

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                required
                value={user.password}
                onChange={onChangeInput}
              />

              <div className="login-btn">
                <button id="register" type="submit">
                  Register
                </button>
                <Link to="/">
                  <button>Home</button>
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
