import { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Globe, Zap } from 'lucide-react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const metrics = [
    { icon: Users, value: '12K+', label: 'Users Acquired', description: 'Real users pushed into real products' },
    { icon: TrendingUp, value: '3.2x', label: 'Avg. Activation Lift', description: 'Improvement in user activation rates' },
    { icon: Globe, value: '18+', label: 'Products Helped', description: 'Across multiple sectors and markets' },
    { icon: Zap, value: '2-4 wks', label: 'First Users', description: 'Average time to first acquired users' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-tunnels-red uppercase tracking-[0.3em] text-xs mb-4">Growth Metrics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-tunnels-red">Matter</span>
          </h2>
          <p className="text-tunnels-lightgray max-w-xl mx-auto text-lg">
            We measure what counts: users acquired, activation rates, and time to signal.
          </p>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-8 border border-tunnels-darkgray rounded-2xl bg-tunnels-dark/50 hover:border-tunnels-red/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-tunnels-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-tunnels-red/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-tunnels-red" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-tunnels-red text-sm font-medium mb-2">{metric.label}</div>
                <div className="text-white/40 text-xs">{metric.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
