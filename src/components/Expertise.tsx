import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
faShip,
  faPlane,
  faAtom,
  faLeaf,
  faWrench,
  faCogs,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';
import solidworks from "../assets/tools/solidworks.png";
import autocad from "../assets/tools/autocad.png";
import ansys from "../assets/tools/ansys.png";
import abaqus from "../assets/tools/abaqus.png";
import adams from "../assets/tools/adams.png";
import femap from "../assets/tools/femap.png";
import rhino from "../assets/tools/rhino.png";
import hydrostar from "../assets/tools/hydrostar.png";
import mars from "../assets/tools/mars.png";
import matlab from "../assets/tools/matlab.png";
import python from "../assets/tools/python.png";
import msoffice from "../assets/tools/msoffice.png";
import canva from "../assets/tools/canva.png";

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShip} size="2x" />
                    <h3>Maritime & Offshore Engineering</h3>
                    <p>Currently advancing knowledge in the Advanced Design of Ships and Offshore Structures through the EMship+ Erasmus Mundus program across a consortium of seven European universities to solve complex naval architectural challenges.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPlane} size="2x" />
                    <h3>Aerospace Structural Design</h3>
                    <p>Led the structural design and manufacturing of supersonic combat aircraft radome. I specialize in aerospace design methodologies to ensure compliance with international aerospace standards like those of Airbus and Turkish Aerospace Industries.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAtom} size="2x" />
                    <h3>Multiphysics Analysis & Simulation</h3>
                    <p>Expert in conducting computational simulations to validate designs under different conditions. I utilize advanced tools for Finite Element Analysis (FEA), aerodynamic, and electromagnetic assessments to optimize mechanical performance.</p>
                    
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faLeaf} size="2x" />
                    <h3>Renewable Energy & Sustainable Systems</h3>
                    <p>Dedicated to advancing green technology through the mathematical modeling and design of Vanadium Flow Redox Batteries and Solid Oxide Fuel Cells. My research estimates the Tidal Energy Potential, focusing on the techno-economic viability of sustainable power in the Indus Delta.</p>
                    
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faWrench} size="2x" />
                    <h3>Industrial Operations & Maintenance</h3>
                    <p>Experienced in the technical maintenance of large-scale industrial plants, including centrifugal pumps, compressors, and heat exchangers. I have a demonstrated ability to enhance equipment performance through fault detection and maintenance strategies.</p>
                    
                </div>

            </div>
                <div className="tools-section">
                    <h2>Engineering Tools & Software</h2>
                    <div className="tools-grid">
                        <div className="tool-item">
                           <img src={solidworks} alt="SolidWorks" />
                           <p>SolidWorks</p>
                        </div>
                        <div className="tool-item">
                           <img src={autocad} alt="AutoCAD" />
                           <p>AutoCAD</p>
                        </div>
                        <div className="tool-item">
                           <img src={ansys} alt="ANSYS" />
                           <p>ANSYS</p>
                        </div>
                        <div className="tool-item">
                           <img src={abaqus} alt="ABAQUS" />
                           <p>ABAQUS</p>
                        </div>
                        <div className="tool-item">
                           <img src={adams} alt="ADAMS" />
                           <p>MSC ADAMS</p>
                        </div>
                        <div className="tool-item">
                           <img src={femap} alt="FEMAP" />
                           <p>FEMAP</p>
                        </div>
                        <div className="tool-item">
                           <img src={rhino} alt="Rhino" />
                           <p>Rhino</p>
                        </div>
                        <div className="tool-item">
                           <img src={hydrostar} alt="HydroSTAR" />
                           <p>HydroSTAR</p>
                        </div>
                        <div className="tool-item">
                           <img src={mars} alt="MARS" />
                           <p>MARS</p>
                        </div>
                        <div className="tool-item">
                           <img src={matlab} alt="MATLAB" />
                           <p>MATLAB</p>
                        </div>
                        <div className="tool-item">
                           <img src={python} alt="Python" />
                           <p>Python</p>
                        </div>
                        <div className="tool-item">
                           <img src={msoffice} alt="MS Office" />
                           <p>MS Office</p>
                        </div>
                        <div className="tool-item">
                           <img src={canva} alt="Canva" />
                           <p>Canva</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Expertise;