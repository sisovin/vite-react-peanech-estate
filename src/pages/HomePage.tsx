import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CoreFeatures from '../components/sections/CoreFeatures';
import TechnicalStack from '../components/sections/TechnicalStack';
import PropertiesSection from '../components/sections/PropertiesSection';
import AgentsSection from '../components/sections/AgentsSection';
import MarketingFeatures from '../components/sections/MarketingFeatures';
import PaymentPlans from '../components/sections/PaymentPlans';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CoreFeatures />
      <TechnicalStack />
      <PropertiesSection />
      <AgentsSection />
      <MarketingFeatures />
      <PaymentPlans />
    </>
  );
};

export default HomePage;
