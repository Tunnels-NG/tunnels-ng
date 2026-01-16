import { useState, useEffect } from 'react';
import { ArrowRight, Check, Rocket, Users, TrendingUp, Shield, Target, Lightbulb, DollarSign, Handshake, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const VentureStudio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

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

  const engagementModels = [
    {
      title: 'Build Now, Pay Later',
      description: 'Start building your product today with zero upfront cost. Pay when your business generates revenue.',
      icon: Clock,
      benefits: [
        'Zero initial investment required',
        'Payment tied to your success',
        'Full development team access',
        'Flexible payment schedules'
      ],
      ideal: 'Early-stage startups with validated ideas'
    },
    {
      title: 'Equity Partnership',
      description: 'We become your technical co-founder. We invest our expertise in exchange for equity in your venture.',
      icon: Handshake,
      benefits: [
        'Aligned long-term incentives',
        'Strategic technical guidance',
        'Ongoing support and iteration',
        'Shared risk and reward'
      ],
      ideal: 'High-potential ventures seeking technical partners'
    },
    {
      title: 'Revenue Share',
      description: 'We build, you grow. Share a percentage of revenue until our investment is recovered.',
      icon: TrendingUp,
      benefits: [
        'No fixed payment schedule',
        'Payments scale with growth',
        'Reduces financial pressure',
        'Win-win arrangement'
      ],
      ideal: 'Businesses with clear revenue models'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your vision, market opportunity, and business model to understand your potential.'
    },
    {
      step: '02',
      title: 'Evaluation',
      description: 'Our team assesses technical feasibility, market fit, and partnership alignment.'
    },
    {
      step: '03',
      title: 'Agreement',
      description: 'We structure a partnership model that works for both parties with clear terms and milestones.'
    },
    {
      step: '04',
      title: 'Build',
      description: 'Our expert team builds your product with the same dedication as if it were our own.'
    },
    {
      step: '05',
      title: 'Launch & Grow',
      description: 'We support your launch and continue to iterate as you scale and capture market share.'
    }
  ];

  const criteria = [
    { icon: Lightbulb, title: 'Innovative Idea', description: 'Solving a real problem with a unique approach' },
    { icon: Target, title: 'Clear Vision', description: 'Well-defined goals and market understanding' },
    { icon: Users, title: 'Committed Founders', description: 'Passionate team ready to execute' },
    { icon: BarChart3, title: 'Market Potential', description: 'Addressable market with growth opportunity' },
    { icon: Shield, title: 'Defensible Model', description: 'Competitive advantage or unique positioning' },
    { icon: DollarSign, title: 'Revenue Path', description: 'Clear route to monetization' }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Venture Studio"
        description="Partner with Tunnels.ng through our innovative engagement models: Build Now Pay Later, Equity Partnership, or Revenue Sharing. We invest in your success with flexible technology partnership options."
        keywords="technology partnership, build now pay later, equity partnership, revenue sharing model, startup technology partner, venture studio Africa, MVP funding alternative"
        url="https://tunnels.ng/venture-studio"
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
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              We don't just build products. We build partnerships. Access world-class development 
              through innovative engagement models designed for ambitious founders.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {['Build Now, Pay Later', 'Equity Partnerships', 'Revenue Share'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 text-tunnels-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Venture Studio */}
      <section 
        id="why-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('why-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why <span className="text-tunnels-red">Partner</span> With Us?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Traditional development requires significant capital upfront. 
                We believe great ideas shouldn't be limited by funding constraints.
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
                    'Large upfront investment required',
                    'Risk falls entirely on founders',
                    'Developer incentives misaligned',
                    'Fixed scope, limited flexibility',
                    'Transactional relationship'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50">
                      <span className="text-white/30 mt-1">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-tunnels-red/30 bg-tunnels-red/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">The Tunnels Way</h3>
                <ul className="space-y-3">
                  {[
                    'Flexible payment structures',
                    'Shared risk and reward',
                    'Aligned success incentives',
                    'Iterative, adaptive approach',
                    'Long-term partnership'
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

      {/* Engagement Models */}
      <section 
        id="models-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('models-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engagement <span className="text-tunnels-red">Models</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the partnership structure that aligns with your stage, resources, and vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-2xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-tunnels-darkgray rounded-xl flex items-center justify-center mb-6 group-hover:bg-tunnels-red transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-white/60 mb-6">{model.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {model.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <Check className="w-4 h-4 text-tunnels-red mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-tunnels-red text-sm">
                    Ideal for: {model.ideal}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section 
        id="process-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('process-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It <span className="text-tunnels-red">Works</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From initial conversation to launch and beyond, here's our partnership journey.
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
            <p className="text-white/60 max-w-2xl mx-auto">
              We partner selectively with ventures that align with our values and show strong potential.
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
              Have a <span className="text-tunnels-red">Vision</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let's explore how we can build it together. No upfront costs, no lengthy proposals. 
              Just a conversation about your idea and how we might partner.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
            >
              Start the Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/50">
              {['Free Consultation', 'NDA Available', 'No Obligation'].map((item, index) => (
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
