
import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import ImpactStats from '@/components/landing/ImpactStats';
import Testimonials from '@/components/landing/Testimonials';

const Index = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <div className="container mx-auto px-4">
        <Features />
        <ImpactStats />
        <Testimonials />
      </div>
    </div>
  );
};

export default Index;
