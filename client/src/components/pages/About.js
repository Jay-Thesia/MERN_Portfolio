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
              <i className="fa-solid fa-circle"></i> Hello! I'm{" "}
              <strong>Jay Thesia</strong>, a full-stack developer with{" "}
              <strong>2 years of hands-on experience</strong> building scalable
              web applications using the{" "}
              <strong>
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </strong>
              .
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I specialize in creating
              robust backend APIs, responsive UIs, and deploying cloud-native
              applications. I’m also skilled in <strong>AWS services</strong>{" "}
              like Lambda, EC2, S3, and SQS.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I earned my{" "}
              <strong>Bachelor of Engineering in Information Technology</strong>{" "}
              from Lukhdhirji Engineering College with a CGPA of{" "}
              <strong>9.0/10</strong>.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> At{" "}
              <strong>Current Company</strong>, I delivered
              performance-optimized MERN applications, boosting engagement by
              20% and cutting load time by 15% using chunking and image
              compression.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I enjoy solving real-world
              problems, building elegant UIs, and writing clean, maintainable
              code. Always learning—currently diving deeper into system design
              and AWS architecture.
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
