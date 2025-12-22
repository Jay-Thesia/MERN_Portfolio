import React from "react";
import Port from "../../images/Project portfolio.png";
import nazakat from "../../images/Nazak2.png";
import Ums from "../../images/Ums.png";
import jpProject from "../../images/jpProject.png";

const Project = () => {
  const projects = [
    {
      image: jpProject,
      title: "JP Projects Website",
      description: [
        "Developed a professional website for JP Projects, a construction company specializing in commercial IT office spaces and private property development, using the MERN stack.",
        "Designed a responsive website with sections for services, ongoing and completed projects, and company information.",
        "Provided a seamless and interactive user experience.",
        "Integrated an admin panel for easy content management and updates.",
        "TECH STACK: MongoDB, Express.js, React.js, Node.js, Netlify, Render.",
      ],
      link: "https://jpatelprojects.netlify.app/",
    },
    {
      image: Port,
      title: "Personal Portfolio",
      description: [
        "Dynamic personal website with admin panel which contains education, experiences, skills, projects and contact fields.",
        "MERN STACK: Mongo DB, ExpressJS, ReactJS, NodeJS.",
      ],
      link: "https://www.jaythesia.me",
    },
    {
      image: nazakat,
      title: "Nazakat: The Finest Food",
      description: [
        "About Our creative, elevated food🍝 and beverage🍷 program combines satisfying staples with imaginative twists.",
        "From boozy brunches🕛 and happy hours to family👨‍👨‍👧‍👦 dinners🍽, special occasions and everything in between, NAZAKAT has something for everyone.",
        "TECH STACK: Html5, Css, Less, Js, Scss, Bootstrap4",
      ],
      link: "https://jay-thesia.github.io/Nazakat_The_Finest_Food/",
    },
    {
      image: Ums,
      title: "StudProf University Management",
      description: [
        "UNIVERSITY MANAGEMENT SYSTEM deals with the maintenance of University data, records, instructions, and student information within the University.",
        "UMS is an automation system, which is used to store the information, student record, and information of courses.",
        "IDE: Eclipse JAVA EE || Tech Stack: Spring framwork || Web Server(local): XAMPP || Database: mysql",
      ],
      link: "https://github.com/Jay-Thesia/StudProf-University-Management",
    },
  ];

  return (
    <div className="section-container bg-white dark:bg-gray-900" id="Project">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title">Projects</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <i className="fas fa-arrow-right text-primary-500 dark:text-primary-400 mt-1.5 flex-shrink-0"></i>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                >
                  <span>View Project</span>
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
