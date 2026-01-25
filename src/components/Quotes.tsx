import React from 'react';
import './Quotes.css';

const Quotes: React.FC = () => {
  return (
    <section className="quotes">
      <div className="quotes-container">
        <blockquote className="quote-text">
          "Writing is its own reward"
        </blockquote>
        <p className="quote-author">— Henry Miller</p>
        <p className="quote-description">
          feel free to explore my blogs where I share insights, experiences and reflections
        </p>
        <a 
          href="https://medium.com/@sahitid8/dancing-with-technology-my-journey-from-bharatanatyam-to-human-computer-interaction-a767478bfbcb"
          target="_blank"
          rel="noopener noreferrer"
          className="quote-btn"
        >
          <span>click here to see how my design journey began</span>
        </a>
      </div>
    </section>
  );
};

export default Quotes;
