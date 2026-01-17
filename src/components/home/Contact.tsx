import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-10 md:p-14 bg-tunnels-dark border border-tunnels-darkgray/50 rounded-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready for a Serious <span className="text-tunnels-red">Tech Partner</span>?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Whether you need strategic advisory, scalable execution, or a long-term venture partner, 
                we work with teams committed to building real businesses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-10 py-4 bg-tunnels-red text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/venture-studio/apply"
                className="inline-flex items-center gap-2 px-10 py-4 border border-tunnels-gray text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-dark hover:border-tunnels-lightgray"
              >
                Apply to Venture Studio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;