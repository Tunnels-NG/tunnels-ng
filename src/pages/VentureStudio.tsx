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
    "name": "TunnelsNG Venture Studio",
    "serviceType": "Venture partnership and technical co-founder",
    "provider": {
      "@type": "Organization",
      "name": "TunnelsNG",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      }
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
            "description": "Performance-linked development with deferred repayment triggered by revenue milestones or funding.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equity Partnership",
            "description": "Long-term co-building with 10-30% equity, determined after evaluation. Technical co-founder involvement.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revenue Share Partnership",
            "description": "Time-bound partnership (12-36 months) with 5-20% revenue share, capped to prevent long-term drag.",
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
      description: 'Performance-linked development with deferred repayment triggered by revenue milestones or funding events. Reserved for validated ventures with committed founders and clear paths to monetization.',
      benefits: ['Milestone-based delivery structure', 'Repayment tied to revenue or funding', 'Full technical team commitment', 'Aligned incentives from day one'],
      ideal: 'Early-stage ventures with market validation',
      terms: 'Repayment begins post-traction'
    },
    {
      title: 'Equity Partnership',
      label: 'Model 02',
      icon: Handshake,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
      description: 'Deep co-building with shared ownership, typically ranging from 10% to 30% equity determined after evaluation. We become long-term technical co-founders invested in your venture\'s success.',
      benefits: ['10% to 30% equity range (post-evaluation)', 'Long-term technical co-founder role', 'Ongoing product iteration & support', 'Board-level strategic involvement'],
      ideal: 'High-potential ventures with serious operators',
      terms: 'Equity finalized after due diligence'
    },
    {
      title: 'Revenue Share Partnership',
      label: 'Model 03',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      description: 'Time-bound technology partnership for operating businesses, typically 5% to 20% of revenue over 12 to 36 months. Agreements are capped to prevent long-term drag on your margins.',
      benefits: ['5% to 20% revenue share range', '12 to 36 month agreement term', 'Capped total repayment', 'No perpetual obligations'],
      ideal: 'Revenue-generating businesses seeking transformation',
      terms: 'Terms structured around existing revenue'
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
      title: 'Initial Conversation',
      description: 'A candid discussion about your venture, market opportunity, and what you\'re trying to build. No pitch decks required. We assess fit through dialogue.'
    },
    {
      step: '02',
      title: 'Evaluation & Diligence',
      description: 'We assess technical feasibility, market potential, founder commitment, and monetization clarity. Many ventures do not proceed past this stage.'
    },
    {
      step: '03',
      title: 'Terms & Structure',
      description: 'For qualified ventures, we define the partnership model: equity range, deferred terms, or revenue share, with clear milestones and accountability.'
    },
    {
      step: '04',
      title: 'Build & Iterate',
      description: 'Our team executes with an ownership mindset. We ship in cycles, validate assumptions, and iterate based on market feedback, not just specifications.'
    },
    {
      step: '05',
      title: 'Scale & Support',
      description: 'Post-launch, we remain invested in your trajectory. Ongoing iteration, technical guidance, and strategic support as the partnership matures.'
    }
  ];

  const criteria = [
    { icon: Lightbulb, title: 'Validated Problem', description: 'Evidence of customer demand: pilots, LOIs, or paying users' },
    { icon: Target, title: 'Clear Position', description: 'A defined market view with conviction, not just an idea' },
    { icon: Users, title: 'Committed Operators', description: 'Founders with skin in the game and capacity to execute' },
    { icon: BarChart3, title: 'Scalable Opportunity', description: 'Addressable market with credible path to meaningful scale' },
    { icon: Shield, title: 'Defensibility', description: 'Differentiation or positioning that compounds over time' },
    { icon: DollarSign, title: 'Monetization Clarity', description: 'A credible route to revenue, not hypothetical, actionable' }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Venture Studio"
        description="Selective venture studio partnering with founders through equity, deferred build, and revenue share structures. We co-build technology ventures with aligned incentives and shared accountability."
        keywords="venture studio, technology co-founder, equity partnership, deferred build, revenue share partnership, startup co-building"
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
              We selectively partner with founders and businesses to co-build technology ventures 
              through equity, deferred, and revenue-linked structures with shared accountability.
            </p>
            
            <p className="text-white/50 text-sm uppercase tracking-wider mb-10">
              Not a dev shop. A selective, long-term partnership.
            </p>

            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Apply for Partnership
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
                Transactional dev shops optimize for delivery. We optimize for outcomes. 
                Shared risk, aligned incentives, and iterative growth define every partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Transactional Dev Shops</h3>
                <ul className="space-y-3">
                  {[
                    'Large capital outlay before validation',
                    'Scope-driven, deadline-focused delivery',
                    'Incentives end when invoice is paid',
                    'No stake in your long-term success'
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
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Venture Studio Partnership</h3>
                <ul className="space-y-3">
                  {[
                    'Shared risk through deferred or equity structures',
                    'Outcome-driven, iteration-focused execution',
                    'Incentives aligned to your growth metrics',
                    'Long-term stake in venture success'
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
              Each structure is determined after evaluation of your venture's stage, validation signals, and growth trajectory. 
              We partner selectively. Qualification is required.
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
              How We <span className="text-tunnels-red">Engage</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A structured path from conversation to partnership. Designed for serious founders building ventures with scale potential.
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
              Qualification <span className="text-tunnels-red">Signals</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              We evaluate ventures against specific criteria. If these don't describe your current stage, 
              we may not be the right fit yet.
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
              Ready to Start a <span className="text-tunnels-red">Conversation</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              If you're building a venture with validated demand and the commitment to execute, 
              we're open to exploring partnership.
            </p>
            
            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Start a Venture Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/50">
              {['NDA Available on Request', 'Evaluation-Based Partnership'].map((item, index) => (
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
