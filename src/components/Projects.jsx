import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

// Import project images
import insuranceImg from '../assets/insurance.png';
import bankImg from '../assets/bank.png';
import gradingImg from '../assets/ai-grade.png';
import pacmanImg from '../assets/pacman.jpg';
import netflixImg from '../assets/netflix.png';
import doctorImg from '../assets/doctor.png';

const Projects = () => {
  const projects = [
    {
      title: 'Insurance Risk Prediction Model',
      description: 'Machine learning model that predicts insurance risk using advanced algorithms and data analysis.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      image: insuranceImg,
      github: 'https://github.com/Himaswin'
    },
    {
      title: 'Bank Management System',
      description: 'Comprehensive banking application with account management, transactions, and user authentication.',
      tech: ['Java', 'Java swing library', 'MySQL'],
      image: bankImg,
      github: 'https://github.com/Himaswin'
    },
    {
      title: 'AI Grading Assistant',
      description: 'Automated grading system powered by AI to evaluate and provide feedback on student assignments.',
      tech: ['ReactJs', 'Django', 'Tailwindcss', 'OpenAI API'],
      image: gradingImg,
      github: 'https://github.com/Himaswin'
    },
    {
      title: 'Pacman 3D',
      description: '3D recreation of the classic Pacman game with modern graphics and immersive gameplay.',
      tech: ['Blendor', 'Java', '3D Modeling', 'Game Physics', 'JavaFx'],
      image: pacmanImg,
      github: 'https://github.com/Himaswin'
    },
    {
      title: 'Netflix Clone',
      description: 'Full-stack streaming platform clone with user authentication, video streaming, and personalized recommendations.',
      tech: ['React', 'Node.js', 'API'],
      image: netflixImg,
      github: 'https://github.com/Himaswin'
    },
    {
      title: 'Doctor Patient ABMS',
      description: 'Agent based model to for triaging the patients.',
      tech: ['Python', 'Scikit-learn', 'NUmpty', 'Math'],
      image: doctorImg,
      github: 'https://github.com/Himaswin'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.github} 
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
