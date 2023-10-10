import React from "react";
// import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import "./Header.css";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";

import Profile from "../../images/profile2.jpg";
import Resume from "../../images/Jay_Thesia_Resume_2022.pdf";

// import { loadFull } from "tsparticles";

const Header = () => {
  // const particlesInit = async (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <React.Fragment>
      <div>
        <div className="header" id="header">
          {/* particles part */}
          {/* <div className="particle">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#bfbdbd",
                  },
                },

                fullScreen: false,
                backgroundMask: {
                  cover: {
                    color: {
                      value: "#000",
                    },
                  },
                },

                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    // "onHover": {
                    //   "enable": true,
                    //   "mode": "grab",
                    //   "parallax": {
                    //     "enable": true,
                    //     "force": 60
                    //   }
                    // }
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                      divs: {
                        distance: 200,
                        duration: 0.4,
                        mix: false,
                        selectors: [],
                      },
                    },
                    grab: {
                      distance: 400,
                    },
                    repulse: {
                      divs: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        selectors: [],
                      },
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: {
                      value: "#ffffff",
                    },
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                  },
                  move: {
                    attract: {
                      rotate: {
                        x: 600,
                        y: 1200,
                      },
                    },
                    enable: true,
                    path: {},
                    outModes: {
                      bottom: "out",
                      left: "out",
                      right: "out",
                      top: "out",
                    },
                    spin: {},
                  },
                  number: {
                    density: {
                      enable: true,
                    },
                  },
                  opacity: {
                    random: {
                      enable: true,
                    },
                    value: {
                      min: 0.1,
                      max: 0.5,
                    },
                    animation: {
                      enable: true,
                      speed: 3,
                      minimumValue: 0.1,
                    },
                  },
                  size: {
                    random: {
                      enable: true,
                    },
                    value: {
                      min: 0.1,
                      max: 10,
                    },
                    animation: {
                      enable: true,
                      speed: 20,
                      minimumValue: 0.1,
                    },
                  },
                },
              }}
            />
          </div> */}

          {/* type writer wala work */}
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
        </div>
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
    </React.Fragment>
  );
};

export default Header;
