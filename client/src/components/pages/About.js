import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

const About = () => {
  const state = useContext(DataContext);
  const [aboutValue] = state.about;

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-800/50" id="About">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">About Me</h1>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200 dark:border-gray-700">
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <i className="fas fa-circle text-primary-500 dark:text-primary-400 mt-2 text-xs"></i>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Hello! I'm Jay Thesia, a full-stack developer with 2.5 years of hands-on experience building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-circle text-primary-500 dark:text-primary-400 mt-2 text-xs"></i>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                I specialize in creating robust backend APIs, responsive UIs, and deploying cloud-native applications. I'm also skilled in AWS services like Lambda, EC2, S3, and SQS.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-circle text-primary-500 dark:text-primary-400 mt-2 text-xs"></i>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                I earned my Bachelor of Engineering in Information Technology from Lukhdhirji Engineering College with a CGPA of 9.0/10.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-circle text-primary-500 dark:text-primary-400 mt-2 text-xs"></i>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                At Current Company, I delivered performance-optimized MERN applications, boosting engagement by 20% and cutting load time by 15% using chunking and image compression.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-circle text-primary-500 dark:text-primary-400 mt-2 text-xs"></i>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                I enjoy solving real-world problems, building elegant UIs, and writing clean, maintainable code. Always learning—currently diving deeper into system design and AWS architecture.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
