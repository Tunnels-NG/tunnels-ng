import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check, Award, Rocket, Target, Globe, Users, Code, Layers, ChevronDown, Zap, Shield, TrendingUp, Building, Eye, Heart, Star, Calendar, DollarSign, HandHeart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeValue, setActiveValue] = useState(null);
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  
  // Partners section states
  const [partnersMousePos, setPartnersMousePos] = useState({ x: 0, y: 0 });
  const [isUserInteractingPartners, setIsUserInteractingPartners] = useState(false);
  const [autoFocusIndex, setAutoFocusIndex] = useState(0);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const partnersContainerRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  const logos = [
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

  // Partners section logic
  const getGridLayout = () => {
    const width = containerDimensions.width || 800;
    
    if (width < 480) {
      return { cols: 4, rows: 5, logoSize: 40, spacing: 60 };
    } else if (width < 768) {
      return { cols: 5, rows: 4, logoSize: 48, spacing: 70 };
    } else if (width < 1024) {
      return { cols: 6, rows: 4, logoSize: 52, spacing: 80 };
    } else {
      return { cols: 8, rows: 3, logoSize: 56, spacing: 90 };
    }
  };

  const gridLayout = getGridLayout();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteractingPartners) {
        setAutoFocusIndex(prev => (prev + 1) % logos.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isUserInteractingPartners, logos.length]);

  useEffect(() => {
    const handleResize = () => {
      if (partnersContainerRef.current) {
        const rect = partnersContainerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePartnersMouseMove = (e) => {
    if (!partnersContainerRef.current) return;
    
    const rect = partnersContainerRef.current.getBoundingClientRect();
    const newMousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    setPartnersMousePos(newMousePos);
    setIsUserInteractingPartners(true);

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteractingPartners(false);
      setPartnersMousePos({ x: 0, y: 0 });
    }, 3000);
  };

  const handlePartnersMouseLeave = () => {
    setIsUserInteractingPartners(false);
    setPartnersMousePos({ x: 0, y: 0 });
    setHoveredLogo(null);
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const getLogoPosition = (index) => {
    const col = index % gridLayout.cols;
    const row = Math.floor(index / gridLayout.cols);
    
    const containerWidth = containerDimensions.width || 800;
    const containerHeight = gridLayout.rows * gridLayout.spacing;
    
    const gridWidth = (gridLayout.cols - 1) * gridLayout.spacing;
    const gridHeight = (gridLayout.rows - 1) * gridLayout.spacing;
    
    const offsetX = (containerWidth - gridWidth) / 2;
    const offsetY = (containerHeight - gridHeight) / 2;
    
    return {
      x: offsetX + col * gridLayout.spacing,
      y: offsetY + row * gridLayout.spacing
    };
  };

  const calculateLogoTransform = (index) => {
    const basePos = getLogoPosition(index);
    let x = basePos.x;
    let y = basePos.y;
    let scale = 1;
    let zIndex = 1;
    let glow = false;

    if (isUserInteractingPartners && partnersMousePos.x > 0) {
      const distance = Math.sqrt(Math.pow(partnersMousePos.x - x, 2) + Math.pow(partnersMousePos.y - y, 2));
      const magneticForce = Math.max(0, 100 - distance) * 0.4;
      const angle = Math.atan2(partnersMousePos.y - y, partnersMousePos.x - x);
      
      x += Math.cos(angle) * magneticForce;
      y += Math.sin(angle) * magneticForce;
      
      if (distance < 80) {
        scale = 1.4;
        zIndex = 10;
        glow = true;
      } else if (distance < 120) {
        scale = 1.2;
        zIndex = 5;
      }
    } else {
      if (index === autoFocusIndex) {
        scale = 1.3;
        zIndex = 10;
        glow = true;
      }
    }

    return { x, y, scale, zIndex, glow };
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Process Automation",
      description: "We automate repetitive workflows using custom software, AI, and cloud-native tools, reducing operational costs and boosting productivity."
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Build-Now, Grow-Later Model",
      description: "Partner with startups through equity or deferred payments, removing upfront costs and enabling rapid development of promising ideas."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "System Audit & Scalability Engineering",
      description: "Evaluate existing systems, identify bottlenecks, and redesign architectures for seamless growth, security, and performance."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Idea-to-Market Acceleration",
      description: "Transform raw ideas into deployable MVPs with our lean, agile development process—speed without compromising quality."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "IT Consultancy & Digital Strategy",
      description: "From tech stack selection to roadmap development, we provide advisory services for businesses upgrading or launching new technologies."
    }
  ];

  const stats = [
    { icon: <Building className="w-6 h-6" />, label: "Years of Experience", value: "15+" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "100+" },
    { icon: <Code className="w-6 h-6" />, label: "Projects Delivered", value: "500+" },
    { icon: <Globe className="w-6 h-6" />, label: "Countries Served", value: "15+" }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex business challenges.',
      icon: '⭐'
    },
    {
      title: 'Excellence',
      description: 'We deliver high-quality solutions and commit to exceeding expectations in everything we do.',
      icon: '🏆'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual growth.',
      icon: '🤝'
    },
    {
      title: 'Impact',
      description: 'We measure success by the transformative impact our solutions create for businesses and communities.',
      icon: '🚀'
    }
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
          animation: spin 10s linear infinite;
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
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <main>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
                className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block animate-slide-up">About</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  TunnelsNG
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{animationDelay: '0.4s'}}>
                An innovation-driven technology company with a global outlook. 
                We don't just build software—we architect digital empires.
              </p>

              {/* Stats Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
                {stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="flex items-center justify-center mb-2 text-red-500 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    To streamline business operations, empower emerging businesses, and deliver technology solutions that drive long-term growth and impact.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    To be the most trusted global technology partner—enabling innovation, automation, and digital transformation at scale.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10"></div>
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-64 h-64 border border-red-500/20 rounded-full animate-spin-slow"></div>
                    <div className="w-80 h-80 border border-pink-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
                  </div>
                  
                  <div className="p-12 text-center relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                      <Code className="w-16 h-16 text-white" />
                    </div>
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
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-white/20">
                <Star className="w-4 h-4 mr-2 text-red-500" />
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
                  className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 card-hover ${
                    activeValue === index 
                      ? 'border-red-500/50 shadow-lg shadow-red-500/20 transform scale-105' 
                      : 'border-white/20'
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-all duration-300 ${
                    activeValue === index ? 'bg-red-500 text-white scale-110' : 'bg-white/10 text-red-500'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  
                  {/* Interactive progress indicator */}
                  <div className={`mt-6 h-1 bg-white/10 rounded overflow-hidden transition-opacity duration-300 ${
                    activeValue === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" style={{width: '85%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section - Updated with Magnetic Interaction */}
        <section 
          id="partners"
          data-section
          className={`py-12 md:py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('partners') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white mb-4 md:mb-6 border border-red-500/20">
                <Users className="w-3 h-3 md:w-4 md:h-4 mr-2 text-red-500" />
                Trusted Partners
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Powering Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Together</span>
              </h2>
              {/* <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our partners
              </p> */}
            </div>

            {/* Interactive Logo Container */}
            <div className="max-w-6xl mx-auto">
              <div 
                ref={partnersContainerRef}
                className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
                style={{ 
                  height: `${gridLayout.rows * gridLayout.spacing + 60}px`,
                  minHeight: '240px'
                }}
                onMouseMove={handlePartnersMouseMove}
                onMouseLeave={handlePartnersMouseLeave}
              >
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: `${gridLayout.spacing}px ${gridLayout.spacing}px`,
                    backgroundPosition: `${(containerDimensions.width - (gridLayout.cols - 1) * gridLayout.spacing) / 2}px ${gridLayout.spacing / 2}px`
                  }}></div>
                </div>

                {/* Status indicator */}
                {/* <div className="absolute top-4 right-4 z-20">
                  <div className={`w-2 h-2 rounded-full ${isUserInteractingPartners ? 'bg-green-400' : 'bg-blue-400'} animate-pulse`}></div>
                  <div className="text-xs text-white/60 mt-1 hidden md:block">
                    {isUserInteractingPartners ? 'Interactive' : 'Auto-Focus'}
                  </div>
                </div> */}

                {/* Partner Logos */}
                {logos.map((logo, index) => {
                  const transform = calculateLogoTransform(index);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-300 ease-out cursor-pointer"
                      style={{
                        left: transform.x - gridLayout.logoSize / 2,
                        top: transform.y - gridLayout.logoSize / 2,
                        transform: `scale(${transform.scale})`,
                        zIndex: transform.zIndex,
                        width: gridLayout.logoSize,
                        height: gridLayout.logoSize
                      }}
                      onMouseEnter={() => setHoveredLogo(logo.name)}
                      onMouseLeave={() => setHoveredLogo(null)}
                    >
                      {/* Glow effect */}
                      {transform.glow && (
                        <div className="absolute inset-0 bg-red-500/30 rounded-xl blur-lg animate-pulse"></div>
                      )}
                      
                      {/* Logo container */}
                      <div className="relative w-full h-full bg-white/90 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group">
                        <img 
                          src={logo.src} 
                          alt={logo.name}
                          className={`max-w-full max-h-full object-contain p-2 transition-all duration-300 ${
                            transform.glow ? 'filter-none' : 'filter grayscale group-hover:grayscale-0'
                          }`}
                          style={{ padding: `${gridLayout.logoSize * 0.05}px` }}
                        />
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredLogo === logo.name && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap z-30">
                          {logo.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Auto-focus indicator */}
                {!isUserInteractingPartners && (
                  <div
                    className="absolute w-20 h-20 border-2 border-red-500/60 rounded-full animate-pulse pointer-events-none"
                    style={{
                      left: getLogoPosition(autoFocusIndex).x - 40,
                      top: getLogoPosition(autoFocusIndex).y - 40,
                      transition: 'all 0.8s ease-in-out'
                    }}
                  >
                    <div className="absolute inset-2 border border-red-500/40 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-center mt-8 md:mt-16">
              <p className="text-sm md:text-lg text-gray-400">
                Powering innovation with <span className="text-white font-semibold">our strategic partners</span> worldwide
              </p>
              {/* <p className="text-xs md:text-sm text-gray-500 mt-2">
                {isUserInteractingPartners ? 'Move your mouse to interact with logos' : 'Auto-focusing through partners - hover to take control'}
              </p> */}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-lg rotate-45 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join the companies that have already revolutionized their operations with TunnelsNG. 
                Let's build something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NavLink to="/contact" className="group">
                  <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </NavLink>
                <NavLink to="/contact" className="group">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105">
                    Schedule Consultation
                  </button>   
                </NavLink>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Global Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default About;