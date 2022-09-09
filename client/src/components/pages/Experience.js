import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="main-container" id="Experience">
      <div className="experience">
        <h1 className="title">Experience</h1>
        <div className="experience-center">
          {/* single experience */}
          <div className="single-experience">
            <p>
              <b>Vartit Technology, Ahmedabad, Gujarat</b>
            </p>
            <p className="role">Jr. Java Developer (02/22 - 04/22)</p>
            <ul>
              <li>
                <i className="fa-solid fa-circle"></i> <b>Tispy</b> : World's
                foremost phone monitoring application designed to help you
                ensure your child's and your smartphone's safety.{" "}
                <b> Top 100</b> in Parental Monitoring Software in Brazil.
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> Work with JSP, Servlet, and
                other server-side technology and fixing bug as daily duty.
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> Converting to MVC: I Converted
                the Some the other project Which is not following MVC
                architecture and the loading time decreasing by <b>40%</b>.
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> Tech Stack: Java, HTML, CSS,
                JSP, Servlet, Apache tomcat, Mysql.
              </li>
            </ul>
          </div>

          <div className="single-experience">
            <p>
              <b>PEP Coding(Remote)</b>
            </p>
            <p className="role">Intern (01/22 - 06/22)</p>
            <ul>
              <li>
                <i className="fa-solid fa-circle"></i> Data Structures and
                Algorithms & Web Developent intern
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> During my internship, I had
                required to learn and use a wide range of software and programs.
                Learned how to use these programs to a high level that will help
                me to grow my career.
              </li>
            </ul>
          </div>

          <div className="single-experience">
            <p>
              <b>Sparks Foundation (Virtual)</b>
            </p>
            <p className="role">Web Developer (08/21 - 09/21)</p>
            <ul>
              <li>
                <i className="fa-solid fa-circle"></i>
                <b> Project1: Banking System</b>
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> I have made the Banking System
                Website. Which uses Razor Pay API to transfer the money
              </li>

              <li>
                <i className="fa fa-arrow-right"></i> Tech Stack: Tools: Git,
                Github. API: RazorPay.
              </li>
              <hr />
              <li>
                <i className="fa-solid fa-circle"></i>
                <b> Project 2: Martial Arts Game</b>
              </li>
              <li>
                <i className="fa fa-arrow-right"></i> Animated martial🥋 game 🕹using
                Javascript.
              </li>

              <li>
                <i className="fa fa-arrow-right"></i> Tech Stack: JavaScript,
                HTML,CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
