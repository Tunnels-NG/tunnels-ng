import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EngagementModels = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const models = [
    {
      title: 'Build Now, Pay Later',
      subtitle: 'Zero Risk. Full Ownership.',
      description: "Don't let capital constraints stop you from building. Start your project with zero upfront costs and pay only when your business starts generating revenue.",
      features: ['Zero upfront costs', 'Revenue-based repayment', 'Full ownership from day one'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      layout: 'image-right'
    },
    {
      title: 'Equity Partnership',
      subtitle: 'We Become Your Technical Co-Founder.',
      description: 'In exchange for equity, we invest our expertise, time, and resources into building your product. Our incentives are fully aligned with your long-term success.',
      features: ['Long-term partnership', 'Shared risk & reward', 'Strategic guidance'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      layout: 'image-left'
    },
    {
      title: 'Project-Based',
      subtitle: 'Traditional. Transparent. Trusted.',
      description: 'Fixed-scope engagements with transparent pricing and clear deliverables. A dedicated team with milestone-based payments that give you control throughout.',
      features: ['Clear deliverables', 'Milestone payments', 'Dedicated team'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      layout: 'image-right'
    }
  ];

  return (
    <section className="py-24 bg-tunnels-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-tunnels-red/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-tunnels-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We <span className="text-tunnels-red">Partner</span> With You
          </h2>
          <p className="text-tunnels-lightgray text-lg md:text-xl max-w-2xl mx-auto">
            Flexible partnership models designed to remove barriers and align our success with yours.
          </p>
        </div>

        <div className="space-y-32">
          {models.map((model, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Content */}
              <div className={`${model.layout === 'image-left' ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {model.title}
                </h3>
                <p className="text-xl md:text-2xl text-tunnels-red font-medium mb-6">
                  {model.subtitle}
                </p>
                <p className="text-tunnels-lightgray text-lg leading-relaxed mb-8">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {model.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="flex items-center gap-2 text-white/90 text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-tunnels-red" />
                      <span className="relative inline-block">
                        <span className="relative z-10 px-1">{feature}</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/80 via-white/30 to-transparent -z-10" />
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${model.layout === 'image-left' ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-tunnels-red/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner accents */}
                  <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-tunnels-red rounded-tl-lg" />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-tunnels-red rounded-br-lg" />
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={model.image}
                      alt={model.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tunnels-dark/60 via-transparent to-transparent" />
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                      <div className="absolute w-full h-px bg-tunnels-red/50 animate-pulse" style={{ top: '30%' }} />
                      <div className="absolute w-full h-px bg-tunnels-red/30 animate-pulse" style={{ top: '60%', animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-tunnels-red text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:shadow-xl hover:shadow-tunnels-red/20 hover:gap-4"
          >
            Let's Discuss Your Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
