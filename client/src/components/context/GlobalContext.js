import axios from "axios";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [aboutValue, setAbout] = useState([]);
  const [eduValue, setEducation] = useState([]);
  const [project, setProject] = useState([]);
  const [expValue, setExperience] = useState([]);

  //checking token login
  const checkLogin = async () => {
    const token = localStorage.getItem("tokenStore");

    if (token) {
      const verified = await axios.get(`/user/verify`, {
        headers: { Authorization: token },
      });
      // console.log(verified);

      setIsLogin(verified.data);

      if (verified.data === false) {
        // console.log(verified.data+"verified data check");
        // console.log(localStorage.getItem("tokenStore"))
        return localStorage.clear();
      } else {
        setIsLogin(true);
      }
    }
  };

  useEffect(() => {
    try {
      checkLogin();
    } catch (error) {
      console.log(error);
    }
  });


  //fetching data
  const fetchData = async () => {
    //*******for fetch about************
    const res1 = await axios.get("/about");
    // console.log(res1.data);
    setAbout(res1.data);

    //*******for fetch edcation************
    const res2 = await axios.get("/education");
    // console.log(res2.data);
    setEducation(res2.data);

    //*******for fetch Experience************
    const res3 = await axios.get("/experience");
    //  console.log(res3.data);
    setExperience(res3.data);

    //*******for fetch Project************
    const res4 = await axios.get("/project");
    //  console.log(res4.data);
    setProject(res4.data);
  };

  //use effect to take the data from backend dymaically and render it
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //create state
  const state = {
    about: [aboutValue, setAbout],
    education: [eduValue, setEducation],
    experience: [expValue, setExperience],
    project: [project, setProject],
    isLogin: [isLogin,setIsLogin]
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
