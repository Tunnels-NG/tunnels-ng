
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-tunnels-black">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 hero-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About TunnelsNG</h1>
              <p className="text-xl text-gray-300">
                A Lagos-based, innovation-driven technology company with a global outlook.
              </p>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#0F0F0F" preserveAspectRatio="none" className="w-full h-auto">
              <path d="M0,0 C240,95 480,95 720,55 C960,15 1200,35 1440,70 L1440,100 L0,100 Z"></path>
            </svg>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-tunnels-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-tunnels-darkgray p-6 rounded-lg border border-tunnels-gray/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    To streamline business operations, empower emerging businesses, and deliver technology solutions that drive long-term growth and impact.
                  </p>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    To be the most trusted global technology partner—enabling innovation, automation, and digital transformation at scale.
                  </p>
                  
                  <Button asChild className="mt-4 bg-tunnels-red hover:bg-tunnels-red/80 text-white">
                    <Link to="/services">
                      Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-tunnels-gray/10 rounded-lg overflow-hidden border border-tunnels-gray/20 flex items-center justify-center">
                  <div className="p-12 md:p-16 text-center">
                    <img 
                      src="/lovable-uploads/59fdfd70-be89-4e91-83b2-37e14d512a53.png" 
                      alt="TunnelsNG Logo" 
                      className="max-w-full max-h-48 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-tunnels-black to-tunnels-darkgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Our <span className="text-tunnels-green">Values</span>
              </h2>
              <p className="text-gray-300 text-lg">
                The principles that guide our work and partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="bg-tunnels-gray/10 backdrop-blur-sm rounded-lg p-6 border border-tunnels-gray/20 card-hover"
                >
                  <div className="w-12 h-12 bg-tunnels-green/10 rounded-md flex items-center justify-center mb-4">
                    <span className="text-tunnels-green text-2xl" dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-tunnels-darkgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Our <span className="text-tunnels-red">Team</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Meet the experts behind TunnelsNG.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-tunnels-gray/10 backdrop-blur-sm rounded-lg overflow-hidden border border-tunnels-gray/20 card-hover">
                  <div className="aspect-square bg-tunnels-gray/30 flex items-center justify-center">
                    {/* Placeholder for team member photo */}
                    <div className="w-24 h-24 rounded-full bg-tunnels-red/20 flex items-center justify-center">
                      <span className="text-tunnels-red text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-tunnels-red mb-3">{member.position}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to solve complex business challenges.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  },
  {
    title: 'Excellence',
    description: 'We deliver high-quality solutions and commit to exceeding expectations in everything we do.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>'
  },
  {
    title: 'Partnership',
    description: 'We build long-term relationships based on trust, transparency, and mutual growth.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    title: 'Impact',
    description: 'We measure success by the transformative impact our solutions create for businesses and communities.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>'
  }
];

const team = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    bio: 'Tech visionary with 15+ years of experience in software development and digital transformation.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Engineering',
    bio: 'Expert in cloud architecture and scalable systems with a passion for building high-performance teams.'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Strategy Officer',
    bio: 'Former startup founder with extensive experience in product strategy and market positioning.'
  }
];

export default About;
