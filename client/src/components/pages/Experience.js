import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";
import "./Experience.css";

const Experience = () => {
  const state = useContext(DataContext);
  const [expValue] = state.experience;
  // console.log(expValue);

  return (
    <div className="main-container" id="Experience">
      <div className="experience">
        <h1 className="title">Experience</h1>

        <div className="experience-center">
          {expValue.map((item) => (
            <div className="single-experience" key={item._id}>
              <p>{item.expValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
