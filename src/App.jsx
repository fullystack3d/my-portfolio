// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
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