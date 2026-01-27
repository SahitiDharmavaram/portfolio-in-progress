import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If navigating to home with a scrollTo state, scroll to that section
    if (pathname === '/' && state && (state as { scrollTo?: string }).scrollTo) {
      const section = (state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
