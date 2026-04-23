import { useState, useEffect, useRef } from 'react';
import { Search, PenTool, Zap } from 'lucide-react';

const HowWeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleStages, setVisibleStages] = useState(new Set<number>());
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
            const index = parseInt(entry.target.getAttribute('data-stage') || '0');
            setVisibleStages(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-stage]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      icon: Search,
      step: '01',
      title: 'Understand',
      subtitle: 'Product Reality',
      duration: '1-2 weeks',
      description: 'We audit your product, market position, and current growth gaps. No assumptions - just signal.',
      details: ['Product-market fit audit', 'Audience identification', 'Channel opportunity mapping', 'Competitive growth analysis']
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Design',
      subtitle: 'The Tunnel',
      duration: '1-2 weeks',
      description: 'We architect the conversion pathway - from first touch to active user - engineered for your specific product.',
      details: ['Entry point design', 'Conversion trigger mapping', 'Messaging & positioning strategy', 'Channel prioritization']
    },
    {
      icon: Zap,
      step: '03',
      title: 'Execute',
      subtitle: 'Execution',
      duration: '4-12 weeks',
      description: 'We build and operate the growth systems that push your product into real user environments.',
      details: ['Direct user acquisition', 'Community insertion campaigns', 'Content-driven growth', 'Activation optimization']
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-tunnels-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-tunnels-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-tunnels-red/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`mb-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-tunnels-red uppercase tracking-[0.3em] text-xs mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How We <span className="text-tunnels-red">Work</span>
          </h2>
          <p className="text-tunnels-lightgray max-w-xl mx-auto text-lg">
            Three stages. One goal: get your product to real users, fast.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  data-stage={index}
                  className={`relative p-8 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-black/40 hover:border-tunnels-red/30 transition-all duration-700 group ${
                    visibleStages.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-tunnels-red/10 border border-tunnels-red/30 flex items-center justify-center group-hover:bg-tunnels-red/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-tunnels-red" />
                    </div>
                    <span className="text-tunnels-red text-sm font-mono">{stage.step}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{stage.title}</h3>
                  <p className="text-tunnels-red text-sm font-medium mb-4">{stage.subtitle} &middot; {stage.duration}</p>
                  <p className="text-white/60 mb-6 leading-relaxed">{stage.description}</p>

                  <ul className="space-y-2">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <span className="w-1.5 h-1.5 bg-tunnels-red rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-tunnels-darkgray" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
