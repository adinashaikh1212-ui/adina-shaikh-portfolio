import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';

import '../assets/styles/Project.scss';

function Project() {

  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="case-study-container" id="projects">

      <h1 data-aos="fade-up">Engineering & Research Projects</h1>

      {/* ===== PROJECT 1 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Composite Radome for Supersonic Combat Aircraft</h2>

        <p className="project-intro">
          Multiphysics design and optimization of a composite radome integrated 
          with Frequency Selective Surface (FSS) for AESA radar systems.
        </p>

        <img src={mock01} className="hero-image" alt="Radome Overview" />

        <div className="project-summary">
          Designed a composite nose radome capable of withstanding supersonic
          aerodynamic heating beyond 350°C.
        </div>

        {expandedProject === 0 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>What?</h3>
              <p>
                Developed a composite radome structure maintaining electromagnetic 
                transparency while resisting thermal and structural stresses.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                Conducted coupled thermal-structural and electromagnetic simulations 
                using ANSYS. Integrated FSS for optimized radar transmission efficiency.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                Achieved optimized drag reduction, improved transmission efficiency,
                and validated structural resilience under extreme flight conditions.
              </p>
            </div>

            <div className="image-gallery">
              <img src={mock02} alt="Simulation 1"/>
              <img src={mock03} alt="Simulation 2"/>
              <img src={mock04} alt="Simulation 3"/>
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(0)}
        >
          {expandedProject === 0 ? "Show Less" : "Read More"}
        </button>

      </section>

      {/* ===== ADD OTHER PROJECTS BELOW SAME STRUCTURE ===== */}

    </div>
  );
}

export default Project;