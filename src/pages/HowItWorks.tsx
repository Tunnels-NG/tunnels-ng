import { useState, useEffect } from 'react';
import { ArrowRight, Search, Lightbulb, Rocket, CheckCircle2, Zap, BarChart, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [activeStep, setActiveStep] = useState(0);

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

  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Understand Your Product',
      duration: '1-2 Weeks',
      description: 'We audit your product, users, and market to figure out what\'s holding you back from growth',
      details: [
        'Product-market fit assessment',
        'Current user behavior analysis',
        'Competitor research',
        'Channel opportunities',
        'Growth gap identification'
      ],
      deliverables: ['Product Audit', 'User Analysis', 'Gap Assessment', 'Opportunity Map']
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Design the Strategy',
      duration: '1-2 Weeks',
      description: 'We map out the complete path from first touch to active user, tailored for your product',
      details: [
        'Where users will find you',
        'What makes them sign up',
        'Messaging and positioning',
        'Channel priorities',
        'Activation milestones'
      ],
      deliverables: ['Growth Blueprint', 'Conversion Map', 'Messaging Guide', 'Channel Plan']
    },
    {
      id: 3,
      icon: Rocket,
      title: 'Execute & Grow',
      duration: '4-12 Weeks',
      description: 'We build and run the systems that get your product to real users',
      details: [
        'User acquisition campaigns',
        'Community outreach',
        'Content creation',
        'Conversion optimization',
        'Funnel improvements'
      ],
      deliverables: ['Active Users', 'Growth Playbook', 'Performance Reports', 'Optimized Systems']
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Built to Last',
      description: 'We create repeatable systems and processes, not one-off campaigns'
    },
    {
      icon: BarChart,
      title: 'Real Metrics',
      description: 'Users acquired, activation rates, channel performance - not vanity metrics'
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: 'Quick testing cycles to find what works and cut what doesn\'t'
    },
    {
      icon: TrendingUp,
      title: 'Product-First',
      description: 'Growth strategy built on deep understanding of your product'
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="How It Works"
        description="Our 3-stage process for getting products to real users. Understand, design, execute - systematic growth from zero to traction."
        keywords="growth process, user acquisition process, how to get users, growth strategy, acquisition process"
        url="https://tunnels.ng/how-it-works"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-tunnels-black/95 to-tunnels-black" />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How we get you <span className="text-tunnels-red">real users</span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Our 3-stage process for moving products from zero to traction
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>2-4 weeks to first users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>Systems-based approach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>Measurable outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              A structured yet flexible approach that adapts to your unique needs while 
              ensuring consistent quality and timely delivery.
            </p>
          </div>

          {/* Step Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-tunnels-red text-white'
                      : 'bg-tunnels-black border border-tunnels-darkgray/50 text-white/60 hover:text-white hover:border-tunnels-red/30'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Step Info */}
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-black">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-tunnels-red rounded-xl flex items-center justify-center">
                    {(() => {
                      const Icon = processSteps[activeStep].icon;
                      return <Icon className="w-7 h-7 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-tunnels-red text-sm">
                      {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-white/70 text-lg mb-6">
                  {processSteps[activeStep].description}
                </p>
                
                <ul className="space-y-3">
                  {processSteps[activeStep].details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-tunnels-red shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-black">
                <h4 className="text-lg font-semibold text-white mb-6">
                  What You'll Receive
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {processSteps[activeStep].deliverables.map((deliverable, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/30"
                    >
                      <div className="w-10 h-10 bg-tunnels-red/10 rounded-lg flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                      </div>
                      <p className="text-white font-medium text-sm">{deliverable}</p>
                    </div>
                  ))}
                </div>

                {/* Timeline Progress */}
                <div className="mt-8 pt-6 border-t border-tunnels-darkgray/30">
                  <p className="text-white/40 text-sm mb-3">Progress Timeline</p>
                  <div className="flex items-center gap-2">
                    {processSteps.map((_, i) => (
                      <div 
                        key={i}
                        className={`flex-1 h-2 rounded-full transition-colors duration-300 ${
                          i <= activeStep ? 'bg-tunnels-red' : 'bg-tunnels-darkgray'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-white/40 text-xs">Understand</span>
                    <span className="text-white/40 text-xs">Execute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Timeline Visual */}
      <section 
        id="timeline-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('timeline-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Full <span className="text-tunnels-red">Journey</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From idea to impact, every step mapped out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;
              
              return (
                <div key={step.id} className="relative flex gap-6 pb-12">
                  {/* Timeline Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-tunnels-darkgray" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 bg-tunnels-red rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="relative inline-block text-xs font-semibold uppercase tracking-wide text-tunnels-red">
                        <span className="relative z-10 px-1">{step.duration}</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-tunnels-red/80 via-tunnels-red/40 to-transparent -z-10" />
                      </span>
                    </div>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section 
        id="principles-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('principles-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-tunnels-red">Principles</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The values that guide every project we take on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tunnels-darkgray rounded-lg flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                  <p className="text-white/60 text-sm">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your <span className="text-tunnels-red">Growth System</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let's audit your product and identify the growth gaps holding you back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
              >
                Start Growth Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/venture-studio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-dark border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300"
              >
                Explore Partnership Models
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
