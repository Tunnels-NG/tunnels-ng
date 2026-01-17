import { useState, useEffect } from 'react';
import { ArrowRight, Check, Code, Target, Handshake, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const servicePillars = [
    {
      id: 'advisory',
      icon: Search,
      title: 'Advisory & Audit',
      tagline: 'Make the right decisions before you build.',
      description: 'Strategic technology guidance and comprehensive system evaluation to ensure your technical decisions align with business objectives.',
      longDescription: 'Before building or scaling, businesses need clarity. Our advisory services help you make informed technical decisions, avoid costly mistakes, and create a roadmap for sustainable growth. We assess your current systems, identify opportunities, and develop strategies that align technology with business outcomes.',
      services: [
        {
          name: 'IT Consultancy & Advisory',
          desc: 'Strategic guidance on technology investments, architecture decisions, and digital transformation.'
        },
        {
          name: 'System Audit & Optimization',
          desc: 'Comprehensive evaluation of existing systems to identify performance gaps and improvement opportunities.'
        }
      ],
      outcomes: [
        'Informed technology decisions',
        'Reduced technical risk',
        'Clear execution roadmap',
        'Aligned IT and business strategy'
      ],
      cta: 'Request Advisory',
      ctaLink: '/contact'
    },
    {
      id: 'build',
      icon: Code,
      title: 'Build & Automation',
      tagline: 'Execution-focused. Business-aligned.',
      description: 'Scalable software development and intelligent automation solutions built with an ownership mindset and long-term maintainability.',
      longDescription: 'We build systems designed to scale. Whether you need to automate critical business processes, launch an MVP to validate your market, or develop custom software for complex requirements, our team approaches every build with the same rigor we apply to our own ventures.',
      services: [
        {
          name: 'Business Process Automation',
          desc: 'Intelligent automation solutions that eliminate inefficiencies and reduce operational costs.'
        },
        {
          name: 'Rapid MVP Development',
          desc: 'Validate your market with a functional product built for speed and iteration.'
        },
        {
          name: 'Custom Software Solutions',
          desc: 'End-to-end development of scalable, maintainable systems tailored to your requirements.'
        }
      ],
      outcomes: [
        'Reduced operational overhead',
        'Faster time to market',
        'Scalable architecture',
        'Maintainable codebase'
      ],
      cta: 'Discuss a Build',
      ctaLink: '/contact'
    },
    {
      id: 'venture',
      icon: Handshake,
      title: 'Venture Partnerships',
      tagline: 'Long-term alignment. Shared accountability.',
      description: 'Selective partnership models for ventures that meet our criteria. This is not a service. It is an evaluation-based collaboration.',
      longDescription: 'For ventures with significant potential, we offer partnership structures that go beyond traditional client-vendor relationships. These are selective, long-term collaborations where our success is directly tied to yours. Partnership models are determined through internal evaluation based on stage, traction, and market potential.',
      services: [
        {
          name: 'Deferred Build Partnerships',
          desc: 'Milestone-based development with performance-tied repayment for validated early-stage ventures.'
        },
        {
          name: 'Equity Partnerships',
          desc: 'Long-term co-building with shared ownership for high-potential ventures with serious execution capacity.'
        }
      ],
      outcomes: [
        'Aligned incentives',
        'Long-term technical partnership',
        'Ownership mindset from day one',
        'Shared accountability for outcomes'
      ],
      cta: 'Explore Venture Partnership',
      ctaLink: '/venture-studio',
      isSelective: true
    }
  ];

  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Technology Services for Startups & Businesses",
      "provider": {
        "@type": "Organization",
        "name": "TunnelsNG",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "Nigeria"
        }
      },
      "areaServed": ["Nigeria", "Africa"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Service Architecture",
        "itemListElement": servicePillars.map((pillar) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": pillar.title,
            "description": pillar.description,
            "url": `https://tunnels.ng${pillar.ctaLink}`
          }
        }))
      }
    }
  ];
  const [selectedPillar, setSelectedPillar] = useState('advisory');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const location = useLocation();

  // Handle hash-based deep linking for pillars
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['advisory', 'build', 'venture'].includes(hash)) {
      setSelectedPillar(hash);
      // Scroll to services section after a short delay
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection observer for scroll animations
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

  const selectedPillarData = servicePillars.find(pillar => pillar.id === selectedPillar);

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Technology Services for Startups & Businesses"
        description="Strategic advisory, build, and automation services from TunnelsNG, a Lagos-based technology venture studio partnering with serious founders and corporate teams across Nigeria and Africa."
        keywords="technology services for startups, advisory audit Nigeria, build and automation partner, system audit for startups, scalable software architecture"
        url="https://tunnels.ng/services"
        structuredData={servicesStructuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Structured Technology <span className="text-tunnels-red">Services</span> for Serious Businesses
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
              We provide advisory, build, and automation services designed to reduce execution risk, 
              accelerate growth, and prepare businesses for long-term scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" data-section className={`py-24 bg-tunnels-dark relative transition-all duration-700 ${visibleSections.has('services-section') ? 'opacity-100' : 'opacity-0'}`}>
        {/* Premium background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-tunnels-red/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tunnels-red/3 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-6 flex justify-center">
              <span className="relative inline-block text-sm text-white/70 tracking-[0.3em] uppercase">
                <span className="relative z-10 px-2">Our Service Architecture</span>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-tunnels-red/80 via-tunnels-red/40 to-transparent -z-10" />
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Three Strategic <span className="text-tunnels-red">Pillars</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Each pillar represents a distinct engagement model, designed for different stages of 
              business maturity and strategic needs.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap md:flex-nowrap gap-2 md:gap-0 p-1.5 rounded-2xl bg-tunnels-black/80 border border-tunnels-darkgray/30 backdrop-blur-sm">
              {servicePillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = selectedPillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setSelectedPillar(pillar.id)}
                    className={`relative flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-2.5 md:py-3 rounded-xl transition-all duration-300 flex-1 md:flex-initial ${
                      isActive
                        ? 'bg-tunnels-red text-white'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium text-xs md:text-sm">{pillar.title}</span>
                    {pillar.isSelective && (
                      <span className={`hidden md:inline text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold ${
                        isActive ? 'bg-white/20' : 'bg-tunnels-red/20 text-tunnels-red'
                      }`}>
                        •
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Main Content Card */}
          {selectedPillarData && (
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl border border-tunnels-darkgray/30 bg-gradient-to-br from-tunnels-black via-tunnels-black to-tunnels-dark overflow-hidden">
                {/* Top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tunnels-red to-transparent" />
                
                {/* Decorative corner elements */}
                <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-tunnels-red/30 rounded-tl-lg" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-tunnels-red/30 rounded-br-lg" />

                {/* Background glow */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tunnels-red/5 blur-[100px] rounded-full" />

                <div className="relative z-10 p-8 md:p-12 lg:p-16">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-tunnels-red to-tunnels-red-light flex items-center justify-center shadow-xl shadow-tunnels-red/20">
                      <selectedPillarData.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedPillarData.title}</h2>
                        {selectedPillarData.isSelective && (
                          <span className="relative inline-block text-xs uppercase tracking-widest text-tunnels-red font-semibold">
                            <span className="relative z-10 px-1">Evaluation-Based</span>
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-tunnels-red/80 via-tunnels-red/40 to-transparent -z-10 -skew-x-6" />
                          </span>
                        )}
                      </div>
                      <p className="text-tunnels-red text-lg font-medium mb-4">{selectedPillarData.tagline}</p>
                      <p className="text-white/70 text-lg leading-relaxed max-w-3xl">{selectedPillarData.description}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-tunnels-darkgray/50 to-transparent mb-10" />

                  {/* Long description */}
                  <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-4xl">{selectedPillarData.longDescription}</p>

                  {/* Two column layout */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Services Included */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-tunnels-red/10 flex items-center justify-center">
                          <Code className="w-5 h-5 text-tunnels-red" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Services Included</h4>
                      </div>
                      <div className="space-y-4">
                        {selectedPillarData.services.map((service, i) => (
                          <div 
                            key={i} 
                            className="group p-5 rounded-2xl bg-tunnels-dark/40 border border-tunnels-darkgray/20 hover:border-tunnels-red/30 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-lg bg-tunnels-red/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-tunnels-red/20 transition-colors">
                                <span className="text-tunnels-red text-sm font-bold">{i + 1}</span>
                              </div>
                              <div>
                                <h5 className="text-white font-semibold mb-1.5 group-hover:text-tunnels-red transition-colors">{service.name}</h5>
                                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Outcomes */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-tunnels-red/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-tunnels-red" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Business Outcomes</h4>
                      </div>
                      <div className="p-6 rounded-2xl bg-tunnels-dark/40 border border-tunnels-darkgray/20">
                        <div className="space-y-4">
                          {selectedPillarData.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                              <div className="w-8 h-8 rounded-full bg-tunnels-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-tunnels-red/20 transition-colors">
                                <Check className="w-4 h-4 text-tunnels-red" />
                              </div>
                              <span className="text-white/70 group-hover:text-white transition-colors">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-8">
                        <Link
                          to={selectedPillarData.ctaLink}
                          className="group inline-flex items-center gap-3 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-xl transition-all duration-300 hover:bg-tunnels-red-light hover:gap-4 hover:shadow-xl hover:shadow-tunnels-red/20"
                        >
                          <span>{selectedPillarData.cta}</span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-section" data-section className={`py-24 bg-tunnels-black relative transition-all duration-700 ${visibleSections.has('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why <span className="text-tunnels-red">TunnelsNG</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We approach technology with a business-first mindset and long-term accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: 'Business-First Engineering', desc: 'Every technical decision is evaluated against business outcomes. We build what matters, not what\'s trendy.' },
              { icon: Handshake, title: 'Long-Term Partnership Mindset', desc: 'We\'re not looking for quick transactions. We invest in relationships that create sustained value.' },
              { icon: Check, title: 'Accountability for Outcomes', desc: 'We measure success by your results, not our deliverables. Our incentives are aligned with yours.' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-tunnels-darkgray/50 group hover:border-tunnels-red/30 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-tunnels-dark relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tunnels-red/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Work With a Technology <span className="text-tunnels-red">Partner</span>, Not Just a Vendor
            </h2>
            <p className="text-white/70 text-lg mb-10">
              We work with founders and businesses committed to building scalable, long-term products.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3 hover:shadow-lg hover:shadow-tunnels-red/20"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/venture-studio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-tunnels-red/50 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red/10 hover:border-tunnels-red hover:gap-3"
              >
                Explore Venture Studio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;