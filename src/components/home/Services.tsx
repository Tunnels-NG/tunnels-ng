import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, Wrench, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<number>());
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-service-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const servicePillars = [
    {
      icon: Search,
      title: 'Advisory & Audit',
      description: 'Strategic technology guidance and system evaluation to optimize your digital infrastructure. We assess your current systems, identify opportunities, and create actionable roadmaps for transformation.',
      services: ['IT Consultancy', 'System Audit', 'Technology Strategy', 'Digital Transformation'],
      cta: 'Explore Advisory',
      link: '/services#advisory',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      icon: Wrench,
      title: 'Build & Automation',
      description: 'End-to-end development and automation solutions that transform ideas into scalable products. From rapid MVP development to enterprise-grade custom software, we build technology that drives revenue.',
      services: ['MVP Development', 'Custom Software', 'Business Automation', 'AI Integration'],
      cta: 'Explore Build Services',
      link: '/services#build',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
      icon: Rocket,
      title: 'Venture Studio',
      description: 'Long-term partnerships for founders ready to co-build technology businesses that endure. We invest our expertise, resources, and network to help you build and scale revenue-generating products.',
      services: ['Co-building', 'Equity Partnership', 'Profit Sharing', 'Strategic Support'],
      cta: 'Venture Studio',
      link: '/venture-studio',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tunnels-red/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-tunnels-red/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tunnels-red/3 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.5) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`mb-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How We Help Businesses <span className="text-tunnels-red">Grow With Technology</span>
          </h2>
          <p className="text-tunnels-lightgray max-w-xl mx-auto text-lg">
            Three focused pathways to accelerate your business through technology.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {servicePillars.map((pillar, index) => (
            <div
              key={index}
              data-service-section
              data-index={index}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
                visibleSections.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Text Content - alternates position */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {/* Animated Icon */}
                <div className="mb-8 relative">
                  <div className={`w-20 h-20 rounded-2xl bg-tunnels-red/10 border border-tunnels-red/30 flex items-center justify-center transition-all duration-500 ${
                    hoveredSection === index ? 'scale-110 bg-tunnels-red/20 border-tunnels-red/50' : ''
                  }`}>
                    <pillar.icon className={`w-10 h-10 text-tunnels-red transition-transform duration-500 ${
                      hoveredSection === index ? 'scale-110' : ''
                    }`} />
                  </div>
                  {/* Pulsing ring effect */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl border border-tunnels-red/20 animate-ping opacity-0 ${
                    visibleSections.has(index) ? 'opacity-30' : ''
                  }`} style={{ animationDuration: '2s', animationIterationCount: '3' }} />
                </div>

                <Link to={pillar.link} className="group inline-block">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 group-hover:text-tunnels-red transition-colors duration-300 flex items-center gap-4 relative">
                    <span className="relative">
                      {pillar.title}
                      {/* Underline effect */}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-tunnels-red group-hover:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight className="w-10 h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                </Link>
                
                <p className="text-tunnels-lightgray text-xl leading-relaxed mb-10">
                  {pillar.description}
                </p>

                <ul className="grid grid-cols-2 gap-4">
                  {pillar.services.map((service, i) => (
                    <li 
                      key={i} 
                      className={`flex items-center text-white/80 text-lg transition-all duration-300 ${
                        visibleSections.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${i * 100 + 400}ms` }}
                    >
                      <span className={`w-2.5 h-2.5 bg-tunnels-red rounded-full mr-4 flex-shrink-0 transition-transform duration-300 ${
                        hoveredSection === index ? 'scale-150' : ''
                      }`} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image - alternates position */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative group/image">
                  {/* Animated border frame */}
                  <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-tunnels-red/50 via-tunnels-red/20 to-tunnels-red/50 opacity-0 transition-opacity duration-500 ${
                    hoveredSection === index ? 'opacity-100' : ''
                  }`} style={{ 
                    background: hoveredSection === index 
                      ? 'linear-gradient(90deg, rgba(249,115,22,0.5), rgba(249,115,22,0.1), rgba(249,115,22,0.5))' 
                      : 'transparent',
                    backgroundSize: '200% 100%',
                    animation: hoveredSection === index ? 'shimmer 2s linear infinite' : 'none'
                  }} />
                  
                  {/* Main image container */}
                  <div className="relative rounded-2xl overflow-hidden border border-tunnels-darkgray/50 bg-tunnels-dark">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className={`w-full h-[450px] object-cover transition-all duration-700 ${
                        hoveredSection === index ? 'scale-105' : ''
                      }`}
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tunnels-black/80 via-tunnels-black/20 to-transparent" />
                    <div className={`absolute inset-0 bg-tunnels-red/10 mix-blend-overlay transition-opacity duration-500 ${
                      hoveredSection === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Corner tech accents */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-tunnels-red/50" />
                    <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-tunnels-red/50" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-tunnels-red/50" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-tunnels-red/50" />
                    
                    {/* Scanning line effect */}
                    <div className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tunnels-red/60 to-transparent transition-all duration-1000 ${
                      visibleSections.has(index) ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      top: visibleSections.has(index) ? '100%' : '0%',
                      animation: visibleSections.has(index) ? 'scanLine 3s ease-in-out infinite' : 'none'
                    }} />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className={`absolute -top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 border-2 border-tunnels-red/20 rounded-2xl -z-10 transition-transform duration-500 ${
                    hoveredSection === index ? 'scale-110 rotate-3' : ''
                  }`} />
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-40 h-40 bg-tunnels-red/5 rounded-2xl -z-10 transition-transform duration-500 ${
                    hoveredSection === index ? 'scale-110 -rotate-3' : ''
                  }`} />
                  
                  {/* Glowing orb effect */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tunnels-red/20 rounded-full blur-[80px] -z-10 transition-all duration-500 ${
                    hoveredSection === index ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes via style tag */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes scanLine {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Services;