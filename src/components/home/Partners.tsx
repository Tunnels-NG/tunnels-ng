import { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const partners = [
    { name: 'Jaycolinks', src: '/assets/Jayco.png' },
    { name: 'Ndonu', src: '/assets/Ndonu.png' },
    { name: 'Rendezvouscare', src: '/assets/Rendezvouscare.png' },
    { name: 'Symbi', src: '/assets/symbi.png' },
    { name: 'Taskpadi', src: '/assets/Taskpadi.jpg' },
    { name: 'Listdem', src: '/assets/Listdem.jpg' },
    { name: 'Payrendr', src: '/assets/Payrendr.png' },
    { name: 'AWS', src: '/assets/AWS.png' },
    { name: 'GCP', src: '/assets/GCP.png' },
    { name: 'Azure', src: '/assets/Azure.png' },
    { name: 'Google', src: '/assets/Google.png' },
    { name: 'Oracle', src: '/assets/Oracle.png' },
    { name: 'Jetbrain', src: '/assets/JetBrains.png' },
    { name: 'Okaneats', src: '/assets/OkanEats.png' },
    { name: 'Educential', src: '/assets/Educential.png' },
    { name: 'Fenypay', src: '/assets/Fenypay.jpg' },
    { name: 'Jayrify', src: '/assets/Jayrify.png' },
    { name: 'VTB', src: '/assets/VTB.png' },
    { name: 'Moniepoint', src: '/assets/Moniepoint.png' },
    { name: 'Meta', src: '/assets/Meta.png' },
    { name: 'Kaart247', src: '/assets/Kaart247.png' }
  ];

  // Split partners into two rows
  const firstRow = partners.slice(0, 9);
  const secondRow = partners.slice(9);

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
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tunnels-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by <span className="text-tunnels-red">Industry Leaders</span>
          </h2>
          <p className="text-tunnels-lightgray max-w-2xl mx-auto text-lg md:text-xl">
            Building successful partnerships with innovative companies worldwide
          </p>
        </div>

        {/* First row - moves left */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee-left items-center">
              {[...firstRow, ...firstRow].map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-3 md:mx-5"
                >
                  <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row - moves right */}
        <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee-right items-center">
              {[...secondRow, ...secondRow].map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-3 md:mx-5"
                >
                  <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center p-6 border border-tunnels-darkgray rounded-xl bg-tunnels-dark/50 hover:border-tunnels-red/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-tunnels-red mb-1">18+</div>
            <div className="text-tunnels-lightgray text-sm">Partner Companies</div>
          </div>
          <div className="text-center p-6 border border-tunnels-darkgray rounded-xl bg-tunnels-dark/50 hover:border-tunnels-red/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-tunnels-red mb-1">5+</div>
            <div className="text-tunnels-lightgray text-sm">Cloud Partners</div>
          </div>
          <div className="text-center p-6 border border-tunnels-darkgray rounded-xl bg-tunnels-dark/50 hover:border-tunnels-red/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-tunnels-red mb-1">100%</div>
            <div className="text-tunnels-lightgray text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 border border-tunnels-darkgray rounded-xl bg-tunnels-dark/50 hover:border-tunnels-red/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-tunnels-red mb-1">∞</div>
            <div className="text-tunnels-lightgray text-sm">Growth Potential</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;