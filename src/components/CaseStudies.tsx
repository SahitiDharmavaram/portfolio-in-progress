import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

interface CaseStudy {
  id: number;
  title: string;
  brandColor: string;
  mutedBorderColor: string;
  coverImage?: string;
  link: string;
  roles: string[];
  timeline: string;
  tagline: string;
  specialNote?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Landmarkr',
    brandColor: '#FFD686',
    mutedBorderColor: 'rgba(255, 214, 134, 0.4)',
    coverImage: '/landmarkr-cover-pic.png',
    link: '/landmarkr',
    roles: ['Augmented Reality', 'UX Research', 'UI Design', 'Unity'],
    timeline: 'May 2025 - July 2025',
    tagline: 'Turn places you pass by into moments you can return to.',
  },
  {
    id: 2,
    title: "Remaking India's Largest Online Payments Platform",
    brandColor: '#6739B7',
    mutedBorderColor: 'rgba(147, 112, 199, 0.4)',
    coverImage: '/phonepe-profile-pic.png',
    link: '/phonepe',
    roles: ['Research', 'Visual Design', 'Strategy', 'Prototyping', 'Testing'],
    timeline: 'February 2024 - September 2024',
    tagline: 'Take control of your finances with features that simplify organization and management.',
  },
  {
    id: 3,
    title: 'KitchenCraft',
    brandColor: '#50AD66',
    mutedBorderColor: 'rgba(120, 190, 140, 0.4)',
    coverImage: '/kitchencraft-cover-pic.png',
    link: '/kitchencraft',
    roles: ['UI Design', 'UX Research', 'User Studies', 'Pitching', 'Prototyping'],
    timeline: 'December 2023 - July 2024',
    tagline: 'Cook, save and explore hands-free with an AI voice assistant and a vibrant community.',
  },
  {
    id: 4,
    title: 'XAI-Powered UI for Medical Practitioners',
    brandColor: '#8A0200',
    mutedBorderColor: 'rgba(180, 100, 100, 0.4)',
    coverImage: '/xai-cover-pic.png',
    link: '/xai',
    roles: ['Full-Stack Development', 'UI Design', 'Research', 'Data Analysis'],
    timeline: 'July 2023 - April 2024',
    tagline: 'Heart disease prediction made simple with AI and an easy doctor-friendly interface.',
    specialNote: 'IEEE AIIOT\'24 Conference Paper',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="case-studies" id="work">
      <div className="case-studies-container">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to={study.link}
            className="case-study-card"
            style={{
              '--brand-color': study.brandColor,
              '--muted-border-color': study.mutedBorderColor,
              textDecoration: 'none'
            } as React.CSSProperties}
          >
            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{study.title}</h3>
                {study.specialNote && (
                  <div className="card-special-note">{study.specialNote}</div>
                )}
              </div>
              <div className="card-bottom">
                <div className="card-left">
                  <div className="card-roles">
                    {study.roles.map((role, index) => (
                      <span
                        key={index}
                        className="role-tag"
                        style={{
                          backgroundColor: `${study.brandColor}20`,
                          borderColor: `${study.brandColor}50`
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="card-timeline">{study.timeline}</div>
                  <p className="card-tagline">{study.tagline}</p>
                </div>
                <div className="card-right">
                  <div className="card-image-placeholder">
                    {study.coverImage ? (
                      <img
                        src={study.coverImage}
                        alt={study.title}
                        className="card-cover-image"
                      />
                    ) : (
                      <span className="coming-soon" style={{ backgroundColor: study.brandColor }}>Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
