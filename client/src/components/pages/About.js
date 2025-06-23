import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";
import "./About.css";

const About = () => {
  const state = useContext(DataContext);
  const [aboutValue] = state.about;

  return (
      <div className="main-container" id="About">
      <div className="about">
        <h1 className="title">About Me</h1>
        <div className="about-info">
          <ul className="bullet">
            <li>
              <i className="fa-solid fa-circle"></i> Hello! I'm Jay Thesia, a full-stack developer with 2.5 years of hands-on experience building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I specialize in creating robust backend APIs, responsive UIs, and deploying cloud-native applications. I’m also skilled in AWS services like Lambda, EC2, S3, and SQS.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I earned my Bachelor of Engineering in Information Technology from Lukhdhirji Engineering College with a CGPA of 9.0/10.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> At EsparkBiz Technologies, I delivered performance-optimized MERN applications, boosting engagement by 20% and cutting load time by 15% using chunking and image compression.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I enjoy solving real-world problems, building elegant UIs, and writing clean, maintainable code. Always learning—currently diving deeper into system design and AWS architecture.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
