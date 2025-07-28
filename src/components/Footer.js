import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p> ©{new Date().getFullYear()}M Kulasekar Reddy.All rights reserved. </p>{" "}
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/m-kulasekar-reddy-b41956253"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>{" "}
        <a
          href="https://github.com/kulasekar-18"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>{" "}
        <a href="mailto:kulasekarmitta@gmail.com">
          <FaEnvelope />
        </a>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
