import { useState, useEffect } from 'react';
import './Hero.css';

const phrases = [
  { text: 'translate research into insights', color: '#7a9a6d' },
  { text: 'create human-centered products', color: '#8b6b99' },
  { text: 'build inclusive systems', color: '#c4956a' },
  { text: 'connect data to everyday decisions', color: '#6b7b99' }
];

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [notificationExiting, setNotificationExiting] = useState(false);

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
    const timeout = setTimeout(() => {
      setNotificationExiting(true);
      setTimeout(() => setNotificationVisible(false), 400);
    }, 8060);

    return () => clearTimeout(timeout);
  }, []);

  // Hide notification on scroll to projects
  useEffect(() => {
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
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {notificationVisible && (
          <a
            href="mailto:sd3976@columbia.edu?subject=Re: It's so nice to meet you!"
            className={`ios-notification ${notificationExiting ? 'exiting' : ''}`}
          >
            <img
              src="/profile_pic_notif.jpg"
              alt="Sahiti"
              className="notification-icon-img"
            />
            <div className="notification-content">
              <div className="notification-header">
                <span className="notification-app">MESSAGES</span>
                <span className="notification-time">now</span>
              </div>
              <div className="notification-title">Sahiti Dharmavaram</div>
              <div className="notification-message">It's so nice to meet you!</div>
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
              <a 
                href="https://drive.google.com/file/d/1iS8zby-Ngb-54jYkbXm1hEoCxtyklB7c/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-title"
              >
                MindfulAgents: Personalizing Mindfulness Meditation via an Expert-Aligned Multi-Agent System
              </a>
              <span className="publication-venue">CHI '26</span>
            </div>
            <div className="publication-item">
              <a 
                href="https://drive.google.com/file/d/1wsPhUN5jJABptszdV3AHGPD5Mhf-l38e/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-title"
              >
                More than Decision Support: Exploring Patients' Longitudinal Usage of Large Language Models in Real-World Healthcare Settings
              </a>
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
