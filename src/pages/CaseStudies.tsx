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
      partnership: 'Equity Partnership',
      duration: '6 Months',
      challenge: 'African users faced significant barriers accessing cryptocurrency markets. Complex onboarding, limited payment options, and no easy way to convert crypto to spendable cash. Traditional banks were slow to adapt, leaving a massive gap in the market.',
      solution: 'We built Fenypay from the ground up as a comprehensive financial infrastructure. The platform features seamless fiat-to-crypto conversion, virtual and physical card issuance, and integration with local payment systems across 12 African countries.',
      results: [
        { metric: '100K+', label: 'Transactions Processed' },
        { metric: '12', label: 'Countries Covered' },
        { metric: '99.99%', label: 'Uptime Achieved' },
        { metric: '$2M+', label: 'Monthly Volume' }
      ],
      technologies: ['React', 'Node.js', 'Blockchain APIs', 'Card Issuing Infrastructure'],
      testimonial: {
        quote: 'Tunnels did not just build our platform, they helped us reimagine what financial access could look like for Africans.',
        author: 'Founder, Fenypay'
      }
    },
    {
      id: 2,
      title: 'Zuura',
      subtitle: 'Transforming Social Media into Storefronts',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?w=800&q=80',
      partnership: 'Revenue Share',
      duration: '4 Months',
      challenge: 'Small merchants across Africa were selling on Instagram and WhatsApp but struggled with inventory management, payments, and order tracking. They needed enterprise-level tools without enterprise-level complexity or cost.',
      solution: 'Zuura emerged as an all-in-one social commerce platform. Merchants can create digital storefronts, sync products to social media, accept multiple payment methods, and track orders, all from a single dashboard.',
      results: [
        { metric: '5K+', label: 'Active Merchants' },
        { metric: '$2M+', label: 'GMV Processed' },
        { metric: '+45%', label: 'Conversion Lift' },
        { metric: '3min', label: 'Avg Setup Time' }
      ],
      technologies: ['React', 'Python', 'MongoDB', 'Instagram & WhatsApp APIs'],
      testimonial: {
        quote: 'The team understood our market deeply. They built exactly what African merchants needed, not what Silicon Valley thinks we need.',
        author: 'Co-founder, Zuura'
      }
    },
    {
      id: 3,
      title: 'Listdem',
      subtitle: 'Africa\'s Trusted Classified Marketplace',
      category: 'Marketplace',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      partnership: 'Build Now, Pay Later',
      duration: '5 Months',
      challenge: 'Existing classified platforms weren\'t designed for African markets. Users needed a trustworthy platform with local payment integration, fraud protection, and support for the unique ways Africans buy and sell.',
      solution: 'We developed Listdem as a mobile-first classified platform with built-in verification systems, escrow payments, and location-based discovery. The platform supports everything from vehicles to real estate to services.',
      results: [
        { metric: '50K+', label: 'Active Listings' },
        { metric: '200K+', label: 'Registered Users' },
        { metric: '30+', label: 'Cities Covered' },
        { metric: '85%', label: 'Mobile Traffic' }
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS Infrastructure'],
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
      partnership: 'Revenue Share',
      duration: '7 Months',
      challenge: 'African farmers lacked access to modern agricultural technology. Crop diseases, unpredictable yields, and inefficient resource use were costing them billions annually. They needed affordable, accessible AI tools.',
      solution: 'Farmarly uses computer vision and machine learning to provide real-time crop health monitoring, disease detection, and yield predictions. Farmers can simply snap photos of their crops and receive instant actionable insights.',
      results: [
        { metric: '+35%', label: 'Yield Improvement' },
        { metric: '500+', label: 'Farms Onboarded' },
        { metric: '92%', label: 'Detection Accuracy' },
        { metric: '10K+', label: 'Scans Processed' }
      ],
      technologies: ['Python', 'TensorFlow', 'React Native', 'IoT Sensors'],
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
        title="Case Studies"
        description="Explore detailed case studies of our successful ventures including Fenypay, Zuura, Listdem, and Farmarly. See how we solved complex challenges and delivered measurable results."
        keywords="software case studies, fintech success stories, MVP case study, startup success, technology transformation, Fenypay case study, Nigerian tech startups"
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
              Case <span className="text-tunnels-red">Studies</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Deep dives into how we've partnered with founders to build 
              products that solve real problems and create lasting impact.
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
                  <span className="px-3 py-1 bg-tunnels-red/10 text-tunnels-red text-sm rounded-full">
                    {activeStudy.category}
                  </span>
                  <span className="px-3 py-1 bg-tunnels-dark text-white/60 text-sm rounded-full">
                    {activeStudy.partnership}
                  </span>
                  <span className="px-3 py-1 bg-tunnels-dark text-white/60 text-sm rounded-full">
                    {activeStudy.duration}
                  </span>
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
                  Our Solution
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Technologies & Testimonial */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-tunnels-darkgray/50">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.technologies.map((tech, i) => (
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
