import React from "react";
import Port from "../../images/Project portfolio.png";
import nazakat from "../../images/Nazak2.png";
import Ums from "../../images/Ums.png";
import "./Project.css";
const Project = () => {
  return (
    <div>
      <div className="main-container" id="Project">
        <div className="projects">
          <h1 className="title">Project</h1>

          <div className="project-center">
            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={Port} alt="Portfolio img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>Personal Portfolio</h3>
                <li>
                  <i class="fas fa-arrow-right"></i>&#160; Dynamic personal
                  website with admin panel which contains educations,
                  experiences, skills, projects, contact fields.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160; MERN STACK: Mongo DB,
                  ExpressJS, ReactJS, NodeJS.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160;{" "}
                  <a
                    href="https://www.jaythesia.me"
                    className="weblink"
                    target="_blank"
                  >
                    Link <i className="fa-solid fa-link"></i>
                  </a>
                </li>
              </div>
            </div>

            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={nazakat} alt="Resturant img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>Nazakat: The Finest Food</h3>
                <li>
                  <i class="fas fa-arrow-right"></i>&#160; About Our creative,
                  elevated food🍝 and beverage🍷 program combines satisfying
                  staples with imaginative twists.
                </li>

                <li>
                  {" "}
                  <i class="fas fa-arrow-right"></i>&#160; From boozy brunches🕛
                  and happy hours to family👨‍👨‍👧‍👦 dinners🍽, special occasions and
                  everything in between, NAZAKAT has something for everyone.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160; TECH STACK: Html5,
                  Css,Less,Js,Scss,Bootstrap4
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160;{" "}
                  <a
                    href="https://jay-thesia.github.io/Nazakat_The_Finest_Food/"
                    className="weblink"
                    target="_blank"
                  >
                    Link <i className="fa-solid fa-link"></i>
                  </a>
                </li>
              </div>
            </div>

            {/* single Project */}
            <div className="single-project">
              <div className="single-project-img">
                <img src={Ums} alt="University management img" width="300px" />
              </div>

              <div className="single-project-info">
                <h3>StudProf University Management</h3>
                <li>
                  <i class="fas fa-arrow-right"></i>&#160; UNIVERSITY MANAGEMENT SYSTEM deals with the maintenance of University data, records, instructions, and students information within the University.
                </li>

                <li>
                  {" "}
                  <i class="fas fa-arrow-right"></i>&#160; UMS is an automation system, which is used to store the informations, students record, and information of courses.
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160; IDE: Eclipse JAVA EE ||
                  Tech Stack: Spring framwork || Web Server(local): XAMPP || Database: mysql
                </li>

                <li>
                  <i class="fas fa-arrow-right"></i>&#160;
                  <a
                    href="https://github.com/Jay-Thesia/StudProf-University-Management"
                    className="weblink"
                    target="_blank"
                  >
                    Link <i className="fa-solid fa-link"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
