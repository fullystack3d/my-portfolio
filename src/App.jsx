import React from 'react';

// Import the custom hook to detect screen size
import { useViewport } from './useViewport'; 

// Import both the desktop and mobile navbar components
import DesktopNavbar from './components/Navbar/DesktopNavbar';
import MobileNavbar from './components/Navbar/MobileNavbar';

// Import all the page sections
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

// Import the main stylesheet
import './App.css';

function App() {
  // Get the current width of the viewport
  const { width } = useViewport();
  // Define the breakpoint for switching between navbars
  const breakpoint = 768;

  return (
    <div className="App">
      {/* Conditionally render the correct navbar based on screen width */}
      {width < breakpoint ? <MobileNavbar /> : <DesktopNavbar />}

      <main>
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <ScrollToTopButton />
    </div>
  );
}

export default App;