import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const EducationAdmin = () => {

  const[eduValue,setEducation]=useState();

  return (
    <div className="same-component">
      <div className="same-form">
        
      <h3 className="item-delete-tab">The message</h3>
        <h3 className="eduAdmin">Education Component:</h3>
        <form className="eduForm">
          {/* <label htmlFor="text">Specialization & Date :</label>
          <input type="text" placeholder="Course Name & date(Ex.2019-23)" require="true" />

          <label htmlFor="text">Organization :</label>
          <input type="text" placeholder="College Name" require="true" />

          <label htmlFor="number">Grades :</label>
          <input type="number" placeholder="GPA" require="true" /> */}

          <br />
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {/* single education */}

          <div className="same-admin">
            <div className="icons">
              <Link to={"/editEducation"}>
                <i
                  style={{ color: "green", fontSize: "20px" }}
                  className="fa-solid fa-edit"
                ></i>
              </Link>
              <i
                style={{ color: "red", fontSize: "20px" }}
                className="fa-solid fa-trash"
              ></i>
            </div>

            <br />

            <div className="single-education">
              <p><b>Information & Technology(2019-2023)</b> </p>
              <p>Lukhdhirji Engineering College,Morbi</p>
              <p>CGPA: 9.17/10</p>
            </div>

           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EducationAdmin;
