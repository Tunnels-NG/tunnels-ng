import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Settings, Rocket, Code, BarChart3, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const services = [
    {
      icon: Settings,
      title: 'Business Automation',
      description: 'Streamline operations with custom workflows, AI integration, and cloud-native automation tools.',
      link: '/services#automation'
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Launch faster with lean development processes. From idea to market in weeks, not months.',
      link: '/services#mvp'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Bespoke applications built with modern tech stacks that scale with your business.',
      link: '/services#custom'
    },
    {
      icon: BarChart3,
      title: 'IT Consultancy',
      description: 'Strategic technology guidance, architecture planning, and digital transformation roadmaps.',
      link: '/services#consultancy'
    },
    {
      icon: Shield,
      title: 'System Audit',
      description: 'Identify bottlenecks, security vulnerabilities, and optimization opportunities.',
      link: '/services#audit'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate decisions and enhance user experiences.',
      link: '/services#ai'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services Built for <span className="text-tunnels-red">Growth</span>
          </h2>
          <p className="text-tunnels-lightgray max-w-xl mx-auto text-lg">
            Comprehensive technology solutions designed to accelerate your business 
            and give you a competitive edge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`group relative p-8 rounded-2xl bg-tunnels-dark border border-tunnels-darkgray/50 transition-all duration-300 hover:border-tunnels-gray ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-tunnels-red text-white' 
                    : 'bg-tunnels-darkgray text-tunnels-red'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-tunnels-lightgray leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-tunnels-red font-medium">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-1' : ''
                  }`} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-tunnels-darkgray text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-dark hover:border-tunnels-gray"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;