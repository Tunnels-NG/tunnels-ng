import { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Users, Code, Target, Globe, Lightbulb, Shield, TrendingUp, BookOpen, Headphones, DollarSign, Gift, ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Careers = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [isVisible, setIsVisible] = useState(false);
  const [activeWorkingStyle, setActiveWorkingStyle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
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
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const workingStyles = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. Our distributed team spans multiple countries and time zones.",
      icon: Globe,
    },
    {
      title: "Flexible Hours",
      description: "Own your schedule. We care about results, not when you're online. Balance is everything.",
      icon: Clock,
    },
    {
      title: "Deep Focus Time",
      description: "No unnecessary meetings. Protected time for deep work and creative problem-solving.",
      icon: Target,
    },
    {
      title: "Async Communication",
      description: "Thoughtful, written communication. Reduce interruptions, increase productivity.",
      icon: Headphones,
    }
  ];

  const compensationHighlights = [
    { icon: DollarSign, title: "Competitive Salary", description: "Market-leading compensation benchmarked against top tech companies" },
    { icon: TrendingUp, title: "Performance Bonuses", description: "Quarterly bonuses based on individual and company performance" },
    { icon: Shield, title: "Health & Wellness", description: "Comprehensive health insurance and wellness stipends" },
    { icon: Gift, title: "Annual Raises", description: "Meaningful salary increases during performance reviews" }
  ];

  const perks = [
    { icon: Target, title: "Real Impact", description: "Your work directly shapes product direction and company growth" },
    { icon: TrendingUp, title: "Career Growth", description: "Rapid advancement opportunities as we scale together" },
    { icon: Users, title: "Small Team", description: "Work directly with founders and have your voice heard" },
    { icon: Lightbulb, title: "Own Your Projects", description: "Take full ownership from idea to implementation" },
    { icon: Globe, title: "Remote Flexibility", description: "Work from anywhere with reliable internet" },
    { icon: BookOpen, title: "Learn by Doing", description: "Hands-on experience with cutting-edge technologies" }
  ];

  const values = [
    {
      title: "Craft Excellence",
      description: "We obsess over details and take pride in building things that last. Quality over quantity, always.",
      tag: "Tech Excellence",
      icon: Code
    },
    {
      title: "Human Connection", 
      description: "Technology serves people. We build with empathy and never forget the humans behind the screens.",
      tag: "People First",
      icon: Users
    },
    {
      title: "Continuous Growth",
      description: "We're students before teachers. Learning, experimenting, and growing together every single day.",
      tag: "Never Stop Learning",
      icon: TrendingUp
    },
    {
      title: "Transparent Impact",
      description: "Open communication, honest feedback, and measurable results. We share both successes and failures.",
      tag: "Radical Honesty",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Careers"
        description="Join Tunnels.ng and build the future of technology in Africa. Explore exciting career opportunities in software development, product design, and more. Remote-friendly with competitive benefits."
        keywords="tech jobs Nigeria, software developer jobs, remote tech jobs Africa, startup careers, product designer jobs, Lagos tech jobs, career opportunities"
        url="https://tunnels.ng/careers"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build <span className="text-tunnels-red">Legacy</span> With Us
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join a remote-first team of makers, thinkers, and innovators who believe 
              great work happens when people have the freedom to do their best.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {['Remote-First', 'Flexible Hours', 'Global Team'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 text-tunnels-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              View Opportunities
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Working Style Section */}
      <section 
        id="working-style"
        data-section
        className={`py-24 bg-tunnels-dark relative transition-all duration-700 ${
          visibleSections.has('working-style') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We <span className="text-tunnels-red">Work</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Work-life integration, not balance. We've reimagined how great software gets built.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workingStyles.map((style, index) => {
                const Icon = style.icon;
                return (
                  <div 
                    key={style.title}
                    onClick={() => setActiveWorkingStyle(index)}
                    className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer border group ${
                      activeWorkingStyle === index 
                        ? 'bg-tunnels-red border-tunnels-red scale-[1.02]' 
                        : 'bg-tunnels-black border-tunnels-darkgray/50 hover:border-tunnels-red/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeWorkingStyle === index ? 'bg-white/20' : 'bg-tunnels-darkgray group-hover:bg-tunnels-red/20'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{style.title}</h3>
                    <p className={`text-sm leading-relaxed ${activeWorkingStyle === index ? 'text-white/90' : 'text-white/60'}`}>
                      {style.description}
                    </p>
                    
                    {activeWorkingStyle === index && (
                      <div className="mt-4 h-1 bg-white/30 rounded animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values"
        data-section
        className={`py-24 bg-tunnels-black relative transition-all duration-700 ${
          visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-tunnels-red">Principles</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The values that guide every decision, every line of code, and every interaction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="group p-8 rounded-2xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-tunnels-darkgray flex items-center justify-center flex-shrink-0 group-hover:bg-tunnels-red transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                        <span className="text-tunnels-red text-sm">/ {value.tag}</span>
                      </div>
                      <p className="text-white/60 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section 
        id="compensation"
        data-section
        className={`py-24 bg-tunnels-dark relative transition-all duration-700 ${
          visibleSections.has('compensation') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Animated glow */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Compensation & <span className="text-tunnels-red">Perks</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We pay well because talent deserves it. Competitive salaries and benefits that actually matter.
            </p>
          </div>

          {/* Compensation Highlights */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compensationHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="p-6 rounded-2xl bg-tunnels-black border border-tunnels-red/20 text-center group hover:border-tunnels-red/40 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-tunnels-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Perks */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-2">Plus These Amazing Perks</h3>
              <p className="text-white/60">Because great people deserve great experiences</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <div 
                    key={perk.title}
                    className="p-6 rounded-2xl border border-tunnels-darkgray/50 group hover:border-tunnels-red/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-tunnels-darkgray rounded-xl flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section 
        id="apply"
        data-section
        className={`py-24 bg-tunnels-black relative transition-all duration-700 ${
          visibleSections.has('apply') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                No Open Positions <span className="text-tunnels-red">Right Now</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                But we're always building our talent pipeline. Great people don't wait for job postings. 
                They reach out when they're ready to do their best work.
              </p>
            </div>
            
            <div className="p-8 md:p-10 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-dark relative overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-tunnels-red/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Interested in our next chapter?</h3>
                <p className="text-white/60 leading-relaxed text-center mb-8">
                  Send us your story. Tell us what you're passionate about, what you've built, and what you'd love to work on next. 
                  We'll keep you in mind for future opportunities that match your skills and interests.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8 mb-8 text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-tunnels-red" />
                    <span>Remote-first</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-tunnels-red" />
                    <span>Global team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-tunnels-red" />
                    <span>Flexible hours</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="mailto:hello@tunnels.ng" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3 hover:shadow-lg hover:shadow-tunnels-red/20"
                  >
                    <Mail className="w-5 h-5" />
                    hello@tunnels.ng
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;