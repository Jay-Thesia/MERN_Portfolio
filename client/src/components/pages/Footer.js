import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { scrollbar, scroller } from "react-scroll";
import "./Footer.css";
import { DataContext } from "../context/GlobalContext";

const Footer = () => {
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;

  const logOutSubmit=()=>{
    localStorage.clear();
    setIsLogin(false);
  }
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      smooth: true,
      duration: 800,
      delay: 50,
      offset: -80,
    });
  };
  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title footer-title"></h2>
      </div>
      <div className="footer-center">
        <div className="link-center">
          {/* links */}

          <div className="link">
            <h3>Links</h3>

            <li onClick={() => scrollToElement("Home")}>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li onClick={() => scrollToElement("About")}>
              <Link to="/">
                <i className="fas fa-address-card"></i> About
              </Link>
            </li>
            <li onClick={() => scrollToElement("Education")}>
              <Link to="/">
                <i className="fas fa-university"></i> Education
              </Link>
            </li>
            <li onClick={() => scrollToElement("Experience")}>
              <Link to="/">
                <i className="fas fa-suitcase"></i> Experience
              </Link>
            </li>
            <li onClick={() => scrollToElement("Project")}>
              <Link to="/">
                <i className="fas fa-diagram-project"></i> Project
              </Link>
            </li>
            <li onClick={() => scrollToElement("Contact")}>
              <Link to="/">
                <i className="fas fa-address-book"></i> Contact
              </Link>
            </li>

            <li className={isLogin ? "" : "adminLi"}>
              <Link to={isLogin ? "/admin" : "/"}>
                {isLogin ? (
                  <div className="admin">
                    <i className="fas fa-screwdriver-wrench"></i> Admin
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>

            <li onClick={logOutSubmit}>
              <Link to="/login">
                {isLogin?<div className=""><i className="fas fa-right-from-bracket"></i> Logout</div>: <div className=""><i className="fas fa-right-to-bracket"></i> Login</div> }
              </Link>
            </li>
          </div>

          {/* Media */}
          <div className="media-center">
            <h3>Media</h3>
            <div className="media-link">
              <li>
                <a href="https://github.com/Jay-Thesia" target="_blank">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/jay-patel-76830b1ab/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i> Linkedin
                </a>
              </li>

              <li>
                <a href="https://leetcode.com/kaleen123/" target="_blank">
                  <i className="fas fa-code"></i> Leetcode
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCvuJ6UsnBrpLNvbaVITyJFA"
                  target="_blank"
                >
                  <i className="fab fa-youtube-square"></i> Youtube
                </a>
              </li>

              <li>
                <a href="https://instagram.com/jay_patel_2410" target="_blank">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>

              <li>
                <a href="https://twitter.com/thisisjbt" target="_blank">
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>

              <li>
                <a href="https://linktr.ee/thisisJay" target="_blank">
                  <i className="fas fa-tree"></i> Linktree
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Designed and Made Jay Patel</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
