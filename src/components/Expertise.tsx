import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
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
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mechanical & Structural Design</h3>
                    <p>I have extensive experience in high-precision engineering and the production lifecycle of aerospace and maritime components. I specialize in ensuring design compliance through rigorous industry standards to solve complex structural challenges.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Multiphysics Analysis & Simulation</h3>
                    <p>Once a design is conceptualized, I perform comprehensive computational analyses to ensure resilience under high-stress conditions. I develop mathematical models to optimize performance and achieve high-efficiency industrial solutions.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Renewable Energy & Sustainability</h3>
                    <p>I contribute to advancing research in sustainable technologies by designing scalable energy storage and generation systems. My work focuses on leveraging green energy sources to address techno-economic challenges.</p>
                    
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