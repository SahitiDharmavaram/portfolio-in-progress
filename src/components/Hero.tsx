import { useState, useEffect } from 'react';
import './Hero.css';

const phrases = [
  { text: 'translate research into insights', color: '#7a9a6d' },
  { text: 'create human-centered products', color: '#A479BA' },
  { text: 'build inclusive systems', color: '#c4956a' },
  { text: 'connect data to everyday decisions', color: '#6A88C0' }
];

// Module-level variable that persists across React Router navigations
// but resets on full page reload (because the module re-executes)
let hasShownGreetingThisPageLoad = false;

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // GREETING NOTIFICATION LOGIC:
  // Show on full page load/refresh, NOT on React Router navigation
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationExiting, setNotificationExiting] = useState(false);

  // Check if we should show greeting - runs once when component mounts
  useEffect(() => {
    // If we've already shown the greeting during this page session,
    // don't show it again (user navigated via React Router)
    if (hasShownGreetingThisPageLoad) {
      return;
    }

    // This is a fresh page load (first visit, refresh, or direct URL entry)
    // Show the greeting and mark it as shown
    setNotificationVisible(true);
    hasShownGreetingThisPageLoad = true;
  }, []); // Run only once on mount

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex].text;

    if (isTyping) {
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentPhraseIndex]);

  // Auto-hide notification after 6 seconds (2.06s delay + ~6s visible)
  useEffect(() => {
    if (!notificationVisible) return;

    const timeout = setTimeout(() => {
      setNotificationExiting(true);
      setTimeout(() => setNotificationVisible(false), 400);
    }, 8060);

    return () => clearTimeout(timeout);
  }, [notificationVisible]);

  // Hide notification on scroll to projects
  useEffect(() => {
    if (!notificationVisible) return;

    const handleScroll = () => {
      const workSection = document.getElementById('work');
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setNotificationExiting(true);
          setTimeout(() => setNotificationVisible(false), 400);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [notificationVisible]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {notificationVisible && (
          <a
            href="mailto:sd3976@columbia.edu?subject=Re: It's so nice to meet you!"
            className={`ios-notification ${notificationExiting ? 'exiting' : ''}`}
          >
            <div className="notification-header">
              <span className="notification-app">messages</span>
              <span className="notification-time">now</span>
            </div>
            <div className="notification-body">
              <img
                src="/profile_pic_notif.jpg"
                alt="Sahiti"
                className="notification-icon-img"
              />
              <div className="notification-content">
                <div className="notification-title">Sahiti Dharmavaram</div>
                <div className="notification-message">It's so nice to meet you!</div>
              </div>
            </div>
          </a>
        )}
        <div className="typing-container">
          <span className="static-text">I design to </span>
          <span
            className="dynamic-text"
            style={{ color: phrases[currentPhraseIndex].color }}
          >
            {displayedText}
            <span className="cursor" style={{ color: phrases[currentPhraseIndex].color }}>|</span>
          </span>
        </div>

        <div className="updates-box">
          <div className="updates-header">
            <span className="updates-label">New</span>
            <h2 className="updates-heading">recent publications</h2>
          </div>
          <div className="updates-content">
            <div className="publication-item">
              <div className="publication-text-wrapper">
                <a
                  href="https://drive.google.com/file/d/1iS8zby-Ngb-54jYkbXm1hEoCxtyklB7c/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-title-link"
                >
                  MindfulAgents: Personalizing Mindfulness Meditation via an Expert-Aligned Multi-Agent System
                </a>
                <a
                  href="https://drive.google.com/file/d/1iS8zby-Ngb-54jYkbXm1hEoCxtyklB7c/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link-text"
                >
                  Link
                </a>
              </div>
              <span className="publication-venue">CHI '26</span>
            </div>
            <div className="publication-item">
              <div className="publication-text-wrapper">
                <a
                  href="https://drive.google.com/file/d/1wsPhUN5jJABptszdV3AHGPD5Mhf-l38e/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-title-link"
                >
                  More than Decision Support: Exploring Patients' Longitudinal Usage of Large Language Models in Real-World Healthcare Settings
                </a>
                <a
                  href="https://drive.google.com/file/d/1wsPhUN5jJABptszdV3AHGPD5Mhf-l38e/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link-text"
                >
                  Link
                </a>
              </div>
              <span className="publication-venue">CHI '26</span>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">view case studies</a>
          <a
            href="https://medium.com/@sahitid8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            my blogs!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
