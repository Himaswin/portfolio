import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science (Honors)',
      specialization: 'Software Engineering Specialization, Minor in Mathematics',
      school: 'University of Windsor',  // Add your university name here
      period: 'Sep 2021 - Apr 2025',
      description: 'Honors degree with focus on Software Engineering and Mathematics'
    },
    {
      degree: 'High School - Mathematics and Science',
      school: 'Narayana Junior College',
      period: '2018 - 2020',  // Adjust years if needed
      description: 'Grade: 93.3%'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
      </div>
      
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-title">{edu.degree}</h3>
              <span className="timeline-period">{edu.period}</span>
            </div>
            {edu.specialization && (
              <p className="timeline-specialization">{edu.specialization}</p>
            )}
            <p className="timeline-subtitle">{edu.school}</p>
            <p className="timeline-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;