import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { DataContext } from "../context/GlobalContext";

const Footer = () => {
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;

  const logOutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      smooth: true,
      duration: 800,
      delay: 50,
      offset: -80,
    });
  };

  const footerLinks = [
    { name: "Home", icon: "fas fa-home", element: "Home" },
    { name: "About", icon: "fas fa-address-card", element: "About" },
    { name: "Education", icon: "fas fa-university", element: "Education" },
    { name: "Experience", icon: "fas fa-suitcase", element: "Experience" },
    { name: "Project", icon: "fas fa-diagram-project", element: "Project" },
    { name: "Contact", icon: "fas fa-address-book", element: "Contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/Jay-Thesia" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/jay-patel-76830b1ab/" },
    { name: "Leetcode", icon: "fas fa-code", url: "https://leetcode.com/kaleen123/" },
    { name: "Youtube", icon: "fab fa-youtube-square", url: "https://www.youtube.com/channel/UCvuJ6UsnBrpLNvbaVITyJFA" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com/jay_patel_2410" },
    { name: "Twitter", icon: "fa-brands fa-twitter", url: "https://twitter.com/thisisjbt" },
    { name: "Linktree", icon: "fas fa-tree", url: "https://linktr.ee/thisisJay" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToElement(link.element)}
                    className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
              {isLogin && (
                <li>
                  <Link
                    to="/admin"
                    className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <i className="fas fa-screwdriver-wrench"></i>
                    <span>Admin</span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to={isLogin ? "/" : "/login"}
                  onClick={isLogin ? logOutSubmit : undefined}
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <i className={isLogin ? "fas fa-right-from-bracket" : "fas fa-right-to-bracket"}></i>
                  <span>{isLogin ? "Logout" : "Login"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <i className="fas fa-envelope"></i>
                <span className="break-all">jayengineer.jp2410@gmail.com</span>
              </p>
              <p className="text-sm mt-4">
                Always open to new opportunities and collaborations!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Designed and Made by{" "}
            <span className="text-primary-400 font-semibold">Jay Patel</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
