import { useState, useEffect } from 'react';
import { ArrowRight, Check, Code, Target, Handshake, MapPin, Zap, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const servicePillars = [
    {
      id: 'strategy',
      icon: MapPin,
      title: 'Growth Strategy',
      tagline: 'Figure out how to reach your users',
      description: 'We help you identify who your users are, where to find them, and how to convert them from visitors to active users.',
      longDescription: 'Good growth doesn\'t start with tactics. It starts with understanding who your users are, where they spend their time, and what makes them sign up. We research your audience, identify the channels that actually matter, and design a conversion path that turns attention into activation.',
      services: [
        {
          name: 'Audience Research',
          desc: 'Deep dive into who your users are, what they need, and where they spend their time online.'
        },
        {
          name: 'Channel Planning',
          desc: 'Identify which channels will actually work for your product and prioritize based on potential impact.'
        },
        {
          name: 'Conversion Design',
          desc: 'Map out the complete journey from first touch to active user, optimized for real conversions.'
        },
        {
          name: 'Messaging',
          desc: 'Develop positioning and messaging that resonates with your audience and drives them to act.'
        }
      ],
      outcomes: [
        'Clear growth roadmap',
        'Prioritized channel list',
        'Conversion blueprint',
        'Messaging guide'
      ],
      cta: 'Get Strategy Support',
      ctaLink: '/contact'
    },
    {
      id: 'sprints',
      icon: Zap,
      title: 'Execution Sprints',
      tagline: 'Get your first users in 4-12 weeks',
      description: 'Focused campaigns that get you actual users. We run targeted acquisition, put your product in front of the right people, and optimize your funnels.',
      longDescription: 'Growth takes execution. Our sprints are time-boxed campaigns designed to get you real users fast. We don\'t just run ads or post content. We figure out where your users are, get your product in front of them, and optimize every step to turn visitors into active users.',
      services: [
        {
          name: 'User Acquisition',
          desc: 'Run targeted campaigns across the right channels to get people actually signing up for your product.'
        },
        {
          name: 'Community Outreach',
          desc: 'Get your product in front of relevant communities where your ideal users already hang out.'
        },
        {
          name: 'Content Creation',
          desc: 'Create and distribute content designed to drive signups, not just likes and shares.'
        },
        {
          name: 'Funnel Optimization',
          desc: 'Test and improve your onboarding, landing pages, and conversion points to turn more visitors into users.'
        }
      ],
      outcomes: [
        'Real user signups',
        'Active user base',
        'Optimized funnels',
        'Growth playbook'
      ],
      cta: 'Start a Sprint',
      ctaLink: '/contact'
    },
    {
      id: 'partnerships',
      icon: Rocket,
      title: 'Growth Partnerships',
      tagline: 'We become part of your team',
      description: 'For products ready to scale, we embed with your team as your dedicated growth partner. Long-term collaboration to build real traction.',
      longDescription: 'For products with real potential, we offer long-term growth partnerships. This isn\'t a typical service engagement. We become part of your team, working alongside you to figure out what works, build initial traction, and create systems that drive sustainable growth. These partnerships are selective and evaluation-based.',
      services: [
        {
          name: 'Embedded Partnership',
          desc: 'We join your team as your dedicated growth partner, working alongside you to figure out what works.'
        },
        {
          name: 'Traction Building',
          desc: 'Hands-on execution to get your first users, test channels, and build early momentum.'
        },
        {
          name: 'Growth Systems',
          desc: 'Build repeatable systems and processes that drive consistent user acquisition over time.'
        },
        {
          name: 'Infrastructure',
          desc: 'Create long-term growth assets like referral programs, content engines, and analytics dashboards.'
        }
      ],
      outcomes: [
        'Dedicated growth partner',
        'Sustained user growth',
        'Repeatable systems',
        'Growth infrastructure'
      ],
      cta: 'Explore Partnerships',
      ctaLink: '/venture-studio',
      isSelective: true
    }
  ];

  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Growth Services for Modern Products",
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
        "name": "Growth Service Architecture",
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
  const [selectedPillar, setSelectedPillar] = useState('strategy');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const location = useLocation();

  // Handle hash-based deep linking for pillars
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['strategy', 'sprints', 'venture'].includes(hash)) {
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
        title="Growth Services for Modern Products"
        description="Growth strategy, execution sprints, and venture partnerships. We design and execute the systems that turn products into users."
        keywords="growth strategy, user acquisition, execution sprints, growth partnerships, product growth, growth systems"
        url="https://tunnels.ng/services"
        structuredData={servicesStructuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Three ways to <span className="text-tunnels-red">grow</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
              Strategy, execution, and partnerships designed to help you acquire users and build sustainable growth.
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
                <span className="relative z-10 px-2">Growth Services</span>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-tunnels-red/80 via-tunnels-red/40 to-transparent -z-10" />
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Three Strategic <span className="text-tunnels-red">Approaches</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              From strategic planning to hands-on execution and embedded partnerships. Choose the engagement model that matches your product stage and growth needs.
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
              Why <span className="text-tunnels-red">Tunnels</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We treat growth as a system, not an afterthought.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: 'Growth-First Approach', desc: 'We design every strategy around getting you real users, not just awareness or engagement.' },
              { icon: Check, title: 'Measurable Results', desc: 'We track users acquired, activation rates, and time to traction - not vanity metrics like impressions.' },
              { icon: Rocket, title: 'Built to Scale', desc: 'We create repeatable systems and processes, not one-off campaigns that don\'t last.' }
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
              Ready to <span className="text-tunnels-red">grow</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              We work with founders and product teams serious about acquiring users and building sustainable growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3 hover:shadow-lg hover:shadow-tunnels-red/20"
              >
                Start a Project
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