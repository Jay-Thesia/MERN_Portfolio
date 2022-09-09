import axios from "axios";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [aboutValue, setAbout] = useState([]);

  //fetching data
  const fetchData = async () => {
    const res1 = await axios.get("/about");
    // console.log(res1.data);
    setAbout(res1.data);
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
    about: [aboutValue, setAbout]
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
