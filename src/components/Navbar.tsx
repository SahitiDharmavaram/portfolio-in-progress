import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#work" className="nav-link" onClick={(e) => handleNavClick(e, 'work')}>work</a>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>about</Link>
        <a href="/" className="logo" onClick={handleHomeClick}>SD</a>
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
        <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>work</a>
        <Link to="/about" onClick={() => setMenuOpen(false)}>about</Link>
        <a href="/" onClick={handleHomeClick} className="mobile-logo">SD</a>
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
