
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Academic from './components/Academic';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="academic" className="py-20 bg-slate-900/20">
          <Academic />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="projects" className="py-20 bg-slate-900/20">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
