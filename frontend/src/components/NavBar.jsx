import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./NavBar.css";
import Button from "./Button.jsx";
import Dropdown from "./Dropdown.jsx";

// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faHeadSideBrain } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(fas);

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          MindCare
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/blog"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/abouts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/exercise" className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    </>

    // <div>
    //   <main>
    //     <nav className={style.}={style.navbar}>
    //       <div className=={style.logo}>
    //         <NavLink to="/">
    //           {/* <i class="fa-solid fa-head-side-brain" style={color:'#58c56f'}"></i> */}

    //           <span className={style.logo_title}> Mind Care</span>
    //         </NavLink>
    //       </div>

    //       <div className={style.nav_section}>

    //         <NavLink to="/" onClick={closeMobileMenu}>Home </NavLink>

    //         <NavLink to="/blog">Blog</NavLink>
    //         <NavLink to="/our-team">Our Team</NavLink>
    //         <NavLink to="/contacts">Contacts</NavLink>
    //         <NavLink to="/faq">FAQ's</NavLink>
    //         <NavLink to="/exercise">Exercises</NavLink>
    //         <NavLink to="/login">Login</NavLink>
    //       </div>
    //     </nav>
    //   </main>
    // </div>
  );
}

export default NavBar;
