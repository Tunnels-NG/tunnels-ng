import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Award, Rocket, Mail, Phone, MessageSquare, Send, Star, Zap, Shield, Target, Globe, Users, Code, Layers, ChevronDown, Play, X } from 'lucide-react';

// Enhanced Hero Section with Real Photos
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
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {/* Primary background image */}
        <div className="absolute inset-0">
          {/* <img 
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Black professionals collaborating"
            className="w-full h-full object-cover opacity-25"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90"></div>
        </div>
        
        {/* Secondary floating images */}
        {/* <div className="absolute top-20 right-20 w-64 h-64 rounded-xl overflow-hidden opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Black developer working"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-xl overflow-hidden opacity-15">
          <img 
            src="/assets/market.jpg"
            alt="African tech team"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
      
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
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-8 animate-fade-in border border-white/20">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 100+ companies worldwide
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="animate-slide-up">Build, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Scale,
              </span>
              <span className="block animate-slide-up" style={{animationDelay: '0.4s'}}>Dominate.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              We don't just build software, we architect digital empires. 
              Partner with us to transform your vision into market-dominating reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="group flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Our Approach
              </button>
            </div>
          </div>
          
          {/* Hero Image Section */}
          <div className="relative animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="relative">
              {/* Main hero image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Black developer working on laptop"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating secondary images */}
              {/* <div className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="African tech professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Black woman in tech"
                  className="w-full h-full object-cover"
                />
              </div> */}
              
              {/* Floating achievement badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl animate-pulse">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-800">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
          {[
            { label: 'Projects Delivered', value: '500+' },
            { label: 'Happy Clients', value: '100+' },
            { label: 'Years of Experience', value: '15+' },
            { label: 'Countries Served', value: '15+' }
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Approach Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 my-8">
              <button 
                onClick={() => setShowVideo(false)}
                className="sticky top-0 float-right w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 transition-colors -mr-2 -mt-2 mb-4"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="text-center mb-6 sm:mb-8 clear-both">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Approach</h3>
                <p className="text-gray-300 text-base sm:text-lg px-2">How we transform ideas into market-dominating products</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "Deep dive into your vision, market, and technical requirements",
                    icon: <Target className="w-8 h-8" />,
                    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    step: "02", 
                    title: "Rapid Development",
                    description: "Agile development with weekly demos and continuous feedback",
                    icon: <Rocket className="w-8 h-8" />,
                    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    step: "03",
                    title: "Launch & Scale",
                    description: "Market launch support and scalable infrastructure from day one",
                    icon: <Zap className="w-8 h-8" />,
                    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="relative mb-4">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-28 sm:h-32 object-cover rounded-lg opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
                      <div className="absolute top-2 left-2 text-red-500 font-bold text-lg sm:text-xl">{item.step}</div>
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Let's Start Building
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
      
      <style>{`
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;