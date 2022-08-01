import React from "react";
import "./About.css";


const About = () => {
  return (
    <div className="main-container" id="About">
      <div className="about">
        <h1 className="title">About Us</h1>

        {/* about */}
        <div className="about-info">
          <ul className="bullet">
            <li><i class="fa-solid fa-circle"></i> Hello everyone, I am Jay Thesia. This is my personal portfolio which has been created by me.
            </li>
            <li><i class="fa-solid fa-circle"></i> I am Student and self taught Developer. </li>
            <li><i class="fa-solid fa-circle"></i> I am currently pursuing my Bachlore of Engineering from Lukhdhirji
              Engineering College in a specialization of Information and
              Technology with current CGPA of 9.17/10.
            </li>
            <li><i class="fa-solid fa-circle"></i> I can conver all the full stack requirement in web development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
