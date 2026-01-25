import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Quotes from '../components/Quotes';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Quotes />
      <Footer />
    </>
  );
};

export default Home;
