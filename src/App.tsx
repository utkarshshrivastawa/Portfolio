import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Skills from './components/Skills';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Positions />
      <Skills />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;