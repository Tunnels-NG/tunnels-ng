import { useState, useEffect, useRef } from 'react';

const ClarityLayer = () => {
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
    <section ref={sectionRef} className="py-24 bg-tunnels-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tunnels-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-tunnels-red uppercase tracking-[0.3em] text-xs mb-6">The Real Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Products don't fail because they're <span className="text-tunnels-red">bad</span>.
            <br />
            They fail because nobody <span className="text-tunnels-red">finds</span> them.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            You built something real. But the gap between a working product and actual users isn't about talent or funding.
            It's about getting found. Without the right systems to put your product in front of people who need it, great work stays invisible.
            That's what we fix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClarityLayer;
