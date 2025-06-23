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
              <i className="fa-solid fa-circle"></i> Hello! I'm <strong style={{ whiteSpace: 'nowrap' }}>Jay Thesia</strong>, a full-stack developer with <strong>2 years of hands-on experience</strong> building scalable web applications using the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I specialize in creating robust backend APIs, responsive UIs, and deploying cloud-native applications. I’m also skilled in AWS services like Lambda, EC2, S3, and SQS.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I earned my <strong style={{ whiteSpace: 'nowrap' }}>Bachelor of Engineering in Information Technology</strong> from Lukhdhirji Engineering College with a CGPA of <strong>9.0/10</strong>.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> Currently building a <strong>multi-LLM platform</strong> with document/image-based RAG, chat optimizations, and secure payments using Stripe and Razorpay.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> Improved chat load time from <strong>7–8s</strong> to <strong>2–3s</strong> using Next.js dynamic imports, Next/Image, and server-side API handling.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> Implemented <strong>AWS S3 pre-signed URLs</strong> for efficient file uploads/downloads and enhanced system performance.
            </li>
            <li>
              <i className="fa-solid fa-circle"></i> I’m passionate about building efficient, secure applications—and always open to learning and growing in the field of software development.
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default About;
