import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

const Experience = () => {
  const state = useContext(DataContext);
  const [expValue] = state.experience;

  const experiences = [
    {
      company: "Weam.ai (Hybrid)",
      role: "Full Stack Developer (09/24 - Today)",
      points: [
        "Built and launched Weam.ai, a multi-LLM AI platform with Retrieval-Augmented Generation (RAG) to enhance response quality and relevance.",
        "Implemented real-time features using WebSockets and Redis Pub/Sub, enabling horizontal scalability.",
        "Optimized performance via Next.js dynamic component loading and Image component, reducing page load time by approximately 35%.",
        "Integrated Stripe and Razorpay payment gateways from scratch, including webhooks, subscription plans, and multi-tier support.",
        "Implemented AWS S3 file handling with pre-signed URLs, cutting upload latency by ~40%.",
        "Leveraged SSR and server-side API calls in Next.js to deliver SEO-friendly and high-performing pages.",
        "Reduced chat response time from 8–9 seconds to 2–3 seconds by optimizing backend queries, caching, and component rendering.",
      ],
      techStack: {
        Frontend: "Next.js, React.js",
        Backend: "Node.js, Express.js",
        "Real-Time": "Socket.io, Redis Pub/Sub",
        Payments: "Stripe, Razorpay",
        "Cloud & Storage": "AWS S3 (Pre-signed URLs)",
        Database: "MongoDB, Firebase, Redis",
        "Version Control": "Git, GitHub",
      },
    },
    {
      company: "Espark Tech, Ahmedabad, Gujarat",
      role: "Software Developer (01/23 - 09/23)",
      points: [
        "Collaborated with cross-functional teams to identify client requirements and deliver tailored web and mobile solutions.",
        "Contributed to company growth through a versatile skill set in web and mobile development and migration services.",
        "Created web and mobile applications, including successful deployments with React and React Native.",
        "Led and executed 500+ HubSpot migrations, ensuring smooth transitions for clients.",
        "Designed and launched cross-platform mobile applications with React Native, delivering a 20% increase in user engagement and a 15% reduction in app load times.",
      ],
      techStack: {
        Frontend: "React.js",
        Backend: "Node.js, Express.js, Nest.js",
        Mobile: "Kotlin (Android), React Native",
        "ORM (Object-Relational Mapping)": "Sequelize, Prisma",
        Databases: "PostgreSQL, MySQL, MongoDB, Firebase",
        "Version Control & Collaboration": "Git, GitHub, GitLab",
        HubSpot: "Experience in HubSpot migrations of all objects and custom properties",
      },
    },
    {
      company: "Vartit Technology, Ahmedabad, Gujarat",
      role: "Jr. Java Developer (02/22 - 04/22)",
      points: [
        "Tispy: World's foremost phone monitoring application designed to help you ensure your child's and your smartphone's safety. Top 100 in Parental Monitoring Software in Brazil.",
        "Work with JSP, Servlet, and other server-side technology and fixed bugs as a daily duty.",
        "Converting to MVC: I Converted the Some the other project Which is not following MVC architecture and the loading time decreasing by 40%.",
      ],
      techStack: {
        "Tech Stack": "Java, HTML, CSS, JSP, Servlet, Apache tomcat, Mysql",
      },
    },
    {
      company: "PEP Coding (Remote)",
      role: "Intern (01/22 - 06/22)",
      points: [
        "Data Structures and Algorithms & Web Development intern",
        "During my internship, I had required to learn and use a wide range of software and programs. Learned how to use these programs to a high level which will help me to grow my career.",
      ],
    },
    {
      company: "Sparks Foundation (Virtual)",
      role: "Web Developer (08/21 - 09/21)",
      points: [
        "Project1: Banking System - I have made the Banking System Website. Which uses Razor Pay API to transfer the money. Tech Stack: Tools: Git, Github. API: RazorPay.",
        "Project 2: Martial Arts Game - Animated martial🥋 game 🕹using Javascript. Tech Stack: JavaScript, HTML, CSS",
      ],
    },
  ];

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-800/50" id="Experience">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-title">Experience</h1>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.company}
                </h3>
                <p className="text-base sm:text-lg text-primary-600 dark:text-primary-400 font-semibold">
                  {exp.role}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                    <i className="fas fa-arrow-right text-primary-500 dark:text-primary-400 mt-1 sm:mt-1.5 flex-shrink-0 text-xs sm:text-sm"></i>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              {exp.techStack && (
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                    <i className="fas fa-code text-primary-500 dark:text-primary-400 mr-2 text-sm sm:text-base"></i>
                    Tech Stack:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {Object.entries(exp.techStack).map(([key, value], idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                          {key}:
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
