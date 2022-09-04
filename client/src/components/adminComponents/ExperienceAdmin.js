import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const ExperienceAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Experience Component</h3>
        <form>
          <label htmlFor="text">Experience :</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="same-admin">
            <div className="icons">
              <Link to={"/editExperience"}>
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

            {/* single Education */}
            <div className="single-experience-add">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum perspiciatis praesentium porro eum libero, recusandae
                voluptatem similique dignissimos excepturi accusamus, sequi sunt
                modi non exercitationem suscipit accusantium dolorem cumque
                ullam iste neque, perferendis fugiat soluta? Voluptate eum
                temporibus, iure maiores sit, minus sunt obcaecati, sapiente
                totam facilis recusandae? Et, fugit.
              </p>
            </div>

            <h3 className="item-delete-tab">item deleted</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
