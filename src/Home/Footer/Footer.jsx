import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        <p className="footer-credit">
          Designed & Developed by <span> <a style={{textDecoration : "none" , color: "white"}} href="https://www.linkedin.com/in/kishor25/">Kishor M</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
