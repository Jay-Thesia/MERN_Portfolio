import React from "react";
// import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import "./Header.css";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";
import Login from "./Login";
import Profile from "../../images/profile2.jpg";
import Resume from "../../images/Jay_Thesia_Resume_2022.pdf";

// import { loadFull } from "tsparticles";

const Header = () => {
  return (
    <>
      <div className="header" id="header">
        <p className="iAm">I am a </p>
        <div className="fullName">
          <h1 className="typewriter">
            <Typewriter
              options={{
                background: {
                  color: {
                    value: "#313c70",
                  },
                },

                strings: [
                  "Software Engineer💻",
                  "Web Developer👨",
                  "Content Creator🎥",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>

        {/* cv card */}
        <div className="cv">
          <span>
            <b>CV: </b>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="fa-solid fa-file-pdf"
            ></a>
          </span>
        </div>

        <div className="personalInfo">
          <div className="personalInfo-center">
            <div className="personalInfo-details">
              {/* single info */}
              <div className="info">
                <label htmlFor="name">Full Name:</label>
                <h4>Jay Thesia</h4>
              </div>

              {/* single occupation */}
              <div className="info">
                <label htmlFor="occupation">Occupation:</label>
                <h4>Turn Chai☕ Into Code</h4>
              </div>

              {/* Email */}
              <div className="info">
                <label htmlFor="name">Email:</label>
                <h4>jayengineer.jp2410@gmail.com</h4>
              </div>
            </div>

            <div className="personalInfo-img">
              <img src={Profile} alt="profile img" className="profile" />
            </div>
          </div>
        </div>

        <div>
          <About />
        </div>

        <div>
          <Education />
        </div>

        <div>
          <Project />
        </div>

        <div>
          <Experience />
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Header;
