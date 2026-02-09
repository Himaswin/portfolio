import React from 'react';
import './About.css';
import profilePhoto from '../assets/himaswin.jpg';  // Add this import


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I love building things, especially ideas that turn into something useful in the real world.
            I enjoy exploring new technologies, experimenting day to day, and turning ideas into clean, 
            scalable solutions through code.
            
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, or working on 
           a reasearch idea.
          </p>

        </div>
        
<div className="about-image">
  <div className="animated-placeholder">
    <div className="code-editor">
      <div className="editor-header">
        <div className="editor-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="editor-title">developer.js</div>
        <div className="editor-status">
          <span className="status-dot"></span>
          <span className="status-text">Active</span>
        </div>
      </div>
      <div className="editor-content">
        <div className="line-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
        <div className="code-lines">
          <div className="code-line">
            <span className="keyword">const</span> <span className="variable">developer</span> = {'{'} 
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">name:</span> <span className="string">"himaswin"</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">skills:</span> [<span className="string">"React"</span>, <span className="string">"Python"</span>,<span className="string">..</span>]
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">passion:</span> <span className="string">"Building"</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">coffee:</span> <span className="boolean">true</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="property">status:</span> <span className="string">"coding..."</span>
          </div>
          <div className="code-line">
            {'}'};
          </div>
          <div className="code-line">
            <span className="cursor-blink">|</span>
          </div>
        </div>
      </div>
      <div className="editor-footer">
        <div className="footer-item">
          <span className="icon">⚡</span> JavaScript
        </div>
        <div className="footer-item">
          <span className="icon">✓</span> No Errors
        </div>
        <div className="footer-item pulse">
          <span className="icon">●</span> Running
        </div>
      </div>
    </div>
    
    {/* Floating code symbols */}
    <div className="floating-symbols">
      <span className="symbol">{'{'}</span>
      <span className="symbol">{'}'}</span>
      <span className="symbol">{'<'}</span>
      <span className="symbol">{'>'}</span>
      <span className="symbol">{'/'}</span>
      <span className="symbol">{'='}</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;