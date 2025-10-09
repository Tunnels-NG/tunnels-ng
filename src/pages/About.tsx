import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Award, Rocket, Target, Globe, Users, Code, Layers, ChevronDown, Zap, Shield, TrendingUp, Building, Eye, Heart, Star, Calendar, Clock, MapPin, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex business challenges.',
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Excellence',
      description: 'We deliver high-quality solutions and commit to exceeding expectations in everything we do.',
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual growth.',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Impact',
      description: 'We measure success by the transformative impact our solutions create for businesses and communities.',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, label: "Years of Innovation", value: "4+" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "100+" },
    { icon: <Code className="w-6 h-6" />, label: "Projects Delivered", value: "500+" },
    { icon: <Globe className="w-6 h-6" />, label: "Countries Served", value: "15+" }
  ];

  const partners = [
    { name: 'Jaycolinks', src: '/assets/Jayco.png' },
    { name: 'Ndonu', src: '/assets/Ndonu.png' },
    { name: 'Rendezvouscare', src: '/assets/Rendezvouscare.png' },
    { name: 'Symbi', src: '/assets/symbi.png' },
    { name: 'Taskpadi', src: '/assets/Taskpadi.jpg' },
    { name: 'Listdem', src: '/assets/Listdem.jpg' },
    { name: 'Payrendr', src: '/assets/Payrendr.png' },
    { name: 'AWS', src: '/assets/AWS.png' },
    { name: 'GCP', src: '/assets/GCP.png' },
    { name: 'Azure', src: '/assets/Azure.png' },
    { name: 'Google', src: '/assets/Google.png' },
    { name: 'Oracle', src: '/assets/Oracle.png' },
    { name: 'Jetbrain', src: '/assets/JetBrains.png' },
    { name: 'Okaneats', src: '/assets/OkanEats.png' },
    { name: 'Educential', src: '/assets/Educential.png' },
    { name: 'Fenypay', src: '/assets/Fenypay.jpg' },
    { name: 'Jayrify', src: '/assets/Jayrify.png' },
    { name: 'VTB', src: '/assets/VTB.png' }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(239, 68, 68, 0.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <main>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Background with real team image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="African tech team collaboration"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/85 to-gray-900/90"></div>
          </div>

          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
              transition: 'background-image 0.3s ease'
            }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
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

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Content */}
              <div className="text-center lg:text-left">
                {/* <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
                  <MapPin className="w-4 h-4 mr-2 text-red-500" />
                  Since 2020 
                </div> */}
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block animate-slide-up">We Are</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    TunnelsNG
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in leading-relaxed" style={{animationDelay: '0.4s'}}>
                  An innovation-driven technology company with a global outlook. 
                  We don't just build software, we architect digital empires that transform businesses.
                </p>

                {/* Key highlights */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>Purpose-built for business transformation</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>Serving 15+ countries globally</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Images */}
              <div className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="relative">
                  {/* Main hero image */}
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/assets/team.jpg"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Overlay stats */}
                    {/* <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-white font-bold text-lg">500+ Projects Delivered</div>
                        <div className="text-gray-300 text-sm">Since 2020</div>
                      </div>
                    </div> */}
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </section>

        {/* Our Story Section */}
        <section 
          id="story"
          data-section
          className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Story Content */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-blue-500/20">
                      <Lightbulb className="w-4 h-4 mr-2 text-blue-500" />
                      Our Story
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Results</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                      In 2018, we started TunnelsNG with a simple but powerful belief: <strong className="text-white">every business deserves technology that works for them, not against them.</strong> While others were building generic solutions, we focused on understanding the real problems that keep business owners awake at night.
                    </p>
                    
                    <p>
                      Today, after <strong className="text-white">500+ successful projects across 15+ countries</strong>, we've proven that our approach works. We don't just code, we solve business problems. We don't just deliver, we transform operations. We don't just build, we create digital empires that scale.
                    </p>
                    
                    <p>
                      What sets us apart? <strong className="text-white">We're business owners ourselves.</strong> We understand the pressure of tight budgets, impossible deadlines, and the need for solutions that work the first time. That's why every line of code we write, every system we design, and every automation we implement is built with one question in mind: "How will this make our client's business better?"
                    </p>
                    
                    <p>
                      Our clients don't come to us for ordinary solutions. They come to us when they need <strong className="text-white">extraordinary results.</strong> When their current systems are holding them back. When they need to launch fast without cutting corners. When they need a technology partner who thinks like a business owner, not just a vendor.
                    </p>
                  </div>
                </div>
                
                {/* Visual Content */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Main image */}
                    <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src="/assets/project-hero.jpg"
                        alt="TunnelsNG team collaborating on innovative solutions"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="text-white font-bold text-base mb-1">500+ Projects Delivered</div>
                          <div className="text-gray-300 text-sm">Transforming businesses since 2018</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Secondary images */}
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src="/assets/code.jpg"
                        alt="African developer building solutions"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src="/assets/result..jpg"
                        alt="Global technology solutions"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Quality Guaranteed</h3>
                  <p className="text-gray-300 leading-relaxed">Every solution we deliver goes through rigorous testing and quality assurance. We don't just meet expectations, we exceed them.</p>
                </div>
                
                <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Partnership Approach</h3>
                  <p className="text-gray-300 leading-relaxed">We're not just vendors! We're strategic partners invested in your success. Your growth is our growth.</p>
                </div>
                
                <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
                  <p className="text-gray-300 leading-relaxed">Every project starts with understanding your business goals. We measure our success by your success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section 
          id="mission-vision"
          data-section
          className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('mission-vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Mission & Vision Content */}
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    To streamline business operations, empower emerging businesses, and deliver technology solutions that drive long-term growth and impact globally.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    To be the most trusted global technology partner, enabling innovation, automation, and digital transformation at scale for businesses worldwide.
                  </p>
                </div>
              </div>

              {/* Visual Section */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Main image */}
                  <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/assets/mission..jpg"
                      alt="Team collaboration and innovation"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Secondary images */}
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/assets/mission1.png"
                      alt="African tech innovation"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/assets/vision..jpg"
                      alt="Global technology reach"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">4+</div>
                    <div className="text-gray-300 text-sm">Years of Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          id="values"
          data-section
          className={`py-20 bg-gradient-to-b from-gray-900 to-black transition-all duration-1000 ${
            visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-purple-500/20">
                <Star className="w-4 h-4 mr-2 text-purple-500" />
                Our Core Values
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and partnerships in every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 card-hover overflow-hidden ${
                    activeValue === index 
                      ? 'border-red-500/50 shadow-lg shadow-red-500/20 transform scale-105' 
                      : 'border-white/20'
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-all duration-300 ${
                      activeValue === index ? 'bg-red-500 text-white scale-110' : 'bg-white/10 text-red-500'
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section 
          id="partners"
          data-section
          className={`py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('partners') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
                <Building className="w-4 h-4 mr-2 text-red-500" />
                Our Partners
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Industry Leaders</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Powering innovation with our strategic partners worldwide
              </p>
            </div>

            {/* Scrolling Partners Banner */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex animate-scroll">
                  {/* First set of logos */}
                  {partners.map((partner, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-8 w-24 h-16 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-white/90 rounded-lg flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300 hover:bg-white group">
                        <img 
                          src={partner.src} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {partners.map((partner, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-8 w-24 h-16 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-white/90 rounded-lg flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300 hover:bg-white group">
                        <img 
                          src={partner.src} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Gradient fade edges */}
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>

            {/* Bottom stats */}
            <div className="text-center mt-12">
              <p className="text-gray-400">
                Joining forces with <span className="text-white font-semibold">industry leaders</span> to deliver exceptional results
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default About;