import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check, Award, Rocket, Mail, Phone, MessageSquare, Send, Star, Zap, Shield, Target, Globe, Users, Code, Layers, ChevronDown, Play, X } from 'lucide-react';

// Enhanced Hero Section with Particle Animation
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease'
        }}></div>
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-8 animate-fade-in border border-white/20">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Trusted by 100+ companies worldwide
          </div> */}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="animate-slide-up">Build, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tunnels-red to-pink-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Scale,
            </span>
            <span className="block animate-slide-up" style={{animationDelay: '0.4s'}}>Dominate.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            We don't just build software—we architect digital empires. 
            Partner with us to transform your vision into market-dominating reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <NavLink to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-tunnels-red to-red-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-tunnels-red to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>
            
            <button 
              onClick={() => setShowVideo(true)}
              className="group flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Our Approach
            </button>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
            {[
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Years of Experience', value: '15+' },
              { label: 'Countries Served', value: '15+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Approach Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/20">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-gray-300 text-lg">How we transform ideas into market-dominating products</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "Deep dive into your vision, market, and technical requirements",
                  icon: <Target className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Rapid Development",
                  description: "Agile development with weekly demos and continuous feedback",
                  icon: <Rocket className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Launch & Scale",
                  description: "Market launch support and scalable infrastructure from day one",
                  icon: <Zap className="w-8 h-8" />
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-red-500 font-bold text-2xl mb-2">{item.step}</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-tunnels-red to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowVideo(false)}
                className="px-8 py-3 bg-gradient-to-r from-tunnels-red to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Let's Start Building
              </button>
            </div>
          </div>
        </div>
      )}      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};
export default Hero;
