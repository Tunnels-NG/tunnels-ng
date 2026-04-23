import { useState, useEffect } from 'react';
import { ArrowRight, Check, Users, TrendingUp, Target, Zap, Rocket, X, ChevronLeft, ChevronRight, Code, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const VentureStudio = () => {
  const growthStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TunnelsNG Growth Partnerships",
    "serviceType": "Growth partnership and embedded user acquisition",
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
      "name": "Growth Partnership Models",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Sprint Partnership",
            "description": "Intensive 4-12 week campaigns to build your initial growth system and acquire your first cohort of users.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embedded Growth Partner",
            "description": "3-6 month engagement where we embed within your team to design, build, and operate your growth infrastructure.",
            "url": "https://tunnels.ng/venture-studio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equity Growth Partnership",
            "description": "Long-term partnership where we take equity and become your growth partner with fully aligned incentives.",
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
      title: 'Sprint Partnership',
      label: 'Model 01',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
      duration: '4-12 weeks',
      description: 'Focused campaigns to get you your first users. We build the systems, run the campaigns, and get you to traction fast.',
      benefits: ['First users in weeks', 'Growth playbook delivered', 'Channel testing', 'Funnel optimization'],
      ideal: 'Products ready to launch or recently launched',
      terms: 'Fixed engagement, milestone-based'
    },
    {
      title: 'Embedded Partnership',
      label: 'Model 02',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
      duration: '3-6 months',
      description: 'We join your team to build and run your growth systems. Think of us as your dedicated growth team.',
      benefits: ['Dedicated growth team', 'Ongoing user acquisition', 'Continuous optimization', 'Strategic guidance'],
      ideal: 'Growing products with product-market fit',
      terms: 'Monthly retainer + performance incentives'
    },
    {
      title: 'Equity Partnership',
      label: 'Model 03',
      icon: Rocket,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      duration: 'Long-term (12+ months)',
      description: 'For high-potential products, we take equity and become your long-term growth partner with fully aligned incentives.',
      benefits: ['Zero upfront cost', 'Aligned incentives', 'Long-term commitment', 'Full growth ownership'],
      ideal: 'High-potential products with committed teams',
      terms: 'Equity determined after evaluation'
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
      title: 'Product Assessment',
      duration: '1 week',
      description: 'Deep product audit, market analysis, growth gap identification'
    },
    {
      step: '02',
      title: 'Growth Architecture',
      duration: '1-2 weeks',
      description: 'Channel strategy, conversion design, system blueprint'
    },
    {
      step: '03',
      title: 'Build & Operate',
      duration: '4-12+ weeks',
      description: 'Execute campaigns, acquire users, optimize & iterate'
    }
  ];

  const criteria = [
    { icon: Code, title: 'Working Product', description: 'You have a functional product, not just an idea' },
    { icon: Target, title: 'Growth Challenge', description: 'Clear gap between product quality and user adoption' },
    { icon: Users, title: 'Committed Team', description: 'Founders with capacity to execute alongside us' },
    { icon: TrendingUp, title: 'Market Signal', description: 'Some early validation or clear path to monetization' },
    { icon: BarChart3, title: 'Scale Potential', description: 'Addressable market worth the growth investment' }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="Growth Partnerships"
        description="Selective partnerships for products ready to grow. We embed as your growth partner to design, build, and operate user acquisition systems."
        keywords="growth partnership, embedded growth partner, user acquisition partner, growth partnerships, growth strategy consulting"
        url="https://tunnels.ng/venture-studio"
        structuredData={growthStructuredData}
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
              Growth <span className="text-tunnels-red">Partnerships</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6">
              For products ready to scale, we become your embedded growth partner
            </p>

            <p className="text-white/50 text-sm uppercase tracking-wider mb-10">
              Selective partnerships where we work alongside you to build real traction
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

      {/* Traditional Marketing Agencies vs Growth Partnership */}
      <section
        id="comparison-section"
        data-section
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('comparison-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Marketing Agencies vs <span className="text-tunnels-red">Growth Partners</span>
              </h2>
              <p className="text-white/60 max-w-3xl mx-auto">
                Marketing agencies optimize for awareness. We optimize for getting you actual users.
                Real metrics, systematic thinking, and long-term results define how we work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Marketing Agencies</h3>
                <ul className="space-y-3">
                  {[
                    'Brand awareness focus',
                    'Campaign-based thinking',
                    'Vanity metrics (impressions, reach)',
                    'Short-term engagements'
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
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Growth Partnership</h3>
                <ul className="space-y-3">
                  {[
                    'User acquisition focus',
                    'System-based thinking',
                    'Real metrics (users, activation, retention)',
                    'Long-term infrastructure building'
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
              Each structure is determined after evaluation of your product's stage, growth gap, and potential.
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
              <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[600px] flex flex-col justify-center">
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
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            {model.title}
                          </h3>

                          {/* Duration */}
                          <div className="flex items-center gap-2 mb-6">
                            <Clock className="w-5 h-5 text-tunnels-red" />
                            <span className="text-white/70 text-lg">Duration: {model.duration}</span>
                          </div>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                            {model.description}
                          </p>

                          {/* Benefits */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {model.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-3 text-white/80">
                                <div className="w-6 h-6 rounded-full bg-tunnels-red/20 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-tunnels-red" />
                                </div>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* Ideal For & Terms */}
                          <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                              <span className="text-tunnels-red font-semibold">Ideal for:</span>
                              <span className="text-white/70">{model.ideal}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ml-3">
                              <span className="text-tunnels-red font-semibold">Terms:</span>
                              <span className="text-white/70">{model.terms}</span>
                            </div>
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

      {/* Our Process */}
      <section
        id="process-section"
        data-section
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('process-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-tunnels-red">Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A structured path from product assessment to user acquisition. Designed for products ready to scale.
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
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-tunnels-red text-sm">({item.duration})</span>
                  </div>
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
              Selection <span className="text-tunnels-red">Criteria</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              We evaluate products against specific criteria. If these don't describe your current stage,
              we may not be the right fit yet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {criteria.slice(0, 3).map((item, index) => {
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

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
            {criteria.slice(3).map((item, index) => {
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
              If you have a working product with a clear growth gap and the commitment to grow,
              we're open to exploring partnership.
            </p>

            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Apply for Growth Partnership
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
