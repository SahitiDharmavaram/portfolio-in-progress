import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';
import './XAI.css';

const XAI: React.FC = () => {
  return (
    <main
      className="case-study-page xai-case"
      style={{ '--accent-color': '#8A0200' } as React.CSSProperties}
    >
      <div className="case-study-container">
        <header className="case-study-header">
          <Link to="/" className="case-study-back">
            ← Back to Home
          </Link>
          <p className="case-study-kicker">XAI Case Study</p>
          <h1 className="case-study-title">XAI-Powered UI for Medical Practitioners</h1>
          <p className="case-study-summary">
            Building a clinical interface that made AI risk predictions interpretable, actionable,
            and trustworthy for frontline decision makers.
          </p>
          <div className="case-study-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Product Design, Research, Data Analysis</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">July 2023 – April 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Methods</span>
              <span className="meta-value">Workflow mapping, clinician interviews, usability studies</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Deliverables</span>
              <span className="meta-value">Explainability UI, prototype, validation plan</span>
            </div>
          </div>
        </header>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Problem</span>
            <h2 className="section-title">Clinicians could not trust what they could not trace</h2>
            <p className="section-lede">
              Early pilots showed strong model performance, but adoption was limited by low
              confidence in how predictions were derived.
            </p>
          </div>
          <div className="case-study-two-col">
            <div className="case-study-card">
              <h3 className="case-study-subtitle">What we observed</h3>
              <ul className="case-study-list">
                <li>Risk scores were separated from patient evidence and history.</li>
                <li>Critical context was spread across multiple screens and exports.</li>
                <li>Review workflows required manual cross-checking with charts.</li>
              </ul>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Why it mattered</h3>
              <p>
                Without transparent reasoning, clinicians defaulted to existing tools. The product
                needed to explain the model in a way that aligned with real clinical decision flow.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Why this project</span>
            <h2 className="section-title">A UI layer was required to make AI usable</h2>
            <p className="section-lede">
              The project focused on turning predictions into evidence-backed insights, keeping the
              interface aligned with clinician mental models.
            </p>
          </div>
          <div className="xai-narrative">
            <div className="xai-narrative-copy">
              <p>
                We audited existing clinical workflows and documented the information clinicians
                needed before acting on a recommendation.
              </p>
              <ul className="case-study-list">
                <li>Evidence needed to be adjacent to predictions.</li>
                <li>Risk factors had to be ranked with clear rationale.</li>
                <li>Actions had to map to existing review and sign-off steps.</li>
              </ul>
              <div className="xai-callout">
                Key insight: clinicians trust explanations that connect model outputs to familiar
                evidence patterns and patient history.
              </div>
            </div>
            <div className="xai-image-grid">
              <figure className="xai-image-card">
                <img src="/XAI/pic1.png" alt="Baseline model output view" />
                <figcaption>Baseline model output without supporting evidence.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic2.png" alt="Workflow notes from clinical review" />
                <figcaption>Workflow notes outlining decision checkpoints.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic3.png" alt="Evidence tracing concept" />
                <figcaption>Evidence tracing concepts to link risk and history.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic4.png" alt="Risk factor ranking experiment" />
                <figcaption>Ranking risk factors by clinical relevance.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic5.png" alt="Explainability layer layout" />
                <figcaption>Exploration of explainability layers within the UI.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic6.png" alt="Dashboard layout exploration" />
                <figcaption>Dashboard layout studies for quick scanning.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic7.png" alt="Review flow interaction" />
                <figcaption>Review flow with sign-off checkpoints.</figcaption>
              </figure>
              <figure className="xai-image-card">
                <img src="/XAI/pic8.png" alt="Final narrative summary view" />
                <figcaption>Final narrative summary for shared understanding.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Approach</span>
            <h2 className="section-title">Design principles for explainable care</h2>
            <p className="section-lede">
              Each screen was evaluated against clarity, traceability, and speed of comprehension.
            </p>
          </div>
          <div className="case-study-grid">
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Evidence first</h3>
              <p>
                Surface the patient data that the model relies on before presenting the risk score.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Actionable ranking</h3>
              <p>
                Present risk drivers in a hierarchy that mirrors how clinicians triage cases.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Workflow continuity</h3>
              <p>
                Map recommendations to existing review and sign-off steps to reduce friction.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Outcome</span>
            <h2 className="section-title">From opaque predictions to confident decisions</h2>
            <p className="section-lede">
              The final prototype translated model output into clear, evidence-backed narratives
              that aligned with clinical judgment.
            </p>
          </div>
          <div className="xai-outcome">
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Clearer decision flow</h3>
              <p>
                Clinicians were able to validate key factors quickly without leaving the primary
                view.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Faster comprehension</h3>
              <p>
                Structured explanations reduced time spent cross-referencing data across systems.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Reusable UI patterns</h3>
              <p>
                The explainability layout became a base pattern for future diagnostic tools.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default XAI;
