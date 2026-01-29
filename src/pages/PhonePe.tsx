import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CaseStudy.css';
import './PhonePe.css';

const PhonePe: React.FC = () => {
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
      <div className="case-study-page phonepe-page">
        <Link to="/" className="back-to-home">
          back
        </Link>

        {/* Case Study Header */}
        <header className="case-study-header">
          <h1 className="case-study-title" style={{ color: '#6739B7' }}>
            Remaking India's Largest Online Payments Platform
          </h1>

          {/* Skills Section */}
          <div className="case-study-roles">
            <span className="role-tag">UX Research</span>
            <span className="role-tag">UI Design</span>
            <span className="role-tag">Product Strategy</span>
            <span className="role-tag">Prototyping</span>
            <span className="role-tag">User Testing</span>
          </div>

          {/* Timeline Section */}
          <div className="case-study-timeline-section">
            <h3 className="timeline-label">Timeline</h3>
            <p className="timeline-value">Feb 2024 - Sep 2024</p>
          </div>

          {/* Tagline */}
          <p className="case-study-tagline">
            Take control of your finances with features that simplify organization and management.
          </p>

          {/* Hero Image */}
          <div className="case-study-hero-image">
            <img src={process.env.PUBLIC_URL + "/phonepe/intro_pic.png"} alt="PhonePe UPI Redesign" />
          </div>
        </header>

        {/* Bold Statistic Callout */}
        <div className="stat-callout">
          <p className="stat-text">
            In early 2024, India saw <span className="highlight-purple">76.04 billion</span> mobile transactions, a <span className="highlight-purple">46% rise</span> from 2023.
          </p>
          <p className="stat-source">Source: WorldBank.com</p>
        </div>

        {/* Context Section */}
        <section className="content-section context-section">
          <h2 className="section-heading">Context</h2>

          <div className="context-image-container">
            <img src={process.env.PUBLIC_URL + "/phonepe/context and problem visually.png"} alt="Context and Problem" />
          </div>

          <p className="context-text">
            UPI (Unified Payments Interface) is an integral part of India's financial system, revolutionizing how millions of people make daily transactions. It has become the backbone of digital payments across the country.
          </p>

          <div className="case-study-image" style={{ marginBottom: '32px' }}>
            <img src={process.env.PUBLIC_URL + "/phonepe-profile-pic.png"} alt="PhonePe" />
          </div>

          <p className="context-text">
            We chose <strong>PhonePe</strong>, a UPI-based application that allows users to make payments via BHIM UPI, recharge mobile phones, pay utility bills, and complete instant transactions across both online and offline merchants.
          </p>

          <div className="insight-callout">
            <p>
              <strong>Overspending isn't the problem — it's the <span className="circled-word">consequence</span>.</strong><br /><br />
              The real issue lies in gaps in financial literacy, organization, and money management. That is exactly what this project aims to solve.
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="content-section">
          <h2 className="section-heading">What I Did</h2>

          <div className="project-overview-infographic">
            <div className="overview-icons">
              <div className="icon-stat">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6739B7" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                </div>
                <div className="stat-value">276</div>
                <div className="stat-label">Surveys<br />Collected</div>
              </div>
              <div className="icon-stat">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6739B7" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <div className="stat-value">20</div>
                <div className="stat-label">User<br />Interviews</div>
              </div>
            </div>
            <div className="overview-text">
              I designed and tested a <strong>high-fidelity prototype</strong> to improve UPI applications, incorporating feedback from <span className="highlight-purple">276 surveys</span> and <span className="highlight-purple">20 interviews</span> to create a smarter, user-focused experience that empowers better financial decision-making.
            </div>
          </div>
        </section>

        {/* Quantifying User Experience */}
        <section className="content-section">
          <h2 className="section-heading">Quantifying User Experience</h2>

          <div className="ux-metrics-grid">
            <div className="ux-metric">
              <div className="metric-percentage">63%</div>
              <div className="metric-text">Appreciated feature-based spending insights</div>
            </div>
            <div className="ux-metric">
              <div className="metric-percentage">57%</div>
              <div className="metric-text">Preferred sending savings directly ahead of spending</div>
            </div>
            <div className="ux-metric">
              <div className="metric-percentage">58%</div>
              <div className="metric-text">Felt color-coding was key to understanding finances</div>
            </div>
            <div className="ux-metric">
              <div className="metric-percentage">15%</div>
              <div className="metric-text">Found category-based insights most helpful</div>
            </div>
            <div className="ux-metric">
              <div className="metric-percentage">76%</div>
              <div className="metric-text">Said budget-limit notification pop-ups were effective</div>
            </div>
            <div className="ux-metric">
              <div className="metric-percentage">46%</div>
              <div className="metric-text">Believed UPI affects their spending behavior</div>
            </div>
          </div>
        </section>

        {/* Research Findings */}
        <section className="content-section">
          <h2 className="section-heading">Research Findings</h2>

          <div className="research-questions-grid">
            <div className="research-question-card">
              <h4>How much do users spend on UPI?</h4>
              <p>Digital payments often lead to impulsive spending and post-spending regret due to their intangible nature.</p>
            </div>
            <div className="research-question-card">
              <h4>How convenient is UPI?</h4>
              <p>UPI's secure, cashless, and frictionless experience makes it a top choice for everyday transactions.</p>
            </div>
            <div className="research-question-card">
              <h4>Does UPI cater to every demographic?</h4>
              <p><span className="highlight-purple">88%</span> of users across age groups prefer UPI over cash to avoid redundancy and data loss.</p>
              <ul>
                <li>Routine payments</li>
                <li>Business transactions</li>
                <li>Casual expenses</li>
                <li>Large purchases</li>
              </ul>
            </div>
          </div>

          {/* Key Stats */}
          <div className="key-stats-row">
            <div className="key-stat">
              <div className="stat-number">74.0%</div>
              <div className="stat-desc">Overspent on UPI during COVID-19 lockdown</div>
            </div>
            <div className="key-stat">
              <div className="stat-number">59.8%</div>
              <div className="stat-desc">Admitted impulsive UPI spending</div>
            </div>
            <div className="key-stat">
              <div className="stat-number">95.4%</div>
              <div className="stat-desc">Praised UPI's speed and efficiency</div>
            </div>
            <div className="key-stat">
              <div className="stat-number">95.5%</div>
              <div className="stat-desc">Reported high satisfaction with UPI services</div>
            </div>
          </div>

          {/* What Users Want to Solve - Clean Research Insight */}
          <div className="user-wants-section">
            <h3 className="user-wants-title">What do users want to solve about spending caused by UPI?</h3>
            <div className="user-wants-list">
              <div className="user-want-item">
                <span className="want-number">01</span>
                <div className="want-content">
                  <h4>Expense Tracking</h4>
                  <p>Users need clear spending analysis features to understand where their money goes.</p>
                </div>
              </div>
              <div className="user-want-item">
                <span className="want-number">02</span>
                <div className="want-content">
                  <h4>Budgeting Tools</h4>
                  <p>Integrated budget management that improves financial satisfaction and control.</p>
                </div>
              </div>
              <div className="user-want-item">
                <span className="want-number">03</span>
                <div className="want-content">
                  <h4>Financial Awareness</h4>
                  <p>Enhanced literacy and awareness features built directly within UPI applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Might We */}
        <section className="hmw-section phonepe-hmw">
          <div className="hmw-label">How Might We</div>
          <p className="hmw-question">
            How might we improve financial literacy, awareness, and organization for UPI users to encourage responsible spending?
          </p>
        </section>

        {/* Addressing the Challenge - Video Section */}
        <section className="content-section video-section">
          <h2 className="section-heading">Addressing the Challenge: A Walkthrough of the Redesigned UPI Experience</h2>

          <div className="video-thumbnail-container">
            <a href="https://www.youtube.com/watch?v=QwhYtgFfZQI&t=37s" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/QwhYtgFfZQI/maxresdefault.jpg"
                alt="Video Walkthrough Thumbnail"
                className="video-thumbnail"
              />
              <div className="play-button">
                <span>▶</span>
              </div>
            </a>
          </div>
        </section>

        {/* Prototype Section */}
        <section className="prototype-section">
          <h2 className="section-heading">Try the Prototype</h2>
          <p className="prototype-description">Experience the redesigned UPI interface and explore the new financial management features.</p>
          <div className="prototype-container">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfMIdUhq2iHmF1qG6k22odI%2FUPI_v2%3Fpage-id%3D0%253A1%26node-id%3D393-3%26starting-point-node-id%3D393%253A3%26scaling%3Dscale-down%26content-scaling%3Dfixed"
              allowFullScreen
              title="PhonePe Prototype"
            />
          </div>
          <a
            href="https://www.figma.com/proto/fMIdUhq2iHmF1qG6k22odI/UPI_v2?content-scaling=fixed&kind=proto&node-id=393-3&page-id=0%3A1&scaling=scale-down&starting-point-node-id=393%3A3"
            className="prototype-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Full Prototype
          </a>
        </section>

        {/* Behind the Solution */}
        <section className="content-section research-process">
          <h2 className="section-heading">Behind the Solution: Research Process</h2>

          <div className="phase-container">
            <div className="phase-box">
              <div className="phase-title">
                <span>1</span>
                Phase 1: Discovery
              </div>
              <div className="phase-steps">
                <div className="phase-step">Preparing survey and interview questionnaires</div>
                <div className="phase-step">Data collection (surveys + interviews)</div>
                <div className="phase-step">Data analysis + competitive analysis</div>
              </div>
            </div>

            <div className="phase-box">
              <div className="phase-title">
                <span>2</span>
                Phase 2: Design & Iteration
              </div>
              <div className="phase-steps">
                <div className="phase-step">Prototype development (Version 1)</div>
                <div className="phase-step">Usability testing</div>
                <div className="phase-step">Refinement → Version 2</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="content-section competitor-section">
          <h2 className="section-heading">Competitor Analysis</h2>

          <div className="case-study-image">
            <img src={process.env.PUBLIC_URL + "/phonepe/Frame 72.png"} alt="Competitor Analysis" />
          </div>

          <div className="competitor-legend">
            <div className="legend-item">
              <div className="circle"></div>
              <span>Circled items → Omitted</span>
            </div>
            <div className="legend-item">
              <div className="underline-orange"></div>
              <span>Underlined items → Prioritized</span>
            </div>
          </div>

          <div className="competitor-insights">
            <div className="insight-card">
              <h4>What We Omitted</h4>
              <ul>
                <li>Complex onboarding and persistent ads (FinArt)</li>
                <li>Auto-disconnecting accounts and fixed login currency (W)</li>
                <li>Manual data imports and multi-account friction (Monefi)</li>
              </ul>
            </div>
            <div className="insight-card">
              <h4>What We Included & Prioritized</h4>
              <ul>
                <li>Simplified, actionable spending insights (Spendee)</li>
                <li>Extensive analytics focused on personal finance (Money Manager)</li>
                <li>Personal UPI usage over business-centric tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Insights with Charts */}
        <section className="content-section">
          <h2 className="section-heading">Research Insights</h2>

          <div className="charts-grid">
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 216deg, #e0e0e0 216deg)` }}>
                <span>60%</span>
              </div>
              <p className="chart-label">Yes (60%) | No (19%) | Not Sure (21%)</p>
            </div>
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 292deg, #e0e0e0 292deg)` }}>
                <span>81.1%</span>
              </div>
              <p className="chart-label">Use UPI daily</p>
            </div>
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 250deg, #e0e0e0 250deg)` }}>
                <span>69.5%</span>
              </div>
              <p className="chart-label">Say it's financially convenient</p>
            </div>
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 212deg, #e0e0e0 212deg)` }}>
                <span>59%</span>
              </div>
              <p className="chart-label">Say it leads to overspending</p>
            </div>
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 136deg, #e0e0e0 136deg)` }}>
                <span>37.7%</span>
              </div>
              <p className="chart-label">Track expenses but struggle to save</p>
            </div>
            <div className="chart-card">
              <div className="chart-visual" style={{ background: `conic-gradient(#6739B7 0deg 167deg, #e0e0e0 167deg)` }}>
                <span>46.3%</span>
              </div>
              <p className="chart-label">Believe UPI affects spending behavior</p>
            </div>
          </div>
        </section>

        {/* User Quotes */}
        <section className="content-section quotes-section">
          <h2 className="section-heading">What Users Said</h2>

          <div className="quotes-grid">
            <div className="quote-card">
              <p>"With UPI, spending feels intangible—it's just a number on a screen, unlike cash."</p>
            </div>
            <div className="quote-card">
              <p>"I'd love spending limits by category with insights like pie charts."</p>
            </div>
            <div className="quote-card">
              <p>"As a doctor, an automated list of paid patients would save me time."</p>
            </div>
            <div className="quote-card">
              <p>"A UPI app that guides financial stability would be a game-changer."</p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="content-section methodology-section">
          <h2 className="section-heading">Methodology</h2>

          <div className="case-study-image" style={{ marginBottom: '32px' }}>
            <img src={process.env.PUBLIC_URL + "/phonepe/workflow.png"} alt="Methodology Workflow" />
          </div>
        </section>

        {/* Thematic Analysis Section */}
        <section className="content-section thematic-section">
          <h2 className="section-heading">Why do we conduct thematic analysis? How does it help?</h2>

          <div className="case-study-image" style={{ marginBottom: '32px' }}>
            <img src={process.env.PUBLIC_URL + "/phonepe/thematic.png"} alt="Thematic Analysis" />
          </div>

          <div className="two-column-layout">
            <div className="column-text">
              <p>
                Understanding why we conduct thematic analysis was a new learning that I found intriguing and something I would want to incorporate in my future projects too.
              </p>
              <p>
                Thematic analysis shows that rewards motivate saving, UPI tools help control spending, and percentage-based graphs enhance clarity. Streamlined PIN entry improves usability, while minimalistic design and delay timers support the user experience.
              </p>
              <p>
                However, navigation issues and limited impact of financial education pop-ups highlight the need to align features with real user needs.
              </p>
            </div>
            <div className="column-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/thematic_analysis.png"} alt="Thematic Analysis Details" />
              <p className="image-caption">Thematic analysis analysing themes and descriptions along with quotation with person ID (assigned at the time of recruitment)</p>
            </div>
          </div>
        </section>

        {/* Social Sharing Section */}
        <section className="content-section social-section">
          <div className="two-column-layout reverse">
            <div className="column-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/linkedin.png"} alt="LinkedIn Post" />
            </div>
            <div className="column-text">
              <p>
                We shared the video on Reddit, LinkedIn, and other platforms to gather insights for usability studies and refine our design. The video featured a complete prototype walkthrough. Users filled out a Google Form, and we conducted 20 in-depth, 30-minute moderated interviews for additional insights.
              </p>
            </div>
          </div>
        </section>

        {/* Final Screens Section */}
        <section className="content-section final-screens-section">
          <h2 className="section-heading">Final Screens</h2>

          <p className="section-intro">
            These are the 5 main screens that were shown earlier. The existing PhonePe page, Version 1 and Version 2.
          </p>
          <p className="section-intro">
            Version 1 was the first design iteration to the main PhonePe app and Version 2 (Final version) was the iteration after the usability studies.
          </p>

          <div className="screen-showcase">
            <div className="case-study-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/aa.png"} alt="Main Screens Comparison" />
            </div>
          </div>

          <div className="screen-item">
            <p className="screen-description">
              The information icon, in Version 2, upon clicking shows the budget limitations for each of the categories.
            </p>
            <div className="case-study-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/ab.png"} alt="Budget Limitations Feature" />
            </div>
          </div>

          <div className="screen-item">
            <p className="screen-description">
              Version 2 also has a graph incorporated which shows spending patterns over a month or even a day.
            </p>
            <div className="case-study-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/ac.png"} alt="Spending Patterns Graph" />
            </div>
          </div>

          <div className="screen-item">
            <p className="screen-description">
              An edit category button was included in Version 2 to change the payment category after the payment.
            </p>
            <div className="case-study-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/ad.png"} alt="Edit Category Feature" />
            </div>
          </div>

          <div className="screen-item">
            <p className="screen-description">
              An extra miscellaneous expenditure category was created in Version 2 for any payments that don't fall into the major categories of that particular user.
            </p>
            <p className="screen-description">
              Budget limitation pop-ups appear when the budget is exceeded. But for Version 2, I made it possible to opt out of the limit restrictions.
            </p>
            <div className="case-study-image">
              <img src={process.env.PUBLIC_URL + "/phonepe/ae.png"} alt="Miscellaneous Category and Budget Pop-ups" />
            </div>
          </div>
        </section>

        {/* Other Features Section */}
        <section className="content-section other-features-section">
          <h2 className="section-heading">Features users liked in version 1 that remained unchanged in version 2</h2>

          <div className="feature-item">
            <p className="feature-description">
              This frame displays the total amount in the bank account and the potential amount after the transaction that is about to be made.
            </p>
            <div className="case-study-image feature-image-80">
              <img src={process.env.PUBLIC_URL + "/phonepe/ba.png"} alt="Bank Amount Display" />
            </div>
          </div>

          <div className="feature-item">
            <p className="feature-description">
              This is a delay feature that lets users think twice about a payment. All such features can be opted out of based on user convenience.
            </p>
            <div className="case-study-image feature-image-85">
              <img src={process.env.PUBLIC_URL + "/phonepe/bb.png"} alt="Delay Feature" />
            </div>
          </div>

          <div className="feature-item">
            <p className="feature-description">
              The streak feature shows how many consecutive days the user has been spending under the budget limit.
            </p>
            <div className="case-study-image feature-image-85">
              <img src={process.env.PUBLIC_URL + "/phonepe/bc.png"} alt="Streak Feature" />
            </div>
          </div>

          <div className="feature-item">
            <p className="feature-description">
              As financial literacy is a major space we targeted, we made this page which is a fact that can help people while the screen is loading. If a user wants to read more, they can click on the information icon.
            </p>
            <div className="case-study-image feature-image-80">
              <img src={process.env.PUBLIC_URL + "/phonepe/bd.png"} alt="Financial Literacy Feature" />
            </div>
          </div>
        </section>

        {/* Closing Insights Section */}
        <section className="content-section closing-insights-section">
          <div className="closing-insights-grid">
            <div className="closing-insight-card">
              <div className="closing-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6739B7" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h4>Financial Literacy Focus</h4>
              <p>We designed informative screens that educate users with financial facts while loading, with an option to learn more via the information icon.</p>
            </div>
            <div className="closing-insight-card">
              <div className="closing-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6739B7" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h4>Key Research Finding</h4>
              <p>Users report increased spending due to UPI's intangible nature, yet express high satisfaction with its convenience.</p>
            </div>
            <div className="closing-insight-card">
              <div className="closing-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6739B7" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4>Actionable Impact</h4>
              <p>Our research offers recommendations for UPI developers to enhance engagement and support responsible financial management.</p>
            </div>
          </div>
        </section>

        {/* Appendix Section */}
        <section className="content-section appendix-section">
          <h2 className="section-heading">Appendix</h2>

          <div className="appendix-links">
            <p>
              The Version 1 (V1) of the prototype can be found at{' '}
              <a
                href="https://www.figma.com/proto/8rTQ9KxtXpErWL8aSJBk5q/My_work?node-id=1083-455&node-type=canvas&t=nFAmuyb2q1qz1KdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1083%3A455"
                target="_blank"
                rel="noopener noreferrer"
                className="appendix-link"
              >
                this link
              </a>.
            </p>

            <p>
              The Version 2 (V2) of the prototype can be viewed at{' '}
              <a
                href="https://www.figma.com/proto/fMIdUhq2iHmF1qG6k22odI/UPI_v2?t=mW2kSkQ6H5UcaQGY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=393-3&starting-point-node-id=393%3A3"
                target="_blank"
                rel="noopener noreferrer"
                className="appendix-link"
              >
                this link
              </a>.
            </p>

            <p>
              Our feedback form for the UX Research phase:{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeG1gE9w86QAhgte4zMNIPrXAS5kx2NfF2v8kzSVf4-m40zVA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="appendix-link"
              >
                https://forms.gle/jroDaAjdXLJ45hh47
              </a>
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer variant="purple" />
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
            background: 'linear-gradient(135deg, rgba(103, 57, 183, 0.2) 0%, rgba(103, 57, 183, 0.1) 100%)',
            color: '#6739B7'
          }}
        >↑</span>
        <span className="back-to-top-text">back to the top</span>
      </button>
    </>
  );
};

export default PhonePe;
