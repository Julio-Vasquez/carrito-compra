import React from "react";
import { GoMarkGithub } from "react-icons/go";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright ©{new Date().getFullYear()} All Rights Reserved : Julio
        Vásquez
      </p>
      <a
        href="https://github.com/DarKPhuRioN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoMarkGithub />
      </a>
    </footer>
  );
};

export default Footer;
