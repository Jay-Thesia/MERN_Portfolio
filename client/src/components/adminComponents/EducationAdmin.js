import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const EducationAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Education Component:</h3>
        <form className="eduForm">
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
              <p>self-learning</p>
            </div>

            <h3 className="item-delete-tab">The message/</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAdmin;
