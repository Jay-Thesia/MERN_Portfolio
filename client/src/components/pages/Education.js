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


{/* static part */}
            {/* single Education */}
            <div className="single-education">
              <p><b>Information & Technology(2019-2023)</b> </p>
              <p>Lukhdhirji Engineering College,Morbi</p>
              <p>CGPA: 9.17/10</p>
            </div>

            {/* single Education */}
            <div className="single-education">
            <p><b>12th HSC(2018-19)</b> </p>
              <p>Shraddha Vidhya Mandir,Ahmedabad</p>
              <p>PR: 83.40%</p>
            </div>

            {/* single Education */}
            <div className="single-education">
            <p><b>10th SSC(2016-17)</b> </p>
              <p>Shree Narayana Guru Vidhyalaya,Ahmedabad</p>
              <p>PR: 96.75%</p>
            </div>

{/* dynamic part */}
            {/* single Education
            {eduValue.map((item) => (
              <div className="single-education" key={item._id}>
               <p>{item.eduValue}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
