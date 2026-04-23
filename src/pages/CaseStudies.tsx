import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [selectedStudy, setSelectedStudy] = useState(0);

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

  const caseStudies = [
    {
      id: 1,
      title: 'Fenypay',
      subtitle: 'Bridging Crypto and Traditional Finance Across Africa',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      partnership: 'Embedded Growth Partner',
      duration: '6 Months',
      challenge: 'African users wanted crypto access but couldn\'t find or activate on available platforms. Discovery and onboarding were major friction points preventing market penetration.',
      solution: 'We designed a multi-channel growth system targeting crypto communities, built frictionless onboarding optimized for mobile-first activation, and engineered viral referral mechanics that spread across 12 countries.',
      results: [
        { metric: '100K+', label: 'Transactions Processed' },
        { metric: '12', label: 'Countries Covered' },
        { metric: '99.99%', label: 'Uptime Achieved' },
        { metric: '$2M+', label: 'Monthly Volume' }
      ],
      niche: ['Fintech', 'Crypto', 'Mobile-First'],
      testimonial: {
        quote: 'Tunnels did not just build our platform, they helped us reimagine what financial access could look like for Africans.',
        author: 'Founder, Fenypay'
      }
    },
    {
      id: 2,
      title: 'Zura',
      subtitle: 'Transforming Social Media into Storefronts',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?w=800&q=80',
      partnership: 'Performance Partnership',
      duration: '4 Months',
      challenge: 'Thousands of social sellers existed but most never converted followers into paying customers. The gap between social presence and actual sales was costing merchants revenue daily.',
      solution: 'We embedded growth directly into merchant workflows - one-click storefront creation from Instagram, WhatsApp checkout optimization, and viral sharing mechanics that turned customers into acquisition channels. Then launched through influencer partnerships to seed initial merchant base.',
      results: [
        { metric: '5K+', label: 'Active Merchants' },
        { metric: '$2M+', label: 'GMV Processed' },
        { metric: '+45%', label: 'Conversion Lift' },
        { metric: '3min', label: 'Avg Setup Time' }
      ],
      niche: ['SaaS', 'Social Commerce', 'Mobile-First'],
      testimonial: {
        quote: 'The team understood our market deeply. They built exactly what African merchants needed, not what Silicon Valley thinks we need.',
        author: 'Co-founder, Zura'
      }
    },
    {
      id: 3,
      title: 'Listdem',
      subtitle: 'Africa\'s Trusted Classified Marketplace',
      category: 'Marketplace',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      partnership: 'Sprint Partnership',
      duration: '5 Months',
      challenge: 'Both buyers and sellers were scattered across WhatsApp groups and Facebook. No single platform had achieved network density. The chicken-and-egg problem was keeping everyone fragmented.',
      solution: 'We engineered a dual-sided acquisition engine - automated scraping to populate initial listings for buyer attraction, then seller-focused SMS and WhatsApp campaigns in high-density neighborhoods. Location-based notifications drove reactivation, while escrow payments increased conversion trust.',
      results: [
        { metric: '50K+', label: 'Active Listings' },
        { metric: '200K+', label: 'Registered Users' },
        { metric: '30+', label: 'Cities Covered' },
        { metric: '85%', label: 'Mobile Traffic' }
      ],
      niche: ['Marketplace', 'Classifieds', 'Mobile-First'],
      testimonial: {
        quote: 'Tunnels helped us launch faster than we thought possible, and the Build Now Pay Later model meant we could preserve our runway.',
        author: 'CEO, Listdem'
      }
    },
    {
      id: 4,
      title: 'Farmarly',
      subtitle: 'AI-Powered Precision Agriculture',
      category: 'AgriTech',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      partnership: 'Performance Partnership',
      duration: '7 Months',
      challenge: 'Farmers had never heard of precision agriculture software. Digital literacy was low, app store discovery was zero, and traditional marketing channels didn\'t reach rural farming communities at scale.',
      solution: 'We bypassed digital channels entirely - partnered with agricultural cooperatives and seed distributors for physical outreach, trained community champions to drive demos at farmer gatherings, and built offline-first functionality so the app worked without internet. Word-of-mouth became our primary growth engine.',
      results: [
        { metric: '+35%', label: 'Yield Improvement' },
        { metric: '500+', label: 'Farms Onboarded' },
        { metric: '92%', label: 'Detection Accuracy' },
        { metric: '10K+', label: 'Scans Processed' }
      ],
      niche: ['AgriTech', 'AI', 'Mobile-First'],
      testimonial: {
        quote: 'For the first time, small-scale farmers have access to technology that was once only available to large agricultural corporations.',
        author: 'Founder, Farmarly'
      }
    }
  ];

  const activeStudy = caseStudies[selectedStudy];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="Case Studies - Real Results"
        description="Real examples of growth systems we've built. See how we moved products from invisible to adopted."
        keywords="startup case studies, user acquisition examples, growth case studies, growth results"
        url="https://tunnels.ng/case-studies"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-tunnels-black/95 to-tunnels-black" />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Real <span className="text-tunnels-red">Results</span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Deep dives into how we built growth systems that turned products into users
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-tunnels-red" />
                <span>Real Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-tunnels-red" />
                <span>Founder Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-tunnels-red" />
                <span>Build Timelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section 
        id="selector-section" 
        data-section 
        className={`py-12 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('selector-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedStudy === index
                    ? 'bg-tunnels-red text-white'
                    : 'bg-tunnels-black border border-tunnels-darkgray/50 text-white/60 hover:text-white hover:border-tunnels-red/30'
                }`}
              >
                {study.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Case Study */}
      <section 
        id="study-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('study-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={activeStudy.image} 
                  alt={activeStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    {
                      value: activeStudy.category,
                      textClass: 'text-tunnels-red',
                      accent: 'from-tunnels-red/80 via-tunnels-red/30 to-transparent'
                    },
                    {
                      value: activeStudy.partnership,
                      textClass: 'text-white/70',
                      accent: 'from-white/60 via-white/30 to-transparent'
                    },
                    {
                      value: activeStudy.duration,
                      textClass: 'text-white/70',
                      accent: 'from-white/60 via-white/30 to-transparent'
                    }
                  ].map((label, idx) => (
                    <span
                      key={idx}
                      className={`relative inline-block text-sm font-medium ${label.textClass}`}
                    >
                      <span className="relative z-10 px-1">{label.value}</span>
                      <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${label.accent} -z-10`} />
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {activeStudy.title}
                </h2>
                <p className="text-xl text-tunnels-red mb-6">
                  {activeStudy.subtitle}
                </p>
                
                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activeStudy.results.map((result, i) => (
                    <div key={i} className="text-center p-3 bg-tunnels-dark rounded-lg">
                      <div className="text-xl font-bold text-tunnels-red">{result.metric}</div>
                      <div className="text-white/50 text-xs">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-dark">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-tunnels-red/10 rounded-lg flex items-center justify-center">
                    <span className="text-tunnels-red font-bold">1</span>
                  </span>
                  The Challenge
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {activeStudy.challenge}
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-dark">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-tunnels-red/10 rounded-lg flex items-center justify-center">
                    <span className="text-tunnels-red font-bold">2</span>
                  </span>
                  System We Built
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Industry & Testimonial */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50">
                <h3 className="text-lg font-semibold text-white mb-4">Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.niche.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-tunnels-dark text-white/70 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 rounded-2xl border border-tunnels-red/30 bg-tunnels-red/5">
                <p className="text-white/80 text-lg italic mb-4">
                  "{activeStudy.testimonial.quote}"
                </p>
                <p className="text-tunnels-red font-medium">
                  - {activeStudy.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section 
        id="all-studies-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('all-studies-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              More <span className="text-tunnels-red">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => {
                  setSelectedStudy(index);
                  document.getElementById('study-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left p-4 rounded-xl border transition-all duration-300 group ${
                  selectedStudy === index
                    ? 'border-tunnels-red bg-tunnels-red/10'
                    : 'border-tunnels-darkgray/50 hover:border-tunnels-red/30'
                }`}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-tunnels-red text-xs">{study.category}</span>
                <h3 className="text-white font-semibold mt-1">{study.title}</h3>
                <p className="text-white/50 text-sm line-clamp-2 mt-1">{study.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Story Could Be <span className="text-tunnels-red">Next</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Join the founders who've turned their ideas into thriving businesses. 
              Let's write your success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-dark border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
