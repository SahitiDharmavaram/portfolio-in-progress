import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './About.css';

const About: React.FC = () => {
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
      <div className="about-page">
        <Link to="/" className="back-to-home" style={{ marginTop: '20px' }}>
          Back to home
        </Link>

        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1 className="about-name"><span className="pink-accent">S</span>ahiti <span className="pink-accent">D</span>harmavaram</h1>
              <p className="about-alias">(I also go by Sadie)</p>

              <div className="about-intro">
                <p className="intro-main">
                  I'm an <span className="highlight">MSCS student at Columbia University</span> on the
                  Vision, Graphics, Robotics, and Interaction track.
                </p>
                <p className="intro-research">
                  I'm also an <span className="highlight">HCI Researcher @ Columbia</span> exploring
                  how humans and AI coexist in healthcare and wellness.
                </p>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="blob-image">
                <img src={process.env.PUBLIC_URL + "/profile_pic_notif.jpg"} alt="Sahiti Dharmavaram" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Quote */}
        <section className="quote-section">
          <p className="quote-intro">One of my favorite views on design</p>
          <blockquote className="design-quote">
            <span className="quote-mark">"</span>
            <p>Design is not just what it looks like and feels like. Design is how it works.</p>
            <cite>— Steve Jobs</cite>
          </blockquote>
        </section>

        {/* Research Section */}
        <section className="about-section research-section">
          <div className="section-header">
            <span className="section-label">Research</span>
            <h2>Making AI Human-Centered</h2>
          </div>

          <div className="research-content">
            <p className="research-intro">
              My work, published at <span className="highlight-accent">CHI 2026</span>, focuses on making
              AI more adaptive and human-centered.
            </p>

            <div className="publications-grid">
              <a
                href="https://drive.google.com/file/d/1wsPhUN5jJABptszdV3AHGPD5Mhf-l38e/view"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-card publication-link"
              >
                <div className="pub-venue">CHI '26</div>
                <h4><strong>More than Decision Support: Exploring Patients' Longitudinal Usage of Large Language Models in Real-World Healthcare Settings</strong></h4>
                <p>Investigating the evolution of trust in AI-assisted healthcare decision making.</p>
              </a>
              <a
                href="https://drive.google.com/file/d/1iS8zby-Ngb-54jYkbXm1hEoCxtyklB7c/view"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-card publication-link"
              >
                <div className="pub-venue">CHI '26</div>
                <h4><strong>MindfulAgents: Personalizing Mindfulness Meditation via an Expert-Aligned Multi-Agent System</strong></h4>
                <p>Developing adaptive wellness systems for personalized meditation experiences.</p>
              </a>
            </div>

          </div>
        </section>

        {/* Lab Section */}
        <section className="about-section lab-section">
          <div className="lab-content">
            <div className="lab-text">
              <span className="section-label">The Lab</span>
              <h2>SEA Lab @ Columbia</h2>
              <p>
                I'm conducting HCI Research at the SEA Lab under Professor <strong>Xuhai "Orson" Xu</strong>,
                an assistant professor at Columbia University's Department of Biomedical Informatics and
                a visiting faculty researcher at Google.
              </p>
            </div>
            <div className="lab-image">
              <img src={process.env.PUBLIC_URL + "/about/lab.png"} alt="SEA Lab at Columbia" />
            </div>
          </div>
        </section>

        {/* Dance & Arts Section */}
        <section className="about-section arts-section">
          <div className="arts-grid">
            <div className="arts-image">
              <img src={process.env.PUBLIC_URL + "/about/dance.png"} alt="Bharatanatyam Dance" />
            </div>
            <div className="arts-text">
              <span className="section-label">Beyond the Screen</span>
              <h2>Dance & Movement</h2>
              <p>
                I'm a professional <strong>Bharatanatyam</strong> dancer with over <span className="highlight">14 years</span> of training.
                Dance has taught me discipline, expression, and the art of storytelling through movement.
              </p>
            </div>
          </div>
        </section>

        {/* Poetry Section */}
        <section className="about-section poetry-section">
          <div className="section-header centered">
            <span className="section-label">Words</span>
            <h2>Poetry</h2>
          </div>

          <div className="poems-grid">
            <div className="poem-card">
              <h4 className="poem-title">On the Media</h4>
              <div className="poem-content">
                <p>
                  <em>Opinions, as facts in disguise,<br />
                  Spitting biased true lies,<br />
                  Displaying the vast elysian skies,<br />
                  Showing graceful garish cries,<br />
                  With the naive minds' snubbed tries,<br />
                  Along with its inescapable perennial size.</em>
                </p>
                <p>
                  <em>Establishing a measurable price<br />
                  for all of life's little joys..<br />
                  Yes, we watch to scrutinize,<br />
                  We watch, because they televise,<br />
                  We hear, just what it amplifies..</em>
                </p>
                <p>
                  <em>The media— now our eyes,<br />
                  Can diminish, minimize<br />
                  And glorify unworldly highs<br />
                  Everything but.. real art.<br />
                  For it never dies.</em>
                </p>
              </div>
              <span className="poem-author">— sahiti</span>
            </div>

            <div className="poem-card">
              <h4 className="poem-title">On Individuality</h4>
              <div className="poem-content">
                <p>
                  <em>How can it be black or white?<br />
                  When it is neither wrong nor right..<br />
                  Where did the shades in between go?<br />
                  Did people just sink that low?<br />
                  ..when did they all get that hollow?</em>
                </p>
                <p>
                  <em>When will people want to realize,<br />
                  Everyone's a grey with a special price,<br />
                  Your grey is different from mine,<br />
                  But both of ours' are just as fine.</em>
                </p>
              </div>
              <span className="poem-author">— sahiti</span>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="about-section interests-section">
          <div className="section-header centered">
            <span className="section-label">Life Outside Work</span>
            <h2>Things I Love</h2>
          </div>

          <div className="interests-grid">
            <div className="interest-card activities">
              <div className="interest-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b86273" strokeWidth="1.5">
                  <path d="M13 4h3a2 2 0 012 2v14"/>
                  <path d="M2 20h3"/>
                  <path d="M13 20h9"/>
                  <path d="M10 12V8.5a2.5 2.5 0 00-5 0V12"/>
                  <path d="M7 12h3"/>
                  <path d="M7 12v8"/>
                  <path d="M10 12v8"/>
                  <circle cx="18" cy="4" r="2"/>
                </svg>
              </div>
              <h4>Activities</h4>
              <p>Badminton, baseball, and recently I've been loving rock climbing!</p>
            </div>

            <div className="interest-card movies">
              <div className="interest-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b86273" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                  <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>
                </svg>
              </div>
              <h4>Movies</h4>
              <p>Big fan of comedy and thriller — the first Knives Out and Run are my current favorites!</p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer variant="pink" />
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        style={{ bottom: `${bottomOffset}px` }}
      >
        <span className="back-to-top-arrow">↑</span>
        <span className="back-to-top-text">Back to the top</span>
      </button>
    </>
  );
};

export default About;
