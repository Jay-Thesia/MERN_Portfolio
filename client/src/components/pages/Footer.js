import React from "react";
import { Link } from "react-router-dom";
import { scrollbar } from "react-scroll";
import "./Footer.css";

const Footer = () => {
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
            <li>
              <Link to="/">
                <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-address-card"></i> About
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-university"></i> Education
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-suitcase"></i> Experience
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fa-solid fa-diagram-project"></i> Project
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-address-book"></i> Contact
              </Link>
            </li>
            <li className="admin">
              <Link to="/login">
                <i class="fa-solid fa-screwdriver-wrench"></i> Admin
              </Link>
            </li>
          </div>

          {/* Media */}
          <div className="media-center">
            <h3>Media</h3>
            <div className="media-link">
              <li>
                <a href="https://github.com/Jay-Thesia" target="_blank">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/jay-patel-76830b1ab/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i> Linkedin
                </a>
              </li>

              <li>
                <a href="https://leetcode.com/kaleen123/" target="_blank">
                  <i class="fas fa-code"></i> Leetcode
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCvuJ6UsnBrpLNvbaVITyJFA"
                  target="_blank"
                >
                  <i class="fab fa-youtube-square"></i> Youtube
                </a>
              </li>

              <li>
                <a href="https://instagram.com/jay_patel_2410" target="_blank">
                  <i class="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>

              <li>
                <a href="https://twitter.com/thisisjbt" target="_blank">
                  <i class="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>

              <li>
                <a href="https://linktr.ee/thisisJay" target="_blank">
                  <i class="fas fa-tree"></i> Linktree
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
