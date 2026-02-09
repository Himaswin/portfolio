import React from 'react';
import './Experience.css';
import glendorLogo from '../assets/glendor.png';
import outlierLogo from '../assets/outlier.png';
import whoolabLogo from '../assets/whoolab.png';

const Experience = () => {
  const experience = [
    {
      title: 'AI Intern',
      company: 'Glendor Inc',
      period: 'Jan 2025 - Apr 2025',
      logo: glendorLogo
    },
    {
      title: 'Generative AI Trainer (Freelance)',
      company: 'Outlier',
      period: 'Dec 2024 - Apr 2025',
      logo: outlierLogo
    },
    {
      title: 'Software Developer Intern',
      company: 'Whoolab',
      period: 'Jan 2024 - Aug 2024',
      logo: whoolabLogo
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
      </div>
      
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="experience-content">
              <div className="company-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="experience-details">
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-subtitle">{exp.company}</p>
                <span className="timeline-period">{exp.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;