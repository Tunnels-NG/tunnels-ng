
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Award, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-tunnels-black">
      <Navbar />
      
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 hero-gradient relative overflow-hidden">
          {/* Animated particles for visual interest */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-tunnels-red/50 rounded-full animate-float"></div>
            <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-tunnels-green/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-tunnels-red/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About TunnelsNG</h1>
              <p className="text-xl text-gray-300">
                A Lagos-based, innovation-driven technology company with a global outlook.
              </p>
            </div>
          </div>
          
          {/* Wave Divider - Using light colors for better visibility */}
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
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="bg-tunnels-darkgray p-6 rounded-lg border border-tunnels-gray/20 transform transition-all duration-500 hover:shadow-lg hover:shadow-tunnels-red/10 hover:-translate-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 mb-6">
                    To streamline business operations, empower emerging businesses, and deliver technology solutions that drive long-term growth and impact.
                  </p>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    To be the most trusted global technology partner—enabling innovation, automation, and digital transformation at scale.
                  </p>
                  
                  <Button asChild className="mt-4 bg-tunnels-red hover:bg-tunnels-red/80 text-white group transition-all duration-300 transform hover:translate-x-1">
                    <Link to="/services">
                      Our Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-square bg-tunnels-gray/10 rounded-lg overflow-hidden border border-tunnels-gray/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-tunnels-darkgray/50 to-transparent"></div>
                  <div className="p-12 md:p-16 text-center relative z-10">
                    <img 
                      src="/assets/Tunnels-Logo-White.png" 
                      alt="TunnelsNG Logo" 
                      className="max-w-full max-h-48 mx-auto animate-pulse"
                    />
                  </div>
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-64 h-64 border border-tunnels-red/20 rounded-full animate-spin-slow"></div>
                    <div className="w-80 h-80 border border-tunnels-green/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-tunnels-black to-tunnels-darkgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
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
                  className={`bg-tunnels-gray/10 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 animate-fade-in ${
                    activeValue === index 
                      ? 'border-tunnels-green/50 shadow-lg shadow-tunnels-green/10 transform scale-105' 
                      : 'border-tunnels-gray/20 card-hover'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeValue === index ? 'bg-tunnels-green text-black' : 'bg-tunnels-green/10 text-tunnels-green'
                  }`}>
                    <span className="text-2xl" dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                  
                  {/* Interactive progress indicator */}
                  <div className={`mt-4 h-1 bg-tunnels-gray/20 rounded overflow-hidden transition-opacity duration-300 ${
                    activeValue === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="h-full bg-tunnels-green animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-tunnels-darkgray relative">
          {/* Background geometric elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[10%] w-32 h-32 border border-tunnels-red/10 rounded-lg rotate-12 animate-spin-slow opacity-50"></div>
            <div className="absolute bottom-20 right-[10%] w-48 h-48 border border-tunnels-green/10 rounded-full animate-spin-slow opacity-50" style={{ animationDirection: 'reverse' }}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Our <span className="text-tunnels-red">Team</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Meet the experts behind TunnelsNG.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.name} 
                  className={`bg-tunnels-gray/10 backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-300 animate-fade-in ${
                    activeTeamMember === index 
                      ? 'border-tunnels-red/50 shadow-lg shadow-tunnels-red/10 transform scale-105' 
                      : 'border-tunnels-gray/20 card-hover'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveTeamMember(index)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  <div className="aspect-square bg-tunnels-gray/30 flex items-center justify-center relative overflow-hidden">
                    {/* Team member image with gradient overlay */}
                    <img 
                      src={
                        index === 0 
                          ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                          : index === 1
                            ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                            : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                      }
                      alt={member.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                        activeTeamMember === index ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tunnels-black via-transparent to-transparent"></div>
                    
                    <div className={`absolute bottom-4 left-4 transition-transform duration-300 ${
                      activeTeamMember === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="flex space-x-2">
                        <a href="#" className="w-8 h-8 bg-tunnels-red/20 rounded-full flex items-center justify-center hover:bg-tunnels-red/40 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-tunnels-red/20 rounded-full flex items-center justify-center hover:bg-tunnels-red/40 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-tunnels-red mb-3">{member.position}</p>
                    <p className="text-gray-300">{member.bio}</p>
                    
                    {/* Skill bars that appear on hover */}
                    <div className={`mt-4 space-y-2 transition-opacity duration-300 ${
                      activeTeamMember === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-400">Leadership</span>
                          <span className="text-tunnels-red">90%</span>
                        </div>
                        <div className="h-1 bg-tunnels-gray/20 rounded-full overflow-hidden">
                          <div className="h-full bg-tunnels-red" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-400">Tech Expertise</span>
                          <span className="text-tunnels-red">85%</span>
                        </div>
                        <div className="h-1 bg-tunnels-gray/20 rounded-full overflow-hidden">
                          <div className="h-full bg-tunnels-red" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
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
