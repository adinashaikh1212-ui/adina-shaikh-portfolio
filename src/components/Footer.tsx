import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-name">
          <h3>Adina Shaikh</h3>
          <p>Mechanical Design Engineer</p>
        </div>

        <div className="sociald_icons">
            <a href="mailto:adeena.shykh1@gmail.com"><MailOutlineIcon /></a>
            <a href="https://www.linkedin.com/in/adeena-shykh2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Adina Shaikh. All rights reserved.</p>
        </div>
{showButton && (
        <button className="scroll-top" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </button>
      )}
      </div>
    </footer>
  );
}

export default Footer;