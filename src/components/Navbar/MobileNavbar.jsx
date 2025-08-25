import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-nav-logo">MS</div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`mobile-nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li><Link to="about" smooth={true} offset={-70} duration={500} className="mobile-nav-link" onClick={closeMenu}>About Me</Link></li>
        <li><Link to="education" smooth={true} offset={-70} duration={500} className="mobile-nav-link" onClick={closeMenu}>Education</Link></li>
        <li><Link to="projects" smooth={true} offset={-70} duration={500} className="mobile-nav-link" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="contact" smooth={true} offset={-70} duration={500} className="mobile-nav-link" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};
export default MobileNavbar;