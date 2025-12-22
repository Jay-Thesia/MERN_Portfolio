import React from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";
import Profile from "../../images/profile2.jpg";
import { loadFull } from "tsparticles";

const Header = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <React.Fragment>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="Home">
        {/* Particles Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="w-full h-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fullScreen: false,
              detectRetina: true,
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 60,
                  },
                  grab: {
                    distance: 400,
                  },
                },
              },
              particles: {
                color: {
                  value: "#0ea5e9",
                },
                links: {
                  color: {
                    value: "#0ea5e9",
                  },
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: {
                    default: "bounce",
                  },
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
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
                    min: 1,
                    max: 5,
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
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
              I am a
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <h1 className="text-primary-600 dark:text-primary-400">
                <Typewriter
                  options={{
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
          </div>

          {/* CV Card */}
          <div className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
              <b>CV: </b>
            </span>
            <a
              href="https://drive.google.com/file/d/1gyDTmn6vmfnRur3HHw-JPpGr7sRHC_P_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="section-container bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Personal Details */}
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Full Name:
                </label>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Jay Thesia
                </h4>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Occupation:
                </label>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Turn Chai☕ Into Code
                </h4>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Email:
                </label>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                  jayengineer.jp2410@gmail.com
                </h4>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-30 -z-10 scale-110"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={Profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: '50% 20%',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
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
