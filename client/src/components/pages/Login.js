import React,{useContext,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
// import Register from "./Register";
import axios from 'axios'
import {DataContext} from '../context/GlobalContext'

const Login = () => {

  const navigate=useNavigate();
  const [user,setUser]=useState({email:'',password:''})
  const state=useContext(DataContext);
  const [isLogin,setIsLogin]=state.isLogin;

  const [err,setErr]=useState('');
  

  //onchange inputs
  const onChangeInput=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
    setErr('');
  }

  //login submit
  const loginSubmit=async (e)=>{
    e.preventDefault();

    try {
      
      const res=await axios.post(`/user/login`,{

        email:user.email,
        password:user.password
      })

      setUser({email:'',password:''});
      localStorage.setItem('tokenStore',res.data.token);
      setIsLogin(true);

      setErr(res.data.msg);

      navigate("/admin");

      console.log(isLogin);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  return (
    <>
      <div className="login" id="login">
        <div className="main-container">
          <h1 className="title">Login for admin</h1>

          <div className="login-center">
            <form onSubmit={loginSubmit}>
              <p>{err}</p>
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
                autoComplete="on"
                value={user.password}
                onChange={onChangeInput}
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

    {/* comment it because admin only need it */}
      {/* <Register/> */}
    </>
  );
};

export default Login;
