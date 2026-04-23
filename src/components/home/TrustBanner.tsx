import { useState, useEffect, useRef } from 'react';

const TrustBanner = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-tunnels-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-tunnels-red/5 via-transparent to-tunnels-red/5" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-1.5 border border-tunnels-red/30 rounded-full mb-6">
            <span className="text-tunnels-red text-sm font-medium">Why Founders Trust Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            We are trusted for one thing:
            <br />
            <span className="text-tunnels-red">getting products used.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Not brand awareness. Not impressions. Not vanity metrics.
            We engineer the systems that move real humans from discovery to activation.
            That's it. That's the whole job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
