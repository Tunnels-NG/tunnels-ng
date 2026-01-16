import { useState, useEffect } from 'react';
import { ArrowRight, Check, Wallet, ShoppingBag, TrendingUp, UtensilsCrossed, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'saas', label: 'SaaS' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'agritech', label: 'AgriTech' },
    { id: 'foodtech', label: 'Food Tech' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Fenypay',
      category: 'fintech',
      description: 'A next-generation financial infrastructure powering seamless crypto on-ramp and off-ramp solutions across Africa. Complete with virtual and physical card issuance, Fenypay bridges the gap between traditional finance and the decentralized economy.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
      tags: ['React', 'Node.js', 'Blockchain', 'Card Issuing API'],
      metrics: { transactions: '100K+', countries: '12+', uptime: '99.99%' },
      link: '#',
      partnership: 'Equity Partnership'
    },
    {
      id: 2,
      title: 'Listdem',
      category: 'marketplace',
      description: 'The go-to classified listing platform built specifically for the African market. Listdem connects buyers and sellers across the continent, making it effortless to buy, sell, or trade anything from vehicles to real estate, electronics to services.',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
      metrics: { listings: '50K+', users: '200K+', cities: '30+' },
      link: '#',
      partnership: 'Build Now, Pay Later'
    },
    {
      id: 3,
      title: 'Zuura',
      category: 'saas',
      description: 'Revolutionizing how businesses sell online through the power of social commerce. Zuura is a comprehensive SaaS platform that transforms social media presence into a fully-functional storefront, enabling merchants to sell directly where their customers already spend time.',
      image: 'https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?w=600&q=80',
      tags: ['React', 'Python', 'MongoDB', 'Social APIs'],
      metrics: { merchants: '5K+', gmv: '$2M+', conversion: '+45%' },
      link: '#',
      partnership: 'Revenue Share'
    },
    {
      id: 4,
      title: 'OkansEat',
      category: 'foodtech',
      description: 'A cloud kitchen ecosystem reimagining food delivery and restaurant operations. OkansEat empowers food entrepreneurs to launch and scale virtual restaurants without the overhead of traditional brick-and-mortar establishments.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
      tags: ['React Native', 'Node.js', 'Firebase', 'Maps API'],
      metrics: { orders: '25K+', kitchens: '15+', rating: '4.8★' },
      link: '#',
      partnership: 'Equity Partnership'
    },
    {
      id: 5,
      title: 'KimX-01',
      category: 'fintech',
      description: 'An intelligent forex prediction and analysis platform leveraging advanced algorithms and market sentiment analysis. KimX-01 gives traders the edge they need with real-time insights, pattern recognition, and actionable trading signals.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
      tags: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      metrics: { accuracy: '78%+', signals: '500+/day', traders: '10K+' },
      link: '#',
      partnership: 'Build Now, Pay Later'
    },
    {
      id: 6,
      title: 'QuickFarm',
      category: 'agritech',
      description: 'Bridging the gap between farms and dinner tables. QuickFarm is an innovative platform that connects agricultural producers directly with consumers, eliminating middlemen and ensuring fresh, quality produce reaches households while farmers get fair compensation for their harvest.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
      tags: ['React Native', 'Node.js', 'PostgreSQL', 'Logistics API'],
      metrics: { farmers: '2K+', deliveries: '15K+', freshness: '24hrs' },
      link: '#',
      partnership: 'Equity Partnership'
    },
    {
      id: 7,
      title: 'Farmarly',
      category: 'agritech',
      description: 'Harnessing the power of artificial intelligence to transform agricultural practices. Farmarly provides farmers with data-driven insights on crop management, pest detection, yield optimization, and resource allocation, turning traditional farming into precision agriculture.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
      tags: ['Python', 'Computer Vision', 'React', 'IoT'],
      metrics: { yield: '+35%', farms: '500+', accuracy: '92%' },
      link: '#',
      partnership: 'Revenue Share'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { value: '25+', label: 'Ventures Built' },
    { value: '$5M+', label: 'Combined GMV' },
    { value: '12+', label: 'African Countries' },
    { value: '500K+', label: 'Users Served' }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Our Portfolio"
        description="Explore our portfolio of successful ventures including Fenypay, Listdem, Zuura, OkansEat, and more. See how we transform ideas into scalable products across fintech, e-commerce, agritech, and SaaS."
        keywords="software portfolio, fintech projects, SaaS projects, agritech solutions, e-commerce platforms, Fenypay, Listdem, Zuura, Nigerian startups, technology ventures"
        url="https://tunnels.ng/portfolio"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-tunnels-black/95 to-tunnels-black" />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-tunnels-red">Portfolio</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              A showcase of ventures we've built, partnered with, and helped scale. 
              Each project represents a unique partnership story.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              {['Fintech', 'SaaS', 'Marketplace', 'AgriTech', 'Food Tech'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 text-tunnels-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section" 
        data-section 
        className={`py-16 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('stats-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tunnels-red mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section 
        id="portfolio-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('portfolio-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-tunnels-red text-white'
                    : 'bg-tunnels-dark border border-tunnels-darkgray/50 text-white/60 hover:text-white hover:border-tunnels-red/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group rounded-2xl border border-tunnels-darkgray/50 overflow-hidden hover:border-tunnels-red/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-tunnels-dark relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tunnels-black via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-tunnels-black/80 text-tunnels-red text-xs font-medium rounded-full">
                      {project.partnership}
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tunnels-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-tunnels-darkgray text-white/60 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-tunnels-darkgray text-white/60 text-xs rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-tunnels-darkgray/50">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-tunnels-red font-semibold text-sm">{value}</div>
                        <div className="text-white/40 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <Link 
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-tunnels-red transition-colors text-sm"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section 
        id="industries-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('industries-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-tunnels-red">Serve</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our expertise spans multiple sectors, bringing cross-industry insights to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Wallet, title: 'Fintech', count: '8+ Ventures' },
              { icon: TrendingUp, title: 'SaaS', count: '10+ Ventures' },
              { icon: ShoppingBag, title: 'Marketplace', count: '5+ Ventures' },
              { icon: Sprout, title: 'AgriTech', count: '4+ Ventures' },
              { icon: UtensilsCrossed, title: 'Food Tech', count: '3+ Ventures' }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-tunnels-darkgray rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{industry.title}</h3>
                  <p className="text-tunnels-red text-sm">{industry.count}</p>
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
              Want to Be Our Next <span className="text-tunnels-red">Success Story</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Join the growing list of ventures we've helped build and scale. 
              Let's discuss how we can bring your vision to life.
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
                to="/venture-studio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-dark border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300"
              >
                Learn About Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
