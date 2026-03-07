import React, { useEffect, useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import AOS from "aos";
import "aos/dist/aos.css";
function Main() {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
return (
    <div className="container">
      <div className="about-section"
           style={{
             opacity: 1 - scrollY / 600,
             transform: `scale(${1 - scrollY / 3000})`,
           }}      
      >
        
        <div className="content">
          <div className="socialm_icons">
            <a href="mailto:adeena.shykh1@gmail.com"><MailOutlineIcon /></a>
            <a href="https://www.linkedin.com/in/adeena-shykh2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 className="gradient-text">Adina Shaikh</h1>
          <h2 className="hero-title">
            Mechanical Design Engineer
          </h2>
          <p className="hero-description">
            Specializing in offshore structures, marine systems, aerospace structural design and renewable energy technologies. 
            Specialist in CAD/CAM modeling, FEA, and multiphysics simulations. 
            Passionate about solving complex engineering challenges through simulation-driven design and research.
          </p>
        <div className="click-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a 
              href={process.env.PUBLIC_URL + "/Adina_Shaikh_CV.pdf"} 
              target="_blank" 
              rel="noreferrer"
              className="cv-btn"
            >
              Download CV
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="mailto:adeena.shykh1@gmail.com"><MailOutlineIcon /></a>
            <a href="https://www.linkedin.com/in/adeena-shykh2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;