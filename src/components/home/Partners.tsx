import React from 'react';
import { Building } from 'lucide-react';

const Partners = () => {
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
    { name: 'VTB', src: '/assets/VTB.png' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
            <Building className="w-4 h-4 mr-2 text-red-500" />
            Our Partners
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Powering innovation with our strategic partners worldwide
          </p>
        </div>

        {/* Scrolling Partners Banner */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 w-24 h-16 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-white/90 rounded-lg flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300 hover:bg-white group">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 w-24 h-16 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-white/90 rounded-lg flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300 hover:bg-white group">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>

        {/* Bottom stats */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Joining forces with <span className="text-white font-semibold">industry leaders</span> to deliver exceptional results
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;