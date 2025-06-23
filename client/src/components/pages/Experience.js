import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";
import "./Experience.css";

const Experience = () => {
  const state = useContext(DataContext);
  const [expValue] = state.experience;
  // console.log(expValue);

  return (
    <div className="main-container" id="Experience">
      <div className="experience">
        <h1 className="title">Experience</h1>

        {/* single experience */}
        <div className="single-experience">
          <p>
            <b>Weam.ai (Hybrid)</b>
          </p>
          <p className="role">Full Stack Developer (09/24 - Today)</p>
          <ul>
            <li>
              <i className="fa-solid fa-circle"></i>
              <strong>Built and launched Weam.ai</strong>, a multi-LLM AI platform with
              <em> Retrieval-Augmented Generation (RAG)</em> to enhance response quality and relevance.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Implemented real-time features</strong> using WebSockets and{" "}
              <span className="important">Redis Pub/Sub</span>, enabling horizontal scalability.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Optimized performance</strong> via Next.js dynamic component loading and{" "}
              <span className="important">Image component</span>, reducing page load time by approximately <strong>35%</strong>.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Integrated Stripe and Razorpay</strong> payment gateways from scratch, including{" "}
              <em>webhooks, subscription plans, and multi-tier support</em>.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Implemented AWS S3 file handling</strong> with pre-signed URLs, cutting upload latency by <strong>~40%</strong>.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              Leveraged <strong>SSR and server-side API calls</strong> in Next.js to deliver SEO-friendly and high-performing pages.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Reduced chat response time</strong> from <em>8–9 seconds to 2–3 seconds</em> by optimizing backend queries, caching, and component rendering.
            </li>
            <h5>
              <i className="fa fa-arrow-right"></i> Tech Stack:
            </h5>
            <li style={{ marginLeft: "10px" }}>
              <li>
                <strong>Frontend:</strong> Next.js, React.js
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js
              </li>
              <li>
                <strong>Real-Time:</strong> Socket.io, Redis Pub/Sub
              </li>
              <li>
                <strong>Payments:</strong> Stripe, Razorpay
              </li>
              <li>
                <strong>Cloud & Storage:</strong> AWS S3 (Pre-signed URLs)
              </li>
              <li>
                <strong>Database:</strong> MongoDB, Firebase, Redis
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub
              </li>
            </li>
          </ul>
        </div>

        {/* single experience */}

        <div className="single-experience">
          <p>
            <b>Espark Tech, Ahmedabad, Gujarat</b>
          </p>
          <p className="role">Software Developer (01/23 - 09/23)</p>
          <ul>
            <li>
              <i className="fa-solid fa-circle"></i>
              <strong>Collaborated with cross-functional teams</strong> to
              identify client requirements and deliver{" "}
              <em>tailored web and mobile solutions.</em>
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Contributed to company growth</strong> through a versatile
              skill set in{" "}
              <em>web and mobile development and migration services</em>.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i> Created
              <strong> web and mobile applications</strong>, including{" "}
              <em>successful deployments</em> with{" "}
              <span className="important">React and React Native.</span>
            </li>
            <li>
              <i className="fa fa-arrow-right"></i>{" "}
              <strong>Led and executed 500+</strong>{" "}
              <span className="important">HubSpot migrations</span>, ensuring{" "}
              <em>smooth transitions</em> for clients.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i> Designed and launched
              cross-platform mobile applications with React Native, delivering a
              20% increase in user engagement and a 15% reduction in app load
              times.
            </li>
            <h5>
              <i className="fa fa-arrow-right"></i> Tech Stack:
            </h5>
            <li style={{ marginLeft: "10px" }}>
              <li>
                <strong>Frontend:</strong> React.js
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, Nest.js
              </li>
              <li>
                <strong>Mobile:</strong> Kotlin (Android), React Native
              </li>
              <li>
                <strong>ORM (Object-Relational Mapping):</strong> Sequelize,
                Prisma
              </li>
              <li>
                <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase
              </li>
              <li>
                <strong>Version Control & Collaboration:</strong> Git, GitHub,
                GitLab
              </li>
              <li>
                <strong>HubSpot:</strong> Experience in HubSpot migrations of
                all objects and custom properties
              </li>
            </li>
          </ul>
        </div>

        <div className="single-experience">
          <p>
            <b>Vartit Technology, Ahmedabad, Gujarat</b>
          </p>
          <p className="role">Jr. Java Developer (02/22 - 04/22)</p>
          <ul>
            <li>
              <i className="fa-solid fa-circle"></i> <b>Tispy</b> : World's
              foremost phone monitoring application designed to help you ensure
              your child's and your smartphone's safety. <b> Top 100</b> in
              Parental Monitoring Software in Brazil.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i> Work with JSP, Servlet, and
              other server-side technology and fixed bugs as a daily duty.
            </li>
            <li>
              <i className="fa fa-arrow-right"></i> Converting to MVC: I
              Converted the Some the other project Which is not following MVC
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
              Algorithms & Web Development intern
            </li>
            <li>
              <i className="fa fa-arrow-right"></i> During my internship, I had
              required to learn and use a wide range of software and programs.
              Learned how to use these programs to a high level which will help
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
              <i className="fa fa-arrow-right"></i> I have made the Banking
              System Website. Which uses Razor Pay API to transfer the money
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
              <i className="fa fa-arrow-right"></i> Animated martial🥋 game
              🕹using Javascript.
            </li>

            <li>
              <i className="fa fa-arrow-right"></i> Tech Stack: JavaScript,
              HTML,CSS
            </li>
          </ul>
        </div>
        {/* dynamic experience */}
        {/* 
        <div className="experience-center">
          {expValue.map((item) => (
            <div className="single-experience" key={item._id}>
              <p>{item.expValue}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
