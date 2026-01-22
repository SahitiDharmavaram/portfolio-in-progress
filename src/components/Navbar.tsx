import { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
