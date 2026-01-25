import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Footer />
    </>
  );
};

export default Home;
