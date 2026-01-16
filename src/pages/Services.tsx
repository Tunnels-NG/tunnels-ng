import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Users, Code, Settings, Rocket, BarChart3, Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState('automation');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection observer for scroll animations
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

  // Canvas animation for hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating particles
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; opacity: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.03)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const services = [
    {
      id: 'automation',
      icon: Settings,
      title: 'Business Process Automation',
      tagline: 'Streamline. Optimize. Scale.',
      description: 'Transform your business operations with intelligent automation solutions that eliminate repetitive tasks and boost productivity.',
      longDescription: 'We analyze your current workflows and design custom solutions that seamlessly integrate with your existing systems. Our automation experts use cutting-edge technologies to create processes that significantly reduce operational costs while improving accuracy and speed.',
      outcomes: [
        'Reduce operational costs by 40-60%',
        'Eliminate human error in repetitive tasks',
        'Free up team resources for strategic work',
        'Improve process speed and consistency'
      ],
      solutions: [
        'Custom Workflow Solutions',
        'Intelligent Process Design',
        'System Integration',
        'Performance Monitoring'
      ]
    },
    {
      id: 'partnership',
      icon: Users,
      title: 'Growth-Aligned Partnerships',
      tagline: 'Build Now. Grow Together.',
      description: 'Innovative engagement models designed to match your pace, resources, and ambition, removing traditional barriers to world-class development.',
      longDescription: 'We offer unique partnership models that align our success with yours. Through Build Now Pay Later and Equity Partnership options, we work with you to create flexible arrangements that allow you to access enterprise-level development services while focusing on growth.',
      outcomes: [
        'Access to experienced technical teams',
        'Aligned incentives for mutual success',
        'Flexible engagement structures',
        'Long-term strategic partnership'
      ],
      solutions: [
        'Build Now, Pay Later',
        'Equity Partnerships',
        'Strategic Technical Advisory',
        'Growth-Oriented Planning'
      ],
      idealFor: ['Early-stage startups', 'Bootstrapped companies', 'Innovative business models', 'High-growth ventures']
    },
    {
      id: 'audit',
      icon: BarChart3,
      title: 'System Audit & Optimization',
      tagline: 'Diagnose. Optimize. Scale.',
      description: 'Comprehensive evaluation of your existing systems to unlock performance improvements and prepare for exponential growth.',
      longDescription: 'Our expert engineers conduct thorough assessments of your current infrastructure, identifying opportunities for improvement and implementing solutions that prepare your systems for scale. We focus on performance, security, and cost optimization.',
      outcomes: [
        'Improve system performance by 3-10x',
        'Identify and resolve critical issues',
        'Reduce infrastructure costs',
        'Prepare for high-traffic scenarios'
      ],
      solutions: [
        'Infrastructure Assessment',
        'Performance Optimization',
        'Security Enhancement',
        'Scalability Planning'
      ],
      deliverables: ['Comprehensive Assessment Report', 'Optimization Roadmap', 'Implementation Strategy']
    },
    {
      id: 'mvp',
      icon: Rocket,
      title: 'Rapid MVP Development',
      tagline: 'Idea to Market in Record Time.',
      description: 'Transform your ideas into market-ready products using proven acceleration methodologies that ensure speed without sacrificing quality.',
      longDescription: 'Our streamlined development process gets your product to market faster than traditional approaches. We use proven frameworks and lean methodologies to build functional products that allow you to test, validate, and iterate quickly.',
      outcomes: [
        'Launch in weeks, not months',
        'Validate ideas before full investment',
        'Attract investors with working products',
        'Gather real user feedback early'
      ],
      solutions: [
        'Rapid Prototyping',
        'Market Validation',
        'User Experience Design',
        'Iterative Development'
      ]
    },
    {
      id: 'consultancy',
      icon: Target,
      title: 'IT Consultancy & Advisory',
      tagline: 'Expert Guidance. Smart Decisions.',
      description: 'Strategic technology guidance to help you make informed decisions about your tech investments and digital transformation.',
      longDescription: 'Our senior technology experts provide strategic guidance to help you navigate complex technology decisions. We develop comprehensive strategies that align with your business objectives and ensure your technology choices support long-term growth.',
      outcomes: [
        'Make informed technology decisions',
        'Avoid costly architectural mistakes',
        'Align IT strategy with business goals',
        'Optimize technology investments'
      ],
      solutions: [
        'IT Consultation Services',
        'Technology Strategy Development',
        'Architecture Planning', 
        'Digital Transformation'
      ]
    },
    {
      id: 'development',
      icon: Code,
      title: 'Custom Software Solutions',
      tagline: 'Bespoke Solutions. Infinite Scale.',
      description: 'End-to-end custom software development that perfectly aligns with your business requirements and scales with your growth.',
      longDescription: 'From web applications to mobile apps and enterprise systems, we build custom software solutions that are robust, scalable, and perfectly aligned with your business requirements. Our development team uses modern technologies and industry best practices.',
      outcomes: [
        'Tailored to your exact requirements',
        'Scalable and maintainable solutions',
        'Modern, responsive interfaces',
        'Secure and performant architecture'
      ],
      solutions: [
        'Full-Stack Development',
        'Mobile Applications', 
        'Enterprise Solutions',
        'API Development'
      ]
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Our Services"
        description="Explore our comprehensive technology services including business process automation, MVP development, custom software solutions, and enterprise systems. Transform your business with cutting-edge technology."
        keywords="business automation services, MVP development, custom software development, enterprise solutions, SaaS development, mobile app development, web development Nigeria, fintech development"
        url="https://tunnels.ng/services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        {/* Animated canvas background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ top: 0 }}
        />
        
        {/* Corner accents */}
        <div className="absolute top-24 left-6 md:left-10 lg:left-16 w-16 h-16 border-l-2 border-t-2 border-tunnels-red/30 pointer-events-none" />
        <div className="absolute top-24 right-6 md:right-10 lg:right-16 w-16 h-16 border-r-2 border-t-2 border-tunnels-red/30 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-tunnels-red">Services</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Comprehensive technology solutions designed to transform your business, 
              streamline operations, and drive sustainable growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white/70 group">
                <div className="w-6 h-6 rounded-full border border-tunnels-red/50 flex items-center justify-center group-hover:bg-tunnels-red/20 transition-colors">
                  <Check className="w-3 h-3 text-tunnels-red" />
                </div>
                <span>Innovation-Driven</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 group">
                <div className="w-6 h-6 rounded-full border border-tunnels-red/50 flex items-center justify-center group-hover:bg-tunnels-red/20 transition-colors">
                  <Check className="w-3 h-3 text-tunnels-red" />
                </div>
                <span>Results-Focused</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 group">
                <div className="w-6 h-6 rounded-full border border-tunnels-red/50 flex items-center justify-center group-hover:bg-tunnels-red/20 transition-colors">
                  <Check className="w-3 h-3 text-tunnels-red" />
                </div>
                <span>Partnership-First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" data-section className={`py-20 bg-tunnels-dark relative transition-all duration-700 ${visibleSections.has('services-section') ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Solutions That <span className="text-tunnels-red">Deliver</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Every solution we build is designed to solve real business problems and drive measurable results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Services Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border group ${
                        selectedService === service.id
                          ? 'bg-tunnels-red border-tunnels-red text-white scale-[1.02]'
                          : 'bg-tunnels-black border-tunnels-darkgray/50 text-white/70 hover:border-tunnels-red/30 hover:text-white hover:scale-[1.01]'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          selectedService === service.id ? 'bg-white/20' : 'bg-tunnels-darkgray group-hover:bg-tunnels-red/20'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{service.title}</h4>
                          <p className={`text-xs ${selectedService === service.id ? 'text-white/80' : 'text-white/50'}`}>
                            {service.tagline}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selectedService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-8">
              {selectedServiceData && (
                <div className="p-8 md:p-10 rounded-2xl border border-tunnels-darkgray/50 bg-tunnels-black relative overflow-hidden group">
                  {/* Glow effect on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-tunnels-red/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-tunnels-red/10 flex items-center justify-center border border-tunnels-red/20">
                        <selectedServiceData.icon className="w-7 h-7 text-tunnels-red" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedServiceData.title}</h2>
                        <p className="text-tunnels-red font-medium">{selectedServiceData.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-lg mb-4">{selectedServiceData.description}</p>
                    <p className="text-white/60 mb-8 leading-relaxed">{selectedServiceData.longDescription}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-tunnels-red rounded-full" />
                          Outcomes You'll See
                        </h4>
                        <div className="space-y-3">
                          {selectedServiceData.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-3 text-white/70 group/item hover:text-white transition-colors">
                              <Check className="w-5 h-5 text-tunnels-red mt-0.5 flex-shrink-0" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-tunnels-red rounded-full" />
                          What We Deliver
                        </h4>
                        <div className="space-y-3">
                          {selectedServiceData.solutions.map((solution, i) => (
                            <div key={i} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                              <div className="w-1.5 h-1.5 bg-tunnels-red rounded-full mt-2 flex-shrink-0" />
                              <span>{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedServiceData.idealFor && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Perfect For</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceData.idealFor.map((target, i) => (
                            <span key={i} className="px-3 py-1 bg-tunnels-red/10 text-tunnels-red rounded-full text-sm border border-tunnels-red/20 hover:bg-tunnels-red/20 transition-colors cursor-default">
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedServiceData.deliverables && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Deliverables</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceData.deliverables.map((deliverable, i) => (
                            <span key={i} className="px-3 py-1 bg-tunnels-darkgray text-white/70 rounded-full text-sm hover:text-white transition-colors cursor-default">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-section" data-section className={`py-24 bg-tunnels-black relative transition-all duration-700 ${visibleSections.has('why-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-tunnels-red">TunnelsNG</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We don't just deliver solutions. We deliver results that transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Check, title: 'Quality Guaranteed', desc: 'Every solution goes through rigorous testing. We don\'t just meet expectations, we exceed them.' },
              { icon: Users, title: 'Partnership Approach', desc: 'We\'re not vendors. We\'re strategic partners invested in your success. Your growth is our growth.' },
              { icon: Target, title: 'Results-Driven', desc: 'Every project starts with understanding your business goals. We measure our success by yours.' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-tunnels-darkgray/50 group hover:border-tunnels-red/30 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-tunnels-darkgray flex items-center justify-center mb-4 group-hover:bg-tunnels-red transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-tunnels-dark relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tunnels-red/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tunnels-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-tunnels-red">Transform</span> Your Business?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Whether you're a startup with a bold vision or an enterprise ready to scale, we're here to turn your ideas into reality.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3 hover:shadow-lg hover:shadow-tunnels-red/20"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/60">
              {['Free Consultation', 'Flexible Engagement', 'Global Delivery'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 hover:text-white transition-colors">
                  <div className="w-5 h-5 rounded-full border border-tunnels-red/50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-tunnels-red" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;