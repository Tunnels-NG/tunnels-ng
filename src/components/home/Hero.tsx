
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tunnels-red blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-tunnels-green blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            <span className="block">Empowering Innovation.</span> 
            <span className="block text-tunnels-red">Automating Growth.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We partner with startups and enterprises to build, scale, and thrive using 
            cutting-edge technology solutions—no upfront barriers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-tunnels-red hover:bg-tunnels-red/80 text-white font-medium px-8">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Explore Our Services
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-5xl mt-8 md:mt-16 rounded-lg overflow-hidden border border-tunnels-gray/20 shadow-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="aspect-[16/9] bg-tunnels-black/50 backdrop-blur-sm flex items-center justify-center">
            {/* Placeholder for hero image or video */}
            <div className="p-12 md:p-16 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-tunnels-red/90 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-medium text-white">Watch Our Story</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#0F0F0F" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,0 C240,95 480,95 720,55 C960,15 1200,35 1440,70 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
