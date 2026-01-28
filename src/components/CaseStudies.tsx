import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

interface Project {
  id: number;
  title: string;
  brandColor: string;
  mutedBorderColor: string;
  coverImage?: string;
  link?: string;
  externalLink?: string;
  roles: string[];
  timeline: string;
  tagline: string;
  specialNote?: string;
}

const caseStudies: Project[] = [
  {
    id: 1,
    title: "Remaking India's Largest Online Payments Platform",
    brandColor: '#6739B7',
    mutedBorderColor: 'rgba(147, 112, 199, 0.4)',
    coverImage: process.env.PUBLIC_URL + '/phonepe-profile-pic.png',
    link: '/phonepe',
    roles: ['Research', 'Visual Design', 'Strategy', 'Prototyping', 'Testing'],
    timeline: 'February 2024 - September 2024',
    tagline: 'Take control of your finances with features that simplify organization and management.',
  },
  {
    id: 2,
    title: 'KitchenCraft',
    brandColor: '#50AD66',
    mutedBorderColor: 'rgba(120, 190, 140, 0.4)',
    coverImage: process.env.PUBLIC_URL + '/kitchencraft-cover-pic.png',
    link: '/kitchencraft',
    roles: ['UI Design', 'UX Research', 'User Studies', 'Pitching', 'Prototyping'],
    timeline: 'December 2023 - July 2024',
    tagline: 'Cook, save and explore hands-free with an AI voice assistant and a vibrant community.',
  },
  {
    id: 3,
    title: 'XAI-Powered UI for Medical Practitioners',
    brandColor: '#8A0200',
    mutedBorderColor: 'rgba(180, 100, 100, 0.4)',
    coverImage: process.env.PUBLIC_URL + '/xai-cover-pic.png',
    link: '/xai',
    roles: ['Full-Stack Development', 'UI Design', 'Research', 'Data Analysis'],
    timeline: 'July 2023 - April 2024',
    tagline: 'Heart disease prediction made simple with AI and an easy doctor-friendly interface.',
    specialNote: 'IEEE AIIOT\'24 Conference Paper',
  },
];

const selectedProjects: Project[] = [
  {
    id: 4,
    title: 'Landmarkr',
    brandColor: '#FFD686',
    mutedBorderColor: 'rgba(255, 214, 134, 0.4)',
    coverImage: process.env.PUBLIC_URL + '/landmarkr-cover-pic.png',
    link: '/landmarkr',
    roles: ['Augmented Reality', 'UX Research', 'UI Design', 'Unity'],
    timeline: 'May 2025 - July 2025',
    tagline: 'Turn places you pass by into moments you can return to.',
  },
  {
    id: 5,
    title: 'GAN for Heart Disease Prediction',
    brandColor: '#4A90D9',
    mutedBorderColor: 'rgba(74, 144, 217, 0.4)',
    externalLink: 'https://github.com/SahitiDharmavaram/Using-Simple-Gan-output-data-as-input-in-the-Naive-Bayes-algorithm-to-obtain-accuracy-of-p',
    roles: ['Machine Learning', 'GANs', 'Data Analysis', 'Python'],
    timeline: 'February 2023 - May 2024',
    tagline: 'Using a GAN to generate synthetic heart data and validate it with Naïve Bayes classification.',
  },
  {
    id: 6,
    title: 'NLP App with Text Insights',
    brandColor: '#E67E22',
    mutedBorderColor: 'rgba(230, 126, 34, 0.4)',
    externalLink: 'https://github.com/SahitiDharmavaram/NLP-Streamlit-App-for-Text-Insight-with-Speech-Summarization',
    roles: ['NLP', 'BERT', 'Streamlit', 'Speech-to-Text'],
    timeline: 'August 2024',
    tagline: 'Text analysis app with summarization, sentiment detection, and speech-to-text processing.',
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardContent = (
    <div className="card-content">
      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
        {project.specialNote && (
          <div className="card-special-note">{project.specialNote}</div>
        )}
      </div>
      <div className="card-bottom">
        <div className="card-left">
          <div className="card-roles">
            {project.roles.map((role, index) => (
              <span
                key={index}
                className="role-tag"
                style={{
                  backgroundColor: `${project.brandColor}20`,
                  borderColor: `${project.brandColor}50`
                }}
              >
                {role}
              </span>
            ))}
          </div>
          <div className="card-timeline">{project.timeline}</div>
          <p className="card-tagline">{project.tagline}</p>
        </div>
        <div className="card-right">
          <div className="card-image-placeholder">
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.title}
                className="card-cover-image"
              />
            ) : (
              <span className="coming-soon" style={{ backgroundColor: project.brandColor }}>View on GitHub</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const cardStyle = {
    '--brand-color': project.brandColor,
    '--muted-border-color': project.mutedBorderColor,
    textDecoration: 'none'
  } as React.CSSProperties;

  if (project.externalLink) {
    return (
      <a
        href={project.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="case-study-card"
        style={cardStyle}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      to={project.link || '/'}
      className="case-study-card"
      style={cardStyle}
    >
      {cardContent}
    </Link>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section className="case-studies" id="work">
      <div className="section-wrapper">
        <h2 className="section-title">case studies</h2>
        <div className="case-studies-container">
          {caseStudies.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="section-wrapper">
        <h2 className="section-title">selected projects</h2>
        <div className="case-studies-container">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
