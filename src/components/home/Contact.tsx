import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
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
          <div className="p-10 md:p-14">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to <span className="text-tunnels-red">Build</span>?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto text-lg">
                Whether you're looking to automate processes, launch an MVP, or scale your platform,
                let's build something extraordinary together.
              </p>
            </div>

            {/* Contact options */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a
                href="mailto:hello@tunnels.ng"
                className="group flex items-center gap-4 p-4 rounded-xl border border-tunnels-darkgray/30 hover:border-tunnels-gray/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-tunnels-gray text-sm">hello@tunnels.ng</p>
                </div>
              </a>

              <a
                href="tel:+2347089118412"
                className="group flex items-center gap-4 p-4 rounded-xl border border-tunnels-darkgray/30 hover:border-tunnels-gray/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-tunnels-gray text-sm">+234 708 911 8412</p>
                </div>
              </a>

              <Link
                to="/contact"
                className="group flex items-center gap-4 p-4 rounded-xl border border-tunnels-darkgray/30 hover:border-tunnels-gray/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Schedule a Call</p>
                  <p className="text-tunnels-gray text-sm">Book a consultation</p>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-tunnels-red text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light"
              >
                Start Your Project
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