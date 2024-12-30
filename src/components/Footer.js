import React from "react";
import "../App.css"; // Include your CSS styles
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="mailto:arbazibnishaq@gmail.com" className="footer-link">
          <FaEnvelope /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/arbaz-khan-4a5a621a1/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/arbazibn/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
          Instagram
        </a>
      </div>
      <div className="copyright">
        &copy; 2024 My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
