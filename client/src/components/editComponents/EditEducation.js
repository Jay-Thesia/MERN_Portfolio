import React from "react";
import { Link } from "react-router-dom";
import "./edit.css";

const EditEducation = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form>
              <h3 className="updated">Updated Education</h3>
              <label htmlFor="text">Specialization :</label>
              <input type="text" placeholder="Course Name" require />

              <label htmlFor="date">Start Date : </label>
              <input type="date" require />

              <label htmlFor="date">End Date : </label>
              <input type="date" require />

              <label htmlFor="text">Organization :</label>
              <input type="text" placeholder="College Name" require />

              <label htmlFor="number">Grades :</label>
              <input type="number" placeholder="GPA" require />

              <div className="btns">
                <button type="submit" className="update-btn">
                  Update Edu
                </button>
                <Link to="/admin"><button className="cancel-btn">Cancel</button></Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
