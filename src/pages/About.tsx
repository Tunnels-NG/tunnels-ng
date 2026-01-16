import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Heart, Eye, Lightbulb, Trophy, Handshake, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex business challenges.',
      icon: Lightbulb,
    },
    {
      title: 'Excellence',
      description: 'We deliver high-quality solutions and commit to exceeding expectations in everything we do.',
      icon: Trophy,
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual growth.',
      icon: Handshake,
    },
    {
      title: 'Impact',
      description: 'We measure success by the transformative impact our solutions create for businesses.',
      icon: Zap,
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Countries Served", value: "15+" },
    { label: "Years of Innovation", value: "8+" }
  ];

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
    { name: 'Kaart247', src: '/assets/Kaart247.png' },
  ];

  // Split partners into two rows
  const firstRow = partners.slice(0, 9);
  const secondRow = partners.slice(9);

  return (
    <div className="bg-tunnels-black text-white overflow-hidden">
      <SEO 
        title="About Us"
        description="Learn about Tunnels.ng - Africa's leading technology venture studio. Discover our mission to empower founders and businesses through innovative technology partnerships, MVP development, and business automation."
        keywords="about tunnels ng, technology venture studio Africa, Nigerian tech company, startup partnership, MVP development team, Lagos software company"
        url="https://tunnels.ng/about"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-tunnels-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/team.jpg"
            alt="TunnelsNG team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-tunnels-black/90 to-tunnels-black" />
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              We Are <span className="text-tunnels-red">TunnelsNG</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10">
              Since 2018, we've been turning bold ideas into revenue-generating products. 
              A technology venture studio trusted by founders across 15+ countries to build, partner, and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="flex items-center justify-center gap-2 text-white/70">
                <Check className="w-5 h-5 text-tunnels-red" />
                <span>Build Now, Pay Later</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/70">
                <Check className="w-5 h-5 text-tunnels-red" />
                <span>Equity Partnerships Available</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/70">
                <Check className="w-5 h-5 text-tunnels-red" />
                <span>15+ Countries Served</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="story"
        data-section
        className={`py-24 bg-tunnels-dark transition-all duration-700 ${
          visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Built for <span className="text-tunnels-red">Founders</span>
              </h2>
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  <span className="text-white">In 2018, we launched TunnelsNG</span> with a singular mission: to ensure brilliant ideas never die in the "what if" stage. We understood the frustration of founders with game-changing concepts but without the capital or technical expertise to bring them to life.
                </p>
                
                <p>
                  Since then, we've delivered <span className="text-white">100+ products and helped launch startups across 15+ countries</span>, from Lagos to London, Nairobi to New York. We don't just write code; we become your technical co-founder. Through our <span className="text-white">Build Now, Pay Later</span> model and <span className="text-white">Equity Partnership</span> options, we remove every barrier standing between your idea and its success.
                </p>
                
                <p>
                  From automating complex business operations to launching market-ready MVPs in weeks, our track record speaks for itself. The startups we've built are generating revenue, scaling globally, and changing industries.
                </p>

                <p>
                  <span className="text-white">Your idea deserves to exist.</span> Let's make it happen.
                </p>
              </div>
            </div>
            
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden">
                <img 
                  src="/assets/project-hero.jpg"
                  alt="TunnelsNG team collaborating"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/assets/code.jpg"
                  alt="Development work"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/assets/result..jpg"
                  alt="Results delivery"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        id="mission-vision"
        data-section
        className={`py-24 bg-tunnels-black transition-all duration-700 ${
          visibleSections.has('mission-vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="p-8 rounded-2xl border border-tunnels-darkgray/50">
              <div className="w-14 h-14 rounded-xl bg-tunnels-red/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-tunnels-red" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To eliminate the barriers between great ideas and successful products. We empower founders and businesses with world-class technology, flexible partnership models, and the execution power to build products that matter.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl border border-tunnels-darkgray/50">
              <div className="w-14 h-14 rounded-xl bg-tunnels-red/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-tunnels-red" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To become Africa's leading technology venture studio, the place where founders transform bold visions into billion-dollar realities, regardless of starting capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values"
        data-section
        className={`py-24 bg-tunnels-dark transition-all duration-700 ${
          visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Drives <span className="text-tunnels-red">Us</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              The principles that guide every line of code, every partnership, and every product we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group p-6 rounded-2xl border border-tunnels-darkgray/50 hover:border-tunnels-gray/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Same as landing page */}
      <section 
        id="partners"
        data-section
        className={`py-24 bg-tunnels-black relative overflow-hidden transition-all duration-700 ${
          visibleSections.has('partners') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tunnels-red/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at center, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted by <span className="text-tunnels-red">Industry Leaders</span>
            </h2>
            <p className="text-tunnels-lightgray max-w-2xl mx-auto text-lg md:text-xl">
              Building successful partnerships with innovative companies worldwide
            </p>
          </div>

          {/* First row - moves left */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-4">
              <div className="flex animate-marquee-left items-center">
                {[...firstRow, ...firstRow].map((partner, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-3 md:mx-5">
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
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-tunnels-black via-tunnels-black/80 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-4">
              <div className="flex animate-marquee-right items-center">
                {[...secondRow, ...secondRow].map((partner, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-3 md:mx-5">
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
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-tunnels-dark">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Have an Idea Worth <span className="text-tunnels-red">Building</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Whether you need a technical co-founder, want to explore equity partnerships, or simply need world-class development, we're ready.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
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
    </div>
  );
};

export default About;