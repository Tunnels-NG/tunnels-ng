import { useState, useEffect } from 'react';
import { ArrowRight, Check, Users, TrendingUp, Shield, Target, Lightbulb, DollarSign, Handshake, Clock, BarChart3, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const VentureStudio = () => {
  const ventureStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Startup Venture Studio Nigeria",
    "serviceType": "Technical co-founder and venture partnership",
    "provider": {
      "@type": "Organization",
      "name": "TunnelsNG",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      },
      "areaServed": ["Nigeria", "Africa"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Venture Partnership Models",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deferred Build Partnership",
            "description": "Milestone-based development with repayment tied to traction.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equity Partnership",
            "description": "Shared ownership and technical co-founder support for high-potential startups.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revenue Share Transformation",
            "description": "Technology transformation for operating businesses with revenue.",
            "url": "https://tunnels.ng/venture-studio"
          }
        }
      ]
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [activeModel, setActiveModel] = useState(0);

  const partnershipModels = [
    {
      title: 'Deferred Build Partnership',
      label: 'Model 01',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
      description: 'Milestone-based development with repayment tied to post-launch performance. Requires validation signals and committed founders ready to execute.',
      benefits: ['Structured milestone delivery', 'Performance-tied repayment', 'Full technical team access', 'Launch-focused execution'],
      ideal: 'Early-stage startups with validated demand'
    },
    {
      title: 'Equity Partnership',
      label: 'Model 02',
      icon: Handshake,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
      description: 'Long-term co-building with shared ownership. Success is tied directly to venture outcomes through strategic technical leadership and aligned incentives.',
      benefits: ['True long-term alignment', 'Strategic technical leadership', 'Ongoing iteration & support', 'Shared ownership mindset'],
      ideal: 'High-potential ventures with serious execution capacity'
    },
    {
      title: 'Revenue Share',
      label: 'Model 03',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      description: 'For operating businesses with proven revenue models seeking technology transformation. Transparent, time-bound agreements with clear monetization requirements.',
      benefits: ['Clear monetization required', 'Time-bound agreements', 'Transparent terms', 'Performance-aligned'],
      ideal: 'Businesses with proven revenue models'
    }
  ];

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

  const nextModel = () => {
    setActiveModel((prev) => (prev + 1) % partnershipModels.length);
  };

  const prevModel = () => {
    setActiveModel((prev) => (prev - 1 + partnershipModels.length) % partnershipModels.length);
  };

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We explore your vision, market opportunity, and business model through an in-depth conversation.'
    },
    {
      step: '02',
      title: 'Evaluation',
      description: 'Our team assesses technical feasibility, market fit, and partnership alignment. Not all ventures proceed past this stage.'
    },
    {
      step: '03',
      title: 'Agreement',
      description: 'For selected ventures, we structure a partnership with clear terms, milestones, and shared accountability.'
    },
    {
      step: '04',
      title: 'Build',
      description: 'Our team builds with an ownership mindset, bringing the same dedication we apply to our own ventures.'
    },
    {
      step: '05',
      title: 'Launch & Grow',
      description: 'We support your launch and continue iterating as you scale, maintaining long-term partnership.'
    }
  ];

  const criteria = [
    { icon: Lightbulb, title: 'Innovative Idea', description: 'Solving a real problem with a differentiated approach' },
    { icon: Target, title: 'Clear Vision', description: 'Well-defined goals with deep market understanding' },
    { icon: Users, title: 'Committed Founders', description: 'Serious operators ready to execute relentlessly' },
    { icon: BarChart3, title: 'Market Potential', description: 'Addressable market with significant growth opportunity' },
    { icon: Shield, title: 'Defensible Model', description: 'Sustainable competitive advantage or unique positioning' },
    { icon: DollarSign, title: 'Revenue Path', description: 'Clear and credible route to monetization' }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Startup Venture Studio Nigeria"
        description="Selective startup venture studio in Lagos acting as a technical co-founder for African founders and corporate spin-outs through evaluated, long-term partnerships."
        keywords="startup venture studio Nigeria, technical co-founder Africa, venture studio Africa, co-build startup Africa, selective venture studio"
        url="https://tunnels.ng/venture-studio"
        structuredData={ventureStructuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-tunnels-black/95 to-tunnels-black" />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Venture <span className="text-tunnels-red">Studio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6">
              We partner with exceptional founders and businesses to co-build, launch, and scale 
              technology companies through long-term, aligned partnerships.
            </p>
            
            <p className="text-white/50 text-sm uppercase tracking-wider mb-10">
              This is not a service. It's a selective collaboration.
            </p>

            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Apply to Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Venture Studio Model */}
      <section 
        id="why-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('why-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why a <span className="text-tunnels-red">Venture Studio</span> Model Works
              </h2>
              <p className="text-white/60 max-w-3xl mx-auto">
                Technology is a long-term asset that requires aligned incentives and shared accountability. 
                Our venture studio model ensures business-first execution with true partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">The Traditional Way</h3>
                <ul className="space-y-3">
                  {[
                    'Large upfront spend before validation',
                    'Transactional, short-term delivery',
                    'Misaligned incentives',
                    'Technology built without ownership mindset'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50">
                      <X className="w-4 h-4 text-white/30 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-tunnels-red/30 bg-tunnels-red/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">The TunnelsNG Way</h3>
                <ul className="space-y-3">
                  {[
                    'Long-term partnership approach',
                    'Shared accountability for outcomes',
                    'Business-driven technical decisions',
                    'Incentives aligned around growth and value'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <Check className="w-4 h-4 text-tunnels-red mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Carousel */}
      <section 
        id="models-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 overflow-hidden ${visibleSections.has('models-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership <span className="text-tunnels-red">Models</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Partnership structures are selected after internal evaluation based on stage, traction, and long-term potential. 
              Not all ventures qualify.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="max-w-6xl mx-auto">
            {/* Main Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-tunnels-dark to-tunnels-black border border-tunnels-darkgray/30">
              {/* Background Image */}
              <div className="absolute inset-0">
                {partnershipModels.map((model, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activeModel === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={model.image} 
                      alt={model.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-tunnels-black via-tunnels-black/95 to-tunnels-black/70" />
                  </div>
                ))}
              </div>

              {/* Glowing accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-tunnels-red/10 rounded-full blur-[150px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-tunnels-red/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[500px] flex flex-col justify-center">
                {partnershipModels.map((model, index) => {
                  const Icon = model.icon;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        activeModel === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 absolute translate-x-8 pointer-events-none'
                      }`}
                    >
                      {activeModel === index && (
                        <div className="max-w-2xl">
                          {/* Label */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-tunnels-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-tunnels-red/30">
                              <Icon className="w-7 h-7 text-tunnels-red" />
                            </div>
                            <span className="text-tunnels-red text-sm uppercase tracking-widest font-medium">{model.label}</span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {model.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                            {model.description}
                          </p>
                          
                          {/* Benefits */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {model.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-3 text-white/80">
                                <div className="w-6 h-6 rounded-full bg-tunnels-red/20 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-tunnels-red" />
                                </div>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Ideal For */}
                          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <span className="text-tunnels-red font-semibold">Ideal for:</span>
                            <span className="text-white/70">{model.ideal}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3 z-20">
                <button 
                  onClick={prevModel}
                  className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-tunnels-red/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextModel}
                  className="w-12 h-12 rounded-xl bg-tunnels-red/20 backdrop-blur-sm border border-tunnels-red/30 flex items-center justify-center text-white hover:bg-tunnels-red/30 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                <div 
                  className="h-full bg-tunnels-red transition-all duration-500"
                  style={{ width: `${((activeModel + 1) / partnershipModels.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Model Quick Nav - Below Card */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {partnershipModels.map((model, index) => {
                const Icon = model.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveModel(index)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      activeModel === index 
                        ? 'bg-tunnels-red/10 border-tunnels-red/30' 
                        : 'bg-tunnels-dark/50 border-tunnels-darkgray/30 hover:border-tunnels-red/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${activeModel === index ? 'text-tunnels-red' : 'text-white/50'}`} />
                      <span className={`text-sm font-medium ${activeModel === index ? 'text-white' : 'text-white/60'}`}>
                        {model.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Venture Studio Process */}
      <section 
        id="process-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('process-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Venture Studio <span className="text-tunnels-red">Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From initial conversation to launch and beyond. A structured path for serious ventures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-tunnels-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-tunnels-darkgray mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="py-0 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" 
                alt="Strategy session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                alt="Product development" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section 
        id="criteria-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('criteria-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="text-tunnels-red">Look For</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              We partner selectively. Not every idea is a fit, and that's intentional. 
              Here's what we look for in potential ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-tunnels-darkgray rounded-lg flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tunnels-dark">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Think You're a <span className="text-tunnels-red">Fit</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              If you're building a serious business and looking for a long-term technical partner, 
              apply to explore a venture studio collaboration.
            </p>
            
            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Apply to Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/50">
              {['NDA Available', 'No Obligation Initial Conversation'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-tunnels-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VentureStudio;
