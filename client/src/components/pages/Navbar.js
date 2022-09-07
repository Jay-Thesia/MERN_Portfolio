import React, { useState } from "react";
import "./Navbar.css";

//link is like anchore tag
import {Link} from 'react-router-dom'
import {  scroller } from "react-scroll";

import Logo from "../../images/Logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToElement=(element)=>{
    scroller.scrollTo(element,{
      duration:800,
      delay:50,
      smooth:true,
      offset:-80
    })
  }

  const actToggle = () => {
    setToggle(!toggle);
  };

  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };
  return (
    <div>
      <div className="nav-container">
        <nav>
          <div className="logoBtn">
            <Link to="/">
              <img src={Logo} alt="Logo" className="imageLogo" />
            </Link>

            <div className="btn" onClick={actToggle}>
              <div className={toggle ? "bar1 animatedBar" : "bar1"}></div>
              <div className={toggle ? "bar2 animatedBar" : "bar2"}></div>
              <div className={toggle ? "bar3 animatedBar" : "bar3"}></div>
            </div>
          </div>

          <div className="links-container">
            <ul
              className={toggle ? "new-links links" : "links"}
              onClick={closeNavbar}
            >
              <li onClick={()=>scrollToElement('Home')}>
                <Link to="/" >
                  Home
                </Link>
              </li>
              <li onClick={()=>scrollToElement('About')}>
                <Link to="/" >
                  About
                </Link>
              </li>{" "}
              <li onClick={()=>scrollToElement('Education')}>
                <Link to="/" >
                  Education
                </Link>
              </li>{" "}
              <li onClick={()=>scrollToElement('Experience')}>
                <Link to="/">
                  Experience
                </Link>
              </li>{" "}
              <li onClick={()=>scrollToElement('Project')}>
                <Link to="/" >
                  Project
                </Link>
              </li>
              <li onClick={()=>scrollToElement('Contact')}>
                <Link to="/" >
                  Contact
                </Link>
              </li>
              <li>
              <Link to="/login">Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
