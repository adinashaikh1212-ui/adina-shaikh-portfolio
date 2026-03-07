import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import velJ03 from '../assets/images/velJ03.png';
import Picture1CPD from '../assets/images/Picture1CPD.png';
import Picture2CPD from '../assets/images/Picture2CPD.png';
import Picture3CPD from '../assets/images/Picture3CPD.png';
import Picture1cylinder from '../assets/images/Picture1cylinder.png';
import Picture2cylinder from '../assets/images/Picture2cylinder.png';
import Picture3cylinder from '../assets/images/Picture3cylinder.png';
import Picture4cylinder from '../assets/images/Picture4cylinder.png';
import Picture1SD from '../assets/images/Picture1SD.png';
import Picture2SD from '../assets/images/Picture2SD.png';
import Picture3SD from '../assets/images/Picture3SD.png';
import Picture4SD from '../assets/images/Picture4SD.png';
import Picture1hydro from '../assets/images/Picture1hydro.png';
import Picture2hydro from '../assets/images/Picture2hydro.png';
import Picture3hydro from '../assets/images/Picture3hydro.png';
import Picture4hydro from '../assets/images/Picture4hydro.png';
import Picture1FYP from '../assets/images/Picture1FYP.png';
import Picture2FYP from '../assets/images/Picture2FYP.png';
import Picture3FYP from '../assets/images/Picture3FYP.png';
import Picture4FYP from '../assets/images/Picture4FYP.png';
import Picture1SOFC from '../assets/images/Picture1SOFC.png';
import Picture2SOFC from '../assets/images/Picture2SOFC.png';
import Picture3SOFC from '../assets/images/Picture3SOFC.png';
import Picture4SOFC from '../assets/images/Picture4SOFC.png';
import Picture1 from '../assets/images/Picture1.png';
import Picture2 from '../assets/images/Picture2.png';
import Picture3 from '../assets/images/Picture3.png';
import Picture4 from '../assets/images/Picture4.png';
import Picture1CH from '../assets/images/Picture1CH.png';
import Picture2CH from '../assets/images/Picture2CH.png';
import Picture3CH from '../assets/images/Picture3CH.png';
import Picture4CH from '../assets/images/Picture4CH.png';


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

        <h2>FEM Analysis With Three Cargo Holds, To Assess Global And Local Hull Strength</h2>

        <p className="project-intro">
          This project performs finite element analysis of a bulk carrier with three cargo holds to assess both global and local hull strength. It includes scantling development in Mars2000, CAD in AUTOCAD, FE modeling in FEMAP, meshing, and application of cargo, hydrostatic, stillwater, and wave induced loads. The structure was then evaluated under sagging and hogging cases by studying stress distribution, deformation, and critical hot spot regions.
        </p>

        <img src={Picture1CH} className="hero-image" />
        {expandedProject === 0 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on the local and global strength assessment of a bulk carrier with three cargo holds. It covers preliminary scantling development, finite element modeling, and structural evaluation under stillwater and extreme design wave loading conditions.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The ship section was first developed in Mars2000 using rule based scantling calculations for functional elements, primary supporting members, and stiffeners. A 3D FEM model was then built in FEMAP, meshed with plate elements, and analyzed by applying cargo, gravity, hydrostatic, stillwater, and wave loads for four cases: stillwater sagging, stillwater hogging, EDW sagging, and EDW hogging.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The analysis showed that the maximum stresses occurred in the EDW hogging case, while vertical deflections in all loading cases remained within the allowable limit of Lpp/200. The study also identified stress hot spots near the corners of deck openings, suggesting that added stiffening, hatch coamings, and smoother corner geometry are needed in the detailed design stage.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2CH} />
              <img src={Picture3CH} />
              <img src={Picture4CH} />
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

      {/* ===== PROJECT 2 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>CFD Based Open Water Analysis of DTC Model Scale Propeller</h2>

        <p className="project-intro">
          This project carried out a CFD based open water analysis of a DTC model scale propeller using ANSYS Fluent. It involved importing the benchmark propeller geometry, defining the computational domain and boundary conditions, generating and refining the mesh, and simulating propeller performance at different advance ratios. The study then evaluated thrust, torque, efficiency, and velocity/pressure contours, and compared the CFD results with reference or experimental data to validate the methodology.
        </p>

        <img src={velJ03} className="hero-image" />

        {expandedProject === 1 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on the CFD based open water analysis of a DTC model scale propeller to predict its hydrodynamic performance. It mainly covers propeller geometry, computational domain, boundary conditions, meshing, and performance evaluation in terms of thrust, torque, and efficiency.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The propeller was modeled and analyzed in a CFD environment using a steady state solver with the Multi Reference Frame (MRF) approach. An unstructured mesh with blade refinement was generated, the k-ε turbulence model was applied, and simulations were performed for different advance ratios to obtain open water characteristics.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The project produced open water curves showing thrust coefficient, torque coefficient, and propeller efficiency across different advance ratios. It also generated velocity and pressure contour plots around the propeller, and the study concluded that the CFD results were successfully validated and that the methodology is suitable and reusable for propeller analysis.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture1CPD} />
              <img src={Picture2CPD} />
              <img src={Picture3CPD} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(1)}
        >
          {expandedProject === 1 ? "Show Less" : "Read More"}
        </button>

      </section>

      {/* ===== PROJECT 3 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>CFD of Flow around cylinder</h2>

        <p className="project-intro">
          This project investigates the 2D CFD simulation of airflow around a circular cylinder at Reynolds numbers 5, 50, and 200 using ANSYS Fluent. It includes building the computational domain, applying boundary conditions, performing mesh convergence, and running both steady and transient simulations. The study analyzes velocity and pressure fields, drag and lift coefficients, and vortex shedding behavior. Finally, the CFD results are compared with literature to assess the accuracy of the simulation.
        </p>

        <img src={Picture1cylinder} className="hero-image" />

        {expandedProject === 2 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on the 2D CFD analysis of airflow around a circular cylinder at Reynolds numbers 5, 50, and 200. It covers flow behavior such as attachment, separation, wake formation, and vortex shedding, along with the evaluation of lift and drag characteristics.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The cylinder flow was modeled in ANSYS Fluent using a two dimensional computational domain with appropriate inlet, outlet, symmetry, and no slip wall boundary conditions. A structured mesh was generated, a mesh convergence study was performed, and then steady simulations were run for Re = 5 and 50 while a transient simulation was carried out for Re = 200.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The study showed symmetric attached flow at Re = 5, separated flow with recirculation at Re = 50, and vortex shedding at Re = 200. The computed drag and lift values were found to be in good agreement with literature, while the Strouhal number for the unsteady case was also close to the experimental value, confirming that the CFD model captured the main flow physics effectively.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2cylinder} />
              <img src={Picture3cylinder} />
              <img src={Picture4cylinder} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(2)}
        >
          {expandedProject === 2 ? "Show Less" : "Read More"}
        </button>

      </section>
      {/* ===== PROJECT 4 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Prediction of Seakeeping Performance of a Barge</h2>

        <p className="project-intro">
This project predicts the seakeeping performance of a barge in both regular and irregular waves using a potential flow based numerical approach. It includes preparing the barge geometry, generating the mesh, calculating RAOs in HydroStar, and using Python for wave spectrum and response spectrum analysis. The study evaluates heave, pitch, and roll motions under sea state 4 conditions and compares the effect of different damping values on vessel response.
        </p>

        <img src={Picture1SD} className="hero-image" />

        {expandedProject === 3 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on predicting the seakeeping performance of a barge in regular and irregular waves. It covers the calculation of RAOs, response spectra, and the estimation of heave, pitch, and roll motions under sea state 4 conditions at zero forward speed.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The barge geometry was cleaned, trimmed at design draft, and meshed in FEMAP before being analyzed in HydroStar using a potential flow based approach. RAOs were obtained for different wave frequencies and heading angles, and then Python was used with the ITTC wave spectrum and spectral moments to estimate vessel response in irregular waves. Two damping cases, 5% and 8%, were also studied for comparison.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The results showed that heave is dominant at low frequencies and decreases as wave frequency increases, while pitch and roll exhibit strong resonance peaks near their natural frequencies. Roll response was highest in beam and near-beam seas, and increasing damping from 5% to 8% reduced the peak response amplitudes and spectral energy without significantly changing the dominant frequencies.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2SD} />
              <img src={Picture3SD} />
              <img src={Picture4SD} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(3)}
        >
          {expandedProject === 3 ? "Show Less" : "Read More"}
        </button>

      </section>
      {/* ===== PROJECT 5 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Development of Lines plan, Offset Tables, Hydrostatic Curves, Bonjean Curves and Sectional Area Curves for DTC Ship</h2>

        <p className="project-intro">
This project develops the lines plan, offset table, hydrostatic curves, Bonjean curves, and sectional area curves for the DTC ship hull. It involves defining the ship geometry and principal planes in Rhino, generating transverse, longitudinal, and horizontal sections, and extracting hull intersections and projections. The numerical hydrostatic properties and form coefficients are then calculated from the hull model and offset data. Finally, the results are presented graphically to describe the vessel’s shape, displacement behavior, and sectional characteristics.
        </p>

        <img src={Picture1hydro} className="hero-image" />

        {expandedProject === 4 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project covers the geometric and hydrostatic development of the DTC ship hull in Rhino, including preparation of the lines plan, offset table, hydrostatic curves, Bonjean curves, and sectional area related data. Its purpose is to describe the hull form both graphically and numerically for later hydrostatic and design analysis.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The hull was modeled in Rhino by first creating the principal reference planes, then generating longitudinal, transverse, and horizontal section planes. These planes were intersected with the hull surface to obtain hull lines, which were projected into a 2D lines plan, converted into an offset table, and then used to compute form coefficients, hydrostatic data, hydrostatic curves, and Bonjean diagrams. Parts of the workflow were also automated using Python scripts in Rhino.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The project successfully produced the full lines plan and offset table for the DTC hull, along with tabulated hydrostatic quantities and graphical hydrostatic curves. It also developed Bonjean diagrams showing how sectional area and first moment vary with draft, giving a clear representation of how underwater volume builds up along the ship as immersion increases.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2hydro} />
              <img src={Picture3hydro} />
              <img src={Picture4hydro} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(4)}
        >
          {expandedProject === 4 ? "Show Less" : "Read More"}
        </button>

      </section>
      {/* ===== PROJECT 6 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Multiphysics analysis and design optimization of composite nose radome part of supersonic combat aircraft covering thermal, electromagnetic, aerodynamic and mechanical disciplines.</h2>

        <p className="project-intro">
          In collaboration with TURKISH AEROSPACE INDUSTRIES, This project develops and optimizes a composite nose radome for a supersonic combat aircraft using a multiphysics approach. It studies aerodynamic drag, electromagnetic transparency, thermal resistance, structural strength, bird strike behavior, and lightning protection using CFD, EM, thermal, and FEA simulations. Different nose profiles, materials, and FSS based configurations were evaluated to achieve a design that is low drag, radar transparent, and mechanically reliable under extreme flight conditions.
        </p>

        <img src={Picture1FYP} className="hero-image" />

        {expandedProject === 5 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on the multiphysics design and optimization of a supersonic aircraft nose radome. It covers aerodynamic drag reduction, electromagnetic transparency for AESA radar, thermal resistance, and structural reliability under extreme flight conditions.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The radome was evaluated using a combination of CFD, electromagnetic, thermal, and structural simulations. Different nose profiles, materials, and FSS based configurations were analyzed in software such as ANSYS Fluent, CST, ANSYS Workbench, and ABAQUS to identify the most suitable design.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The study identified an optimized radome shape that achieved low drag while maintaining strength and radar performance. The final design showed good electromagnetic transmission, acceptable thermal behavior under high temperature loading, and safe structural performance under aerodynamic and mechanical stresses.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture3FYP} />
              <img src={Picture2FYP} />
              <img src={Picture4FYP} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(5)}
        >
          {expandedProject === 5 ? "Show Less" : "Read More"}
        </button>

      </section>
      {/* ===== PROJECT 7 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Modeling and Simulation of Solid Oxide Fuel Cell Inte-grated with Anaerobic Digester, Thermal Storage Unit and Solar Collector: A Net Zero Emission System</h2>

        <p className="project-intro">
          This project develops a MATLAB/Simulink based model of an integrated clean energy system combining anaerobic digestion, steam methane reforming, a solid oxide fuel cell, and solar thermal support. It studies how dairy farm waste can be converted into biogas, reformed into hydrogen, and then used in an SOFC to generate electricity with reduced emissions. The work also analyzes system behavior, methane production, SOFC performance, and control response to assess the feasibility of a net zero emission energy solution.
        </p>

        <img src={Picture1SOFC} className="hero-image" />

        {expandedProject === 6 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on developing and analyzing an integrated clean energy system that combines anaerobic digestion, steam methane reforming, solar thermal support, and a solid oxide fuel cell. Its main aim is to study how dairy farm waste can be converted into useful energy with reduced emissions.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The system was modeled in MATLAB/Simulink by linking the biogas production, reforming, hydrogen generation, and SOFC power generation stages. Different operating conditions and control responses were analyzed to evaluate overall system behavior and performance.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The project showed that the integrated system can effectively convert waste into electricity while supporting lower emissions and improved energy utilization. The results demonstrated the feasibility of using this combined approach as a potential net zero clean energy solution.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2SOFC} />
              <img src={Picture3SOFC} />
              <img src={Picture4SOFC} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(6)}
        >
          {expandedProject === 6 ? "Show Less" : "Read More"}
        </button>

      </section>
      {/* ===== PROJECT 8 ===== */}
      <section className="project-section" data-aos="fade-up">

        <h2>Design and Development of a Single-Actuator Underactuated Prosthetic Hand</h2>

        <p className="project-intro">
          This project designs and develops a five fingered prosthetic hand that uses only one actuator to produce multiple useful grasp patterns. It focuses on creating an underactuated mechanism that is simpler, more compact, and capable of higher grip force for daily activities. The work includes conceptual design, CAD modeling, mechanism selection, and dynamic analysis of the finger and thumb motions. Overall, the project aims to improve functionality and usability compared to conventional single actuator prosthetic hands.
        </p>

        <img src={Picture1} className="hero-image" />
        {expandedProject === 7 && (
          <div className="project-details">

            <div className="detail-block">
              <h3>Scope</h3>
              <p>
                This project focuses on designing a five fingered underactuated prosthetic hand that can achieve useful daily life grasp patterns with only one actuator. The main aim is to improve grasp force, simplicity, safety, reliability, and cosmetic appearance while avoiding the bulk and complexity of multi actuator designs.
              </p>
            </div>

            <div className="detail-block">
              <h3>Methodology</h3>
              <p>
                The work started with conceptual design and CAD modeling of the prosthetic hand, followed by selection of mechanisms for finger and thumb motion. A crank slider mechanism was used for the fingers and a six bar dwell mechanism for the thumb, while MATLAB was used to calculate and visualize design parameters, displacement, velocity, and acceleration under design constraints.
              </p>
            </div>

            <div className="detail-block">
              <h3>Results</h3>
              <p>
                The final design was able to perform three hand configurations, open hand, precision grip, and power grip, using a single actuator with satisfactory grip force and grip patterns. The study also found that the mechanism has potential for further rigidity improvement, although the current prototype is still heavier and larger than the desired specifications due to component and manufacturing limitations.
              </p>
            </div>

            <div className="image-gallery">
              <img src={Picture2} />
              <img src={Picture3} />
              <img src={Picture4} />
            </div>

          </div>
        )}

        <button 
          className="read-more-btn"
          onClick={() => toggleProject(7)}
        >
          {expandedProject === 7 ? "Show Less" : "Read More"}
        </button>

      </section>


    </div>
  );
}

export default Project;
