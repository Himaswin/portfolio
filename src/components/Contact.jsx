import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
      </div>
      
      <div className="contact-content">
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Let's build something amazing together!
        </p>
        
        <div className="contact-links">
          <a href="mailto:polaboyenahimaswin@gmail.com" className="contact-link">
            <Mail size={24} />
          </a>
          <a href="https://github.com/Himaswin" className="contact-link" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={20} />
            <span>polaboyenahimaswin@gmail.com</span>
          </div>
          <div className="contact-item">
            <span>Available for freelance opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;