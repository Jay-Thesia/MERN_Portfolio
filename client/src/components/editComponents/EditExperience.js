import React from "react";
import { Link } from "react-router-dom";

const EditExperience = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form>
              <h3>Update Experience</h3>

              <label htmlFor="text">Experience :</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>

              <div className="btns">
                <button className="update-btn">Update Experience</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
