// src/components/Education/Education.jsx

import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-container">
      <div className="education-content">
        <h1 className="main-header">Academic Performance</h1>
        <p className="gpa">Advanced Diploma <i>with Distinction</i> | 3.75 Overall GPA</p>

        <h1 className="main-header">Courses</h1>

        <h2 className="sub-header">Programming</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Computer Programming I:</h3>
            <p>This was a foundational syntax course in VBA to use the common functions of all programming languages.</p>
            <p><strong>Capstone Projects:</strong> A velocity calculation tool, and a tool selection / machine cutting data interface.</p>
          </div>
          <div className="course-item">
            <h3>PLC Programming I:</h3>
            <p>Foundational ladder logic creation and troubleshooting using Siemens and Allen Bradley PLCs.</p>
            <p><strong>Capstone Project:</strong> A PLC and HMI integrated control system.</p>
          </div>
          <div className="course-item">
            <h3>Digital Devices and Micro Processors:</h3>
            <p>Foundational knowledge of computer systems and micro controllers.</p>
            <p><strong>Capstone Project:</strong> A binary lock code pushbutton system to access different states on an Arduino.</p>
          </div>
          <div className="course-item">
            <h3>PLC Programming II:</h3>
            <p>Advanced PLC logic creation including all the standard languages. PLC hardware configuration and integration.</p>
            <p><strong>Capstone Project:</strong> Integrating a Emulate3D ecosystem to interact with a softPLC and control the system in its virtual environment.</p>
          </div>
          <div className="course-item">
            <h3>Robotics Programming I:</h3>
            <p>Foundational robotic programming knowledge of several different platforms such as Fanuc, ABB, Motoman, and KUKA.</p>
            <p><strong>Capstone Project:</strong> Using EOAT parameters, I created a program to remove and install tooling then proceed in task to draw the text " We &lt;3 Robots".</p>
          </div>
          <div className="course-item">
            <h3>Process Control:</h3>
            <p>Advanced PLC programming to utilize VFD and servo motion.</p>
            <p><strong>Capstone Project:</strong> A VFD controlled conveyor moved an object, a servo controlled tool would track the object. Using a PID control, the tool would match the rate of the object and pick up the object while in motion.</p>
          </div>
          <div className="course-item">
            <h3>Safety Circuits and Standards:</h3>
            <p>Fundamental knowledge of safety circuit wiring and programming.</p>
            <p><strong>Capstone Project:</strong> A simulated work cell safety circuit. Utilizing 2 different safety PLCs (Omron and Allen Bradley) along with several different safety IO modules, I built a system to safety operate a machine cell via E-Stops, light curtains, enable switches, palm buttons, all according to Canadian safety standards.</p>
          </div>
          <div className="course-item">
            <h3>Computer Programming II:</h3>
            <p>Advanced programming techniques using sorting methods, file reading/writing, string parsing, and database connections in VB.NET and C#.</p>
            <p><strong>Capstone Project:</strong> A simulated machine HMI. The user could turn different processes online and offline. The corresponding cycle time, state, and production values would be stored in a local MS Access database.</p>
          </div>
          <div className="course-item">
            <h3>Robotics Programming II:</h3>
            <p>Advanced robot configuration and programming. This included utilizing vision systems to guide robots, interlocking/handshaking with PLCs, and robot mastering / config.</p>
            <p><strong>Capstone Project:</strong> A quality control system via PLC machine control, vision inspection, and robot part handling. Parts would be loaded into the robot cell. PLC controls would singulate and prepare parts for inspection. The prepared parts would be inspected by the vision system and the robot would re-work or move the part to the next process depending on its pass/fail state.</p>
          </div>
          <div className="course-item">
            <h3>Data Communications:</h3>
            <p>Fundamental knowledge of networking protocols such as Modbus, FTP, HTTP, PHP, and MQTT.</p>
            <p><strong>Capstone Project:</strong> A virtual master/slave Modbus softPLC that displayed states to a webpage. I integrated a C# console app to read/write data to the slave PLC. Over Modbus, the data would update. The data was stored in a MySQL database, and they accessed to display the PLC data on a webpage via PHP.</p>
          </div>
        </div>

        <h2 className="sub-header">Other Engineering Courses</h2>
        <p className="other-courses">
          Electrical Fundamentals • Electrical Design and Commissioning • Fluid Power in Automation • Engineering drawings I & II • GD&T • Material Sciences • Static and Dynamic Physics • Tool Design for Automation • Quality Control Systems • Design for Manufacturing • Additive Manufacturing • Industrial Time Study • Engineering Economics • Computer Integrated Manufacturing
        </p>
        <div className="closing-text">
          <p>These courses have enabled me to analyze and problem solve through a diverse knowledge base of engineering concepts. From the grassroot fundamentals of Ohm's law, to power calculation and design of an active system; the principles I have learned throughout my education have made my co-op work experiences more valuable as I was able to fit the theory and practical concepts together like a puzzle.</p>
          <p>They say true wisdom is learned through experience, and while I couldn't agree more, the fundamental understanding of how things work is vital to accelerating the learning curve.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;