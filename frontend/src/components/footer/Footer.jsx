import React from "react";
import "./Footer.css";
import Contacts from "../contacts/Contacts";
import FAQ from "./pages/FAQ";
import Blog from "../../pages/Blog";
import About from "../about/About";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">

    <div className="box-container">
      <div className="box">
        <h3>Quick Links</h3>
        <Link to="/our-team">
          <i className="fas fa-angle-right "> </i>About Us
        </Link>
        <br></br>
        <Link to="/faq">
          <i className="fas fa-angle-right "> </i>FAQs
        </Link>
        <br></br>
        <Link to="/">
          <i className="fas fa-angle-right "> </i>Resorces
        </Link>
        <br></br>
        <Link to="/contacts">
          <i className="fas fa-angle-right "> </i>Contacts
        </Link>
        <br></br>
        <Link to="blog">
          <i className="fas fa-angle-right "> </i>Blog
        </Link>
        <br></br>
      </div>
 
      <div className="box">
        <h3>Contact Info</h3>
        <Link to="#">
          <i className="fas fa-angle-right "> </i> +251-234-234-234{" "}
        </Link>
        <Link to="#">
          <i className="fas fa-angle-right "> </i>{" "}
        </Link>
        <Link to="#">
          <i className="fas fa-angle-right "> </i> info@gmail.com{" "}
        </Link>
        <Link to="#">
          <i className="fas fa-angle-right "> </i> Addis Ababa, Ethiopia
        </Link>
      </div>
      <div className="box">
        <h3>Follow Us</h3>
        <Link to="#">
          <i className="fab fa-facebook "> </i> Facebook{" "}
        </Link>
        <Link to="#">
          <i className="fab fa-instagram "> </i> Twitter{" "}
        </Link>
        <Link to="#">
          <i className="fab fa-twitter "> </i> Instagram{" "}
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin "> </i> Linkedin{" "}
        </Link>
      </div>
      <div className="credit">
        © 2023 <span>MindCare. Privacy Policy</span>
      </div>
    </div>
    </div>
  );
}

export default Footer;