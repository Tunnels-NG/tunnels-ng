
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import WhyUs from '@/components/home/WhyUs';
import Services from '@/components/home/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-tunnels-black">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
