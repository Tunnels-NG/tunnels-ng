import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Clock, Heart, Zap, Users, Code, Target, Globe, Coffee, Lightbulb, Shield, TrendingUp, Award, BookOpen, Headphones, Gamepad2, Palette, ChevronDown, DollarSign, Gift, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Careers = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeWorkingStyle, setActiveWorkingStyle] = useState(0);

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

  // Auto-cycle working styles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkingStyle(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const workingStyles = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. Our distributed team spans multiple countries and time zones.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Flexible Hours",
      description: "Own your schedule. We care about results, not when you're online. Balance is everything.",
      icon: <Clock className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Deep Focus Time",
      description: "No unnecessary meetings. Protected time for deep work and creative problem-solving.",
      icon: <Target className="w-12 h-12" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Async Communication",
      description: "Thoughtful, written communication. Reduce interruptions, increase productivity.",
      icon: <Headphones className="w-12 h-12" />,
      color: "from-orange-500 to-amber-500"
    }
  ];

  const compensationHighlights = [
    { icon: <DollarSign />, title: "Competitive Base Salary", description: "Market-leading compensation benchmarked against top tech companies" },
    { icon: <TrendingUp />, title: "Performance Bonuses", description: "Quarterly bonuses based on individual and company performance" },
    { icon: <Shield />, title: "Health & Wellness", description: "Comprehensive health insurance and wellness stipends" },
    { icon: <Gift />, title: "Annual Raises", description: "Meaningful salary increases during performance reviews" }
  ];

  const perks = [
    { icon: <Target />, title: "Real Impact", description: "Your work directly shapes product direction and company growth" },
    { icon: <TrendingUp />, title: "Career Growth", description: "Rapid advancement opportunities as we scale together" },
    { icon: <Users />, title: "Small Team", description: "Work directly with founders and have your voice heard" },
    { icon: <Lightbulb />, title: "Own Your Projects", description: "Take full ownership from idea to implementation" },
    { icon: <Globe />, title: "Remote Flexibility", description: "Work from anywhere with reliable internet" },
    { icon: <BookOpen />, title: "Learn by Doing", description: "Hands-on experience with cutting-edge technologies" }
  ];

  const values = [
    {
      title: "Craft Excellence",
      description: "We obsess over details and take pride in building things that last. Quality over quantity, always.",
      pattern: "Tech Excellence"
    },
    {
      title: "Human Connection", 
      description: "Technology serves people. We build with empathy and never forget the humans behind the screens.",
      pattern: "People First"
    },
    {
      title: "Continuous Growth",
      description: "We're students before teachers. Learning, experimenting, and growing together every single day.",
      pattern: "Never Stop Learning"
    },
    {
      title: "Transparent Impact",
      description: "Open communication, honest feedback, and measurable results. We share both successes and failures.",
      pattern: "Radical Honesty"
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
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(239, 68, 68, 0.15);
        }
        
        .perk-float {
          animation: float 6s ease-in-out infinite;
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>

      <main>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Interactive Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
              transition: 'background-image 0.5s ease'
            }}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-40"
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${20 + Math.sin(i) * 60}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              >
                {i % 3 === 0 && <Code className="w-4 h-4 text-red-500 animate-pulse" />}
                {i % 3 === 1 && <Lightbulb className="w-3 h-3 text-pink-500 animate-pulse" />}
                {i % 3 === 2 && <Heart className="w-2 h-2 text-white animate-pulse" />}
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-slide-up">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Legacy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in leading-relaxed" style={{animationDelay: '0.4s'}}>
                We're building the future of technology across the world. Join a remote-first team of makers, 
                thinkers, and innovators who believe great work happens when people have the freedom to do their best.
              </p>

              <div className="mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-lg">Currently building our dream team</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </section>

        {/* Working Style Section */}
        <section 
          id="working-style"
          data-section
          className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('working-style') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Work</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Work-life integration, not balance. We've reimagined how great software gets built.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {workingStyles.map((style, index) => (
                  <div 
                    key={style.title}
                    className={`p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                      activeWorkingStyle === index 
                        ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-red-500/50 scale-105' 
                        : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-white/40'
                    }`}
                    onClick={() => setActiveWorkingStyle(index)}
                  >
                    <div className={`mb-6 transition-all duration-300 ${
                      activeWorkingStyle === index ? 'text-white scale-110' : 'text-red-500'
                    }`}>
                      {style.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{style.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{style.description}</p>
                    
                    {/* Active indicator */}
                    {activeWorkingStyle === index && (
                      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded animate-pulse"></div>
                    )}
                  </div>
                ))}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Principles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The values that guide every decision, every line of code, and every interaction.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-white mr-4">{value.title}</h3>
                        <span className="text-sm text-red-400 bg-red-500/20 px-3 py-1 rounded-full">
                          {value.pattern}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">{value.description}</p>
                    </div>
                    <div className="ml-6 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {index === 0 && '🎯'}
                      {index === 1 && '❤️'}
                      {index === 2 && '🌱'}
                      {index === 3 && '🔍'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compensation Section */}
        <section 
          id="compensation"
          data-section
          className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${
            visibleSections.has('compensation') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Juicy Compensation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Epic Perks</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We pay well because talent deserves it. Competitive salaries and benefits that actually matter to your life and career.
              </p>
            </div>

            {/* Compensation Highlights */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {compensationHighlights.map((item, index) => (
                  <div 
                    key={item.title}
                    className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 text-center card-hover"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {React.cloneElement(item.icon, { className: "w-7 h-7 text-white" })}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Perks */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Plus These Amazing Perks</h3>
                <p className="text-gray-300">Because great people deserve great experiences</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {perks.map((perk, index) => (
                  <div 
                    key={perk.title}
                    className="perk-float group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center card-hover"
                    style={{ 
                      animationDelay: `${index * 0.3}s`,
                      animationDuration: `${6 + index * 0.5}s`
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(perk.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section 
          id="apply"
          data-section
          className={`py-20 bg-gradient-to-b from-gray-900 to-black transition-all duration-1000 ${
            visibleSections.has('apply') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                No Open Positions <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Right Now</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                But we're always building our talent pipeline. Great people don't wait for job postings. They reach out when they're ready to do their best work.
              </p>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Interested in our next chapter?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Send us your story. Tell us what you're passionate about, what you've built, and what you'd love to work on next. 
                    We'll keep you in mind for future opportunities that match your skills and interests.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    <span>Remote-first • Global team</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-red-500" />
                    <span>Flexible hours • Async communication</span>
                  </div>
                </div>
                
                <a href="mailto:hello@tunnelsng.tech" className="group">
                  <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 flex items-center mx-auto">
                    <Mail className="mr-3 w-5 h-5" />
                    hello@tunnelsng.tech
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Careers;