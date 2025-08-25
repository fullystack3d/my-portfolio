// src/components/AboutMe/AboutMe.jsx

import React from 'react';
import './AboutMe.css';
import profilePic from '../../assets/about-me.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about-me-container">
      <div className="welcome-header">
        <h1>Welcome</h1>
        <h2>Thanks for visiting my portfolio</h2>
      </div>

      <h1 className="about-me-header">About Me</h1>

      {/* --- Add this wrapper div around your image --- */}
      <div className="profile-picture-container">
        <img src={profilePic} alt="A picture of me" className="profile-picture" />
      </div>
      
      <div className="about-me-text">
        <p>
          I am a recent graduate of Mechanical Engineering Technology - Robotics and Automation.
        </p>
        <p>
          Beyond control system design and integration, my passion lies in the architecture of modern control system software integration. Although <strong>industry 4.0</strong> has become a renowned buzzword, I truly believe in the benefits and advantages it brings forth. My goal is to be a driving force of implementing machine communication via data collection and integration.
        </p>
        <p>
          Furthermore, with expanding technologies, I am focused on implementing AI tools that will accelerate this growth. More specifically, I believe <strong>agentic AI systems</strong> will play a vital role in how modern control systems analyze data and utilize it to create a better ecosystem.
        </p>
        <p>
          In addition to my knowledge and experience in control systems, I have a keen intrest in <strong>software integration</strong>. I fully developed this custom portfolio webpage using React, Python, Javascript, HTML, and CSS styling.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;