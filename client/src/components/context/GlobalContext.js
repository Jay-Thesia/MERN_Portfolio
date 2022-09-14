import axios from "axios";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [aboutValue, setAbout] = useState([]);
  const [eduValue, setEducation] = useState([]);
  const [expValue,setExperience]=useState([]);

  //fetching data
  const fetchData = async () => {

    //*******for fetch about************
    const res1 = await axios.get("/about");
    // console.log(res1.data);
    setAbout(res1.data);

    //*******for fetch edcation************
    const res2=await axios.get("/education");
    // console.log(res2.data);
    setEducation(res2.data);


     //*******for fetch Experience************
     const res3=await axios.get("/experience");
    //  console.log(res3.data);
     setExperience(res3.data);
 

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
    education:[eduValue,setEducation],
    experience:[expValue,setExperience],
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
