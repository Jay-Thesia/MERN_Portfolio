import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";
import "./About.css";

const About = () => {
  const state = useContext(DataContext);
  const [aboutValue] = state.about;

  return (
    <div className="main-container" id="About">
      <div className="about">
        <h1 className="title">About Us</h1>
        {/* about */}
        {/* about */}
        <div className="about-info">
          <ul className="bullet">
            <li>
              <i className="fa-solid fa-circle"></i> Hello everyone, I am Jay
              Thesia. This is my personal portfolio which has been created by
              me.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I am Student and self
              taught Developer.{" "}
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I am currently pursuing my
              Bachelor of Engineering from Lukhdhirji Engineering College in a
              specialization of Information and Technology with current CGPA of
              9/10.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I can cover all the full
              stack requirement in web development.
            </li>
          </ul>
        </div>

        {/* use a map function */}

        {/* {aboutValue?.map((item) => (
          <div className="about-info" key={item._id}>
            <ul>
              <li>
                <i className="fa-solid fa-circle"></i> {item.aboutValue}
              </li>
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default About;
