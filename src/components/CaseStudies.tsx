import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

interface CaseStudy {
  id: number;
  title: string;
  brandColor: string;
  coverImage?: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Landmarkr',
    brandColor: '#FFD686',
    coverImage: '/landmarkr-cover-pic.png',
    link: '/landmarkr',
  },
  {
    id: 2,
    title: "Remaking India's Largest Online Payments Platform",
    brandColor: '#6739B7',
    link: '/phonepe',
  },
  {
    id: 3,
    title: 'KitchenCraft',
    brandColor: '#50AD66',
    coverImage: '/kitchencraft-cover-pic.png',
    link: '/kitchencraft',
  },
  {
    id: 4,
    title: 'XAI-Powered UI for Medical Practitioners',
    brandColor: '#8A0200',
    coverImage: '/xai-cover-pic.png',
    link: '/xai',
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
            style={{ '--brand-color': study.brandColor, textDecoration: 'none' } as React.CSSProperties}
          >
            <div className="card-content">
              <div
                className="card-image-placeholder"
                style={{ backgroundColor: '#ffffff' }}
              >
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
              <h3 className="card-title">{study.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
