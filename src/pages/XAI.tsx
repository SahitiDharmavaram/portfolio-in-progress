import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CaseStudy.css';
import './XAI.css';

const XAI: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [bottomOffset, setBottomOffset] = useState(40);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          const newBottom = window.innerHeight - footerRect.top + 20;
          setBottomOffset(Math.max(newBottom, 40));
        } else {
          setBottomOffset(40);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="case-study-page xai-page">
        <Link to="/" className="back-to-home">
          Back to home
        </Link>

        {/* Case Study Header */}
        <header className="case-study-header">
          <h1 className="case-study-title" style={{ color: '#8A0200' }}>
            XAI-Powered UI for Medical Practitioners
          </h1>

          {/* Skills/Roles Section */}
          <div className="case-study-roles">
            <span className="role-tag">Explainable AI</span>
            <span className="role-tag">UX Research</span>
            <span className="role-tag">UI Design</span>
            <span className="role-tag">Healthcare</span>
          </div>

          {/* Timeline Section */}
          <div className="case-study-timeline-section">
            <h3 className="timeline-label">Timeline</h3>
            <p className="timeline-value">Jul 2023 - Apr 2024</p>
          </div>

          {/* Tagline */}
          <p className="case-study-tagline">
            Heart disease prediction made simple with AI and an easy doctor-friendly interface.
          </p>

          {/* Hero Image */}
          <div className="case-study-hero-image xai-hero">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_1.png"} alt="XAI Heart Disease Prediction" />
          </div>
        </header>

        {/* Publication Highlight */}
        <section className="xai-publication-section">
          <div className="publication-badge">Published Research</div>
          <h2 className="publication-title">
            2024 Third IEEE International Conference on Artificial Intelligence for Internet of Things (AIIoT 2024)
          </h2>
          <p className="publication-paper">
            Explainable Artificial Intelligence (XAI) Approach to Heart Disease Prediction
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/10574635"
            target="_blank"
            rel="noopener noreferrer"
            className="publication-cta"
          >
            Research paper link →
          </a>
        </section>

        {/* The Problem Section */}
        <section className="xai-section xai-problem-section">
          <div className="section-label">The Problem</div>
          <h2 className="xai-section-heading">Why Cardiovascular Disease?</h2>

          <div className="xai-problem-content">
            <div className="problem-stat-highlight">
              <span className="stat-large">17.9M</span>
              <span className="stat-context">deaths annually from cardiovascular diseases worldwide</span>
            </div>

            <p className="xai-body-text">
              Cardiovascular Diseases (CVDs) are the leading cause of death globally and one of the primary causes in India. Despite technological advancements, current predictive models often lack transparency, making it difficult for medical practitioners to trust and understand their predictions.
            </p>
          </div>

          <div className="xai-image-block">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_2.png"} alt="CVD Statistics and Impact" />
          </div>
        </section>

        {/* The Challenge */}
        <section className="xai-section xai-challenge-section">
          <div className="xai-two-col">
            <div className="xai-challenge-card">
              <div className="challenge-label">Challenge</div>
              <p>
                Current predictive models for CVDs lack transparency, making it difficult for medical practitioners to trust and understand their predictions. The "black box" nature of AI creates a barrier to clinical adoption.
              </p>
            </div>
            <div className="xai-need-card">
              <div className="need-label">Need</div>
              <p>
                Innovative solutions that deliver high predictive accuracy while also providing clear, interpretable explanations for clinical decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Research Focus */}
        <section className="xai-section xai-focus-section">
          <div className="xai-focus-block">
            <div className="focus-label">Research Focus</div>
            <p className="focus-statement">
              To develop an accurate and interpretable predictive model for cardiovascular disease using machine learning and HCI techniques.
            </p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="xai-section xai-methodology-section">
          <div className="section-label">Approach</div>
          <h2 className="xai-section-heading">Methodology</h2>

          <p className="xai-body-text">
            We analyzed 11 demographic, clinical, and diagnostic parameters as core attributes to build our predictive model.
          </p>

          <div className="xai-image-block">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_3.png"} alt="Methodology Overview" />
          </div>

          <div className="xai-model-results">
            <h3>Model Selection Results</h3>
            <p>After comparing multiple models and datasets, we selected the optimal approach for our use case.</p>

            <div className="model-metrics">
              <div className="metric-item">
                <span className="metric-label">Final Model</span>
                <span className="metric-value">Random Forest Classifier</span>
              </div>
              <div className="metric-item highlight">
                <span className="metric-label">Accuracy</span>
                <span className="metric-value">96.07%</span>
              </div>
            </div>
          </div>

          <div className="xai-image-block">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_4.png"} alt="Model Comparison Results" />
          </div>
        </section>

        {/* Explainable AI Section */}
        <section className="xai-section xai-techniques-section">
          <div className="section-label">Making AI Transparent</div>
          <h2 className="xai-section-heading">Explainable AI Techniques</h2>

          <div className="xai-technique-block">
            <div className="technique-header">
              <span className="technique-num">01</span>
              <h3>Local Interpretable Model-Agnostic Explanations (LIME)</h3>
            </div>
            <p className="technique-desc">
              LIME explains individual predictions by creating a simpler, interpretable model around each prediction point.
            </p>
            <div className="xai-image-block">
              <img src={process.env.PUBLIC_URL + "/XAI/pic_5.png"} alt="LIME Explanation" />
            </div>
          </div>

          <div className="xai-technique-block">
            <div className="technique-header">
              <span className="technique-num">02</span>
              <h3>Shapley Additive Explanations (SHAP)</h3>
            </div>
            <p className="technique-desc">
              SHAP values provide both local and global interpretability, showing how each feature contributes to the prediction.
            </p>
            <div className="xai-image-block">
              <img src={process.env.PUBLIC_URL + "/XAI/pic_6.png"} alt="SHAP Force Plot" />
              <p className="image-caption">SHAP graph explaining instance values</p>
            </div>
          </div>
        </section>

        {/* UI Design Section */}
        <section className="xai-section xai-ui-section">
          <div className="section-label">The Solution</div>
          <h2 className="xai-section-heading">Designing for Medical Practitioners</h2>

          <p className="xai-body-text">
            Our implementation offers a user-friendly interface designed to assist medical practitioners in heart disease prediction. Doctors input 11 key parameters such as age, sex, and cholesterol levels.
          </p>

          <div className="xai-image-block featured">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_7.png"} alt="UI Overview" />
          </div>

          <div className="xai-ui-features">
            <div className="ui-feature">
              <h4>Intuitive Input</h4>
              <p>Dropdown menus for categorical parameters reduce input errors and complexity.</p>
            </div>
            <div className="ui-feature">
              <h4>Clear Explanations</h4>
              <p>LIME and SHAP visualizations clarify both individual predictions and overall model behavior.</p>
            </div>
            <div className="ui-feature">
              <h4>Practitioner Control</h4>
              <p>Final medical decisions always remain with the practitioner.</p>
            </div>
          </div>

          <div className="xai-image-block">
            <img src={process.env.PUBLIC_URL + "/XAI/pic_8.png"} alt="Website Display for Practitioners" />
            <p className="image-caption">Complete interface displayed to medical practitioners</p>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="xai-section xai-outcomes-section">
          <div className="xai-two-col outcomes">
            <div className="xai-future-block">
              <h3>Future Scope</h3>
              <p>
                Future research can explore IoT integration for real-time monitoring and advanced architectures such as CNNs and LSTMs to further improve predictive performance.
              </p>
            </div>
            <div className="xai-takeaways-block">
              <h3>Key Takeaways</h3>
              <ul>
                <li>Led the design of an intuitive interface for interpretability</li>
                <li>Conducted research, data analysis, and model training</li>
                <li>Gained insight into AI transparency in healthcare</li>
                <li>Strengthened focus on Healthcare + HCI</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer variant="red" />
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        style={{ bottom: `${bottomOffset}px` }}
      >
        <span
          className="back-to-top-arrow"
          style={{
            background: 'linear-gradient(135deg, rgba(138, 2, 0, 0.2) 0%, rgba(138, 2, 0, 0.1) 100%)',
            color: '#8A0200'
          }}
        >↑</span>
        <span className="back-to-top-text">Back to the top</span>
      </button>
    </>
  );
};

export default XAI;
