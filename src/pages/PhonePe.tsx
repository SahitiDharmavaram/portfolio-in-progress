import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';
import './PhonePe.css';

const PhonePe: React.FC = () => {
  return (
    <main
      className="case-study-page phonepe-case"
      style={{ '--accent-color': '#6739B7' } as React.CSSProperties}
    >
      <div className="case-study-container">
        <header className="case-study-header">
          <Link to="/" className="case-study-back">
            ← Back to Home
          </Link>
          <p className="case-study-kicker">PhonePe · UPI Redesign</p>
          <h1 className="case-study-title">Remaking India&apos;s Largest Online Payments Platform</h1>
          <p className="case-study-summary">
            A research-led redesign focused on reducing payment anxiety, improving transaction
            clarity, and helping people manage recurring UPI activity with confidence.
          </p>
          <div className="case-study-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UX Research, Visual Design, Strategy, Prototyping</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">February 2024 – September 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Methods</span>
              <span className="meta-value">Interviews, task analysis, diary study, usability tests</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platforms</span>
              <span className="meta-value">Android, iOS</span>
            </div>
          </div>
        </header>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Research focus</span>
            <h2 className="section-title">What do users want to solve with UPI?</h2>
            <p className="section-lede">
              The research uncovered practical, day-to-day jobs that drive UPI adoption.
              The design needed to serve these needs without adding clutter or friction.
            </p>
          </div>
          <div className="insight-table">
            <div className="insight-row">
              <div className="insight-title">Pay with certainty</div>
              <div className="insight-text">
                Users wanted clear recipient confirmation, predictable success states, and a quick
                way to recover when transfers failed.
              </div>
            </div>
            <div className="insight-row">
              <div className="insight-title">Organize shared expenses</div>
              <div className="insight-text">
                Splits, collections, and family payments were frequent, but tracking who paid what
                was still manual and error-prone.
              </div>
            </div>
            <div className="insight-row">
              <div className="insight-title">Stay ahead of bills</div>
              <div className="insight-text">
                Recurring payments needed reminders and scheduling inside the flow, not hidden in
                settings or external calendars.
              </div>
            </div>
            <div className="insight-row">
              <div className="insight-title">Understand spending</div>
              <div className="insight-text">
                Transaction histories were too flat. People wanted meaningful groupings and faster
                access to recent, repeat, or high-impact payments.
              </div>
            </div>
            <div className="insight-row">
              <div className="insight-title">Resolve issues quickly</div>
              <div className="insight-text">
                When money left the account, users needed instant status, a clear help path, and a
                reliable way to confirm resolution.
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Design response</span>
            <h2 className="section-title">A calmer, clearer UPI experience</h2>
            <p className="section-lede">
              The experience was rebuilt around clarity, accountability, and faster decision making
              for everyday payments.
            </p>
          </div>
          <div className="case-study-grid">
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Confidence cues</h3>
              <p>
                Strong recipient previews, step-by-step status changes, and contextual receipts
                reduce uncertainty at the moment of payment.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Smart organization</h3>
              <p>
                Quick filters, recurring payment hubs, and group tagging keep daily activity
                manageable without adding visual noise.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Recovery-first support</h3>
              <p>
                Failure states, dispute visibility, and guided resolution steps make it clear what
                happened and how to fix it.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Synthesis</span>
            <h2 className="section-title">Turning research into prioritized themes</h2>
            <p className="section-lede">
              Themes were synthesized into opportunity areas that framed the redesign and shaped
              the new information hierarchy.
            </p>
          </div>
          <div className="artifact-layout">
            <figure className="artifact-card artifact-thematic">
              <img
                src="/thematic.png"
                alt="Thematic analysis clusters"
                className="artifact-image thematic-visual"
              />
              <figcaption>Theme clusters from interviews and diary logs.</figcaption>
            </figure>
            <div className="artifact-board-grid">
              <figure className="artifact-card artifact-compact">
                <img src="/BB.png" alt="Behavioral board A" className="artifact-image" />
                <figcaption>Behavioral clustering for everyday UPI tasks.</figcaption>
              </figure>
              <figure className="artifact-card artifact-compact">
                <img src="/BC.png" alt="Behavioral board B" className="artifact-image" />
                <figcaption>Mapping friction points to opportunity statements.</figcaption>
              </figure>
              <figure className="artifact-card artifact-compact">
                <img src="/BE.png" alt="Behavioral board C" className="artifact-image" />
                <figcaption>Priority sorting across key user jobs.</figcaption>
              </figure>
              <figure className="artifact-card artifact-emphasis">
                <img src="/BD.png" alt="Behavioral board D" className="artifact-image" />
                <figcaption>Final synthesis board guiding the flow updates.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Prototype</span>
            <h2 className="section-title">Try the prototype</h2>
            <p className="section-lede">
              The interactive prototype focuses on payment clarity, recurring flows, and rapid
              access to support states.
            </p>
          </div>
          <div className="prototype-panel">
            <div>
              <div className="prototype-heading">Interactive flows</div>
              <p className="prototype-note">
                Covers sending, tracking, recurring payments, and resolution paths.
              </p>
            </div>
            <div className="prototype-actions">
              <a
                className="prototype-link"
                href="https://www.figma.com"
                target="_blank"
                rel="noreferrer"
              >
                View prototype
              </a>
              <span className="prototype-meta">Figma · 17 key flows</span>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="section-header">
            <span className="section-eyebrow">Outcome</span>
            <h2 className="section-title">A more reliable everyday payments experience</h2>
            <p className="section-lede">
              The final concept balances speed with trust signals so people can act quickly without
              second-guessing results.
            </p>
          </div>
          <div className="case-study-two-col">
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Stronger trust signals</h3>
              <p>
                Status clarity and recipient confirmation reduced payment anxiety in moderated
                testing, especially for higher-value transfers.
              </p>
            </div>
            <div className="case-study-card">
              <h3 className="case-study-subtitle">Simplified ongoing management</h3>
              <p>
                Recurring payments and transaction grouping reduced time spent searching for
                history, keeping the experience focused and calm.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhonePe;
