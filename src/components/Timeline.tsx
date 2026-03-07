import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
         faBriefcase,
         faGraduationCap,
         faCar
} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Timeline() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div id="history" data-aos="fade-up">
      <div className="items-container">
        <h1>Education & Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="September 2025 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
                Erasmus Mundus EMship+ Master's Programme
            </h3>
            <h4 className="vertical-timeline-element-subtitle">European Union</h4>
            <p>
              International Master's in Advanced Design of Sustainable Ships and Offshore Structures 
              funded by the European Commission. Selected among top global candidates 
              under the Erasmus Mundus Joint Master's Degree scholarship.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="June 2025- August 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">International Internship Pilot Programme (IIPP), NSTC</h3>
            <h4 className="vertical-timeline-element-subtitle">National Pingtung University, Taiwan</h4>
            <p>
              Designed and modeled a three-cell stack Vanadium Flow Redox Battery with exploded and assembled CAD models.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="Sep 2021 – June 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">National University of Sciences And Technology</h4>
            <p>
                Graduated with highest academic distinction.Awarded Rector’s Gold Medal and Chancellor's Silver Medal for outstanding academic performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="Sep 2022 - Feb 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCar} />}
          >
            <h3 className="vertical-timeline-element-title">Team Envision(Student Engineering Team)</h3>
            <h4 className="vertical-timeline-element-subtitle">Steering Department Lead</h4>
            <p>
              Designed and validated steering system components, overseeing their manufacturing and mentoring junior members throughout the process, contributing to the development of a  fuel-efficient electric vehicle for Shell Eco-marathon 2025.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="July 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Structural Design Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Turkish Aerospace Industries Inc</h4>
            <p>
              Leveraged expertise in GD&T and aerospace design methodologies to support the production of major aircraft programs, including HÜRKUŞ 2, HÜRJET and Airbus projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="June 2024 - July 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Plant Maintenance Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Fauji Fertilizer Company Limited</h4>
            <p>
              Managed mechanical maintenance for critical fertilizer production assets, optimizing the performance of centrifugal pumps.
              Improved Pump P-102 efficiency by 15% through advanced fault detection and collaborated on maintenance strategies to ensure safety and operational continuity.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="August 2023 - September 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Karachi Shipyard & Engineering Works Limited</h4>
            <p>
              Managed machining operations and block fabrication for shipbuilding, overseeing pre-block construction and metal shaping via hot forming.
              Implemented preventive maintenance and documentation protocols to ensure machinery safety, design compliance, and production standards.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;