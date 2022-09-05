import React from "react";
import {Link} from 'react-router-dom'
import './edit.css'

const EditAbout = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <h4 className="eduAdmin">Updated</h4>

        <div className="same-component">
          <div className="same-form">
            <form>
              <label htmlFor="text">About :</label>
              <textarea name="textarea" id="" cols="30" rows="5"></textarea>

              <div className="btns">
                <button type="submit" className="update-btn"> Update Item</button>

                <Link to="/admin"><button className="cancel-btn">Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAbout;
