import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#work" className="nav-link">work</a>
        <a href="#about" className="nav-link">about</a>
        <a href="#home" className="logo">SD</a>
        <a
          href="https://drive.google.com/file/d/1HdYuzyp9Fb16jnFY_OF8euXo15Ad7jec/view"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          resume
        </a>
        <a href="mailto:sd3976@columbia.edu" className="nav-link">contact</a>

        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#work" onClick={() => setMenuOpen(false)}>work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>about</a>
        <a href="#home" onClick={() => setMenuOpen(false)} className="mobile-logo">SD</a>
        <a
          href="https://drive.google.com/file/d/1HdYuzyp9Fb16jnFY_OF8euXo15Ad7jec/view"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          resume
        </a>
        <a href="mailto:sd3976@columbia.edu" onClick={() => setMenuOpen(false)}>contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
