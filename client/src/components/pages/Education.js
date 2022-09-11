import React, { useContext } from "react";
import "./Education.css";
import { DataContext } from "../context/GlobalContext";

const Education = () => {
  const state = useContext(DataContext);
  const [eduValue] = state.education;
  //console.log(education);

  return (
    <div>
      <div className="main-container" id="Education">
        <div className="education">
          <h1 className="title">Education</h1>

          <div className="education-center">
            {/* single Education */}
            {eduValue.map((item) => (
              <div className="single-education" key={item._id}>
               <p>{item.eduValue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
