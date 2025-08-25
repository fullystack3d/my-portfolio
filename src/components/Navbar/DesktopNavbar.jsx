import React from 'react';
import { Link } from 'react-scroll';
import './DesktopNavbar.css';

const DesktopNavbar = () => {
  const fxTime = 750;
  return (
    <nav className="navbar">
      <div className="nav-logo">MS</div>
      <ul className="nav-links">
        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={fxTime} className="nav-link">About Me</Link></li>
        <li><Link to="education" spy={true} smooth={true} offset={-70} duration={fxTime} className="nav-link">Education</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={fxTime} className="nav-link">Projects</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={fxTime} className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;