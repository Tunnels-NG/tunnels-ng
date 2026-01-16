import { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 100, suffix: '+', label: 'Projects Delivered', description: 'Across multiple industries' },
    { value: 50, suffix: '+', label: 'Happy Clients', description: 'Startups to enterprises' },
    { value: 4, suffix: '+', label: 'Years Experience', description: 'Building digital products' },
    { value: 15, suffix: '+', label: 'Countries Reached', description: 'Global client base' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-tunnels-red relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  {isVisible ? <Counter end={stat.value} /> : '0'}
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/80">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-white/70 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return <>{count}</>;
};

export default Stats;
