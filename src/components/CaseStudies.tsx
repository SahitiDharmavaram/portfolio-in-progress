import React from 'react';
import './CaseStudies.css';

interface CaseStudy {
  id: number;
  title: string;
  brandColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Landmarkr',
    brandColor: '#FFD686',
  },
  {
    id: 2,
    title: "Remaking India's Largest Online Payments Platform",
    brandColor: '#6739B7',
  },
  {
    id: 3,
    title: 'KitchenCraft',
    brandColor: '#50AD66',
  },
  {
    id: 4,
    title: 'XAI-Powered UI for Medical Practitioners',
    brandColor: '#8A0200',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="case-studies" id="work">
      <div className="case-studies-container">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="case-study-card"
            style={{ '--brand-color': study.brandColor } as React.CSSProperties}
          >
            <div className="card-content">
              <div
                className="card-image-placeholder"
                style={{ backgroundColor: study.brandColor }}
              >
                <span className="coming-soon">Coming Soon</span>
              </div>
              <h3 className="card-title">{study.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
