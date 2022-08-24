import React from "react";
import { Link } from "react-router-dom";

const AboutAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>About Component</h4>
          <label htmlFor="text">About :</label>
          <textarea name="textarea" cols="30" rows="3"></textarea>
          <button type="submit">Update</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="icons">
            <Link to={"/"}>
              {" "}
              <i
                style={{ color: "black", fontSize: "20px" }}
                className="fa-solid fa-edit"
              ></i>{" "}
            </Link>
            <i
              style={{ color: "black", fontSize: "20px" }}
              className="fa-solid fa-trash"
            ></i>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            iusto quod blanditiis amet odio eos commodi similique sint, soluta
            sunt quisquam magni tempora quas quasi explicabo omnis cumque eius!
            Accusamus.
          </p>
        </div>
      </div>

      <h3 className="item-delete-tab">item deleted</h3>
    </div>
  );
};

export default AboutAdmin;
