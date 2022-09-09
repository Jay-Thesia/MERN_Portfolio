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

        {/* use a map function */}
        {aboutValue.map((item) => (
          <div className="about-info" key={item._id}>
            <ul>
              <li>
                <i className="fa-solid fa-circle"></i> {item.aboutValue}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
