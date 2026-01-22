import { useState, useEffect } from 'react';
import './Hero.css';

const phrases = [
  { text: 'translate research into insights', color: '#7a9a6d' },
  { text: 'build inclusive systems', color: '#c4956a' },
  { text: 'create human-centered products', color: '#8b7355' },
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

  // Auto-hide notification after 6 seconds (1.5s delay + 4.5s visible)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotificationExiting(true);
      setTimeout(() => setNotificationVisible(false), 400);
    }, 7500);

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
          <div className={`ios-notification ${notificationExiting ? 'exiting' : ''}`}>
            <div className="notification-icon">
              <span>SD</span>
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <span className="notification-app">MESSAGES</span>
                <span className="notification-time">now</span>
              </div>
              <div className="notification-title">Sahiti Dharmavaram</div>
              <div className="notification-message">It's so nice to meet you!</div>
            </div>
          </div>
        )}
        <div className="typing-container">
          <span className="static-text">I design to </span>
          <span
            className="dynamic-text"
            style={{ color: phrases[currentPhraseIndex].color }}
          >
            {displayedText}
            <span className="cursor">|</span>
          </span>
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
