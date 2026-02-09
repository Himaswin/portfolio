import React from 'react';
import { Code, Package, Database, Cloud } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { 
      category: 'Languages', 
      items: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'SQL', 'HTML/CSS'], 
      icon: <Code size={24} /> 
    },
    { 
      category: 'Libraries & Frameworks', 
      items: ['React', 'Node.js', 'Express', 'Django', 'Spring Boot', 'TensorFlow', 'Flask'], 
      icon: <Package size={24} /> 
    },
    { 
      category: 'Databases', 
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQLite'], 
      icon: <Database size={24} /> 
    },
    { 
      category: 'Cloud & DevOps', 
      items: ['AWS', 'Docker', 'Git', 'GitHub', 'CI/CD', 'Linux', 'Azure'], 
      icon: <Cloud size={24} /> 
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-category">{skill.category}</h3>
            </div>
            <div className="skill-items">
              {skill.items.map((item, idx) => (
                <span key={idx} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;