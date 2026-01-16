import { useState, useEffect } from 'react';
import { ArrowRight, Search, Lightbulb, Code, Rocket, HeadphonesIcon, CheckCircle2, Clock, Users, Target } from 'lucide-react';
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
      title: 'Discovery',
      duration: '1-2 Weeks',
      description: 'We dive deep into understanding your vision, market, and users.',
      details: [
        'Initial consultation to understand your business goals',
        'Market research and competitive analysis',
        'User persona development and journey mapping',
        'Technical feasibility assessment',
        'Partnership model discussion and alignment'
      ],
      deliverables: ['Discovery Report', 'Market Analysis', 'User Personas', 'Project Scope Document']
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Strategy & Design',
      duration: '2-3 Weeks',
      description: 'We craft the blueprint that will guide your product to success.',
      details: [
        'Product roadmap and feature prioritization',
        'Information architecture and user flows',
        'Wireframing and interactive prototypes',
        'UI/UX design with your brand identity',
        'Technical architecture planning'
      ],
      deliverables: ['Product Roadmap', 'Wireframes', 'UI/UX Designs', 'Technical Architecture']
    },
    {
      id: 3,
      icon: Code,
      title: 'Development',
      duration: '8-16 Weeks',
      description: 'We bring your vision to life with clean, scalable code.',
      details: [
        'Agile development with 2-week sprints',
        'Regular demos and feedback sessions',
        'Continuous integration and testing',
        'Code reviews and quality assurance',
        'Progress tracking and transparent communication'
      ],
      deliverables: ['Working Software', 'Sprint Reports', 'Test Documentation', 'Source Code']
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Launch',
      duration: '1-2 Weeks',
      description: 'We deploy your product and ensure a smooth market entry.',
      details: [
        'Production environment setup',
        'Performance optimization and security audits',
        'Beta testing with real users',
        'Go-to-market strategy execution',
        'Launch monitoring and rapid issue resolution'
      ],
      deliverables: ['Deployed Product', 'Launch Checklist', 'Analytics Setup', 'Documentation']
    },
    {
      id: 5,
      icon: HeadphonesIcon,
      title: 'Growth & Support',
      duration: 'Ongoing',
      description: 'We continue to nurture and scale your product post-launch.',
      details: [
        'Ongoing maintenance and bug fixes',
        'Feature enhancements based on user feedback',
        'Performance monitoring and optimization',
        'Scaling support as your user base grows',
        'Strategic guidance for product evolution'
      ],
      deliverables: ['Monthly Reports', 'Feature Updates', 'Support Coverage', 'Growth Insights']
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Outcome-Focused',
      description: 'We measure success by your business outcomes, not just deliverables.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'You are not just a client, you are a partner in the building process.'
    },
    {
      icon: Clock,
      title: 'Transparent',
      description: 'Real-time visibility into progress, challenges, and decisions.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality-Driven',
      description: 'We never compromise on code quality, security, or user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="How It Works"
        description="Learn how Tunnels.ng transforms your idea into a scalable product. From discovery to delivery, our proven process ensures your project succeeds. Five simple steps to launch."
        keywords="how to build MVP, software development process, startup development steps, product development lifecycle, MVP launch process, agile development Nigeria"
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
              How We <span className="text-tunnels-red">Build</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              From the first conversation to launch day and beyond, here is our proven 
              process for turning ideas into thriving digital products.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>12-20 Week Average Timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>Agile Methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tunnels-red" />
                <span>Continuous Collaboration</span>
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
                    <span className="text-white/40 text-xs">Discovery</span>
                    <span className="text-white/40 text-xs">Growth</span>
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
                      <span className="px-3 py-1 bg-tunnels-dark text-tunnels-red text-xs rounded-full">
                        {step.duration}
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
              Ready to Start Your <span className="text-tunnels-red">Journey</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let's discuss your idea and find the perfect partnership model for your venture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
              >
                Book a Discovery Call
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
