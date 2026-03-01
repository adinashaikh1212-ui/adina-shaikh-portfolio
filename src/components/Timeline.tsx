import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
            date="2024 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
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
            date="2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Aerospace Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Turkish Aerospace Industries (TAI)</h4>
            <p>
              Worked on composite radome design for supersonic combat aircraft. 
              Conducted multiphysics simulations including thermal, structural, 
              and electromagnetic analyses aligned with aerospace standards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern – Energy Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">National Central University, Taiwan</h4>
            <p>
              Developed mathematical models for solid oxide fuel cells integrated 
              with renewable energy systems using MATLAB and Simulink.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="2020 – 2024"
            iconStyle={{ background: '#FFD700', color: '#000' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. Mechanical Engineering – President's Gold Medalist</h3>
            <h4 className="vertical-timeline-element-subtitle">NED University of Engineering & Technology</h4>
            <p>
              Graduated with highest academic distinction. Awarded President’s 
              Gold Medal and Rector’s Gold Medal for outstanding academic performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            data-aos="fade-up"
            date="2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Fauji Fertilizer Company Limited</h4>
            <p>
              Gained hands-on experience in plant maintenance, rotating equipment 
              inspection, and industrial process optimization.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;