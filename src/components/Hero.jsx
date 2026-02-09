import React from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="floating-elements">
        <div className="floating-element" />
        <div className="floating-element" />
        <div className="floating-element" />
      </div>
      
      <div className="glitch-wrapper">
        <h1 className="hero-title">Himaswin Polaboyena</h1>
      </div>
      
      <p className="hero-subtitle">
        Software Developer • Creative Technologist • Problem Solver
      </p>
      
      <div className="hero-cta">
        <button 
          className="btn-primary" 
          onClick={() => scrollToSection('projects')}
        >
          View My Work
        </button>
        <button 
          className="btn-secondary" 
          onClick={() => scrollToSection('contact')}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;