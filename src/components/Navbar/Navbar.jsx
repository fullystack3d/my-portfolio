// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const fxTime = 750;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- New state to manually track the active link ---
  const [activeLink, setActiveLink] = useState('about');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // A helper function to handle both actions on click
  const handleLinkClick = (to) => {
    setActiveLink(to);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">MS</div>
      
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={fxTime} 
            className={`nav-link ${activeLink === 'about' ? 'mobile-active' : ''}`}
            onSetActive={handleSetActive} // From react-scroll, updates active link on scroll
            onClick={() => handleLinkClick('about')} // Manually set active on click
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="education" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={fxTime} 
            className={`nav-link ${activeLink === 'education' ? 'mobile-active' : ''}`}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('education')}
          >
            Education
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={fxTime} 
            className={`nav-link ${activeLink === 'projects' ? 'mobile-active' : ''}`}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={fxTime} 
            className={`nav-link ${activeLink === 'contact' ? 'mobile-active' : ''}`}
            onSetActive={handleSetActive}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;