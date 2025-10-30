import React from 'react';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import TrendingAuctions from '../components/TrendingAuctions/TrendingAuctions';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import SellersSpotlight from '../components/SellersSpotlight/SellersSpotlight';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Categories />
      <TrendingAuctions />
      <HowItWorks />
      <SellersSpotlight />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;