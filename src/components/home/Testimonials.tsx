import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Isioma Richards',
      role: 'Founder & CEO',
      company: 'FenyPay',
      logo: '/assets/Fenypay2.png',
      quote: "Tunnels transformed how we think about user acquisition in fintech. They built the growth infrastructure that took us from 0 to 100K+ transactions across 12 African countries. Real systems, real results.",
      rating: 5,
      results: '100K+ transactions, 12 countries'
    },
    {
      name: 'C. Eko',
      role: 'Founder',
      company: 'Zura',
      logo: '/assets/zura-logo.png',
      quote: "We had social sellers but no system to convert them. Tunnels built the activation engine that turned our product into a merchant-acquisition machine. 5K+ merchants in 4 months wasn't magic, it was methodology.",
      rating: 5,
      results: '5K+ merchants, $2M+ GMV'
    },
    {
      name: 'Kachi I.',
      role: 'Co-Founder',
      company: 'Postject',
      logo: '/assets/Postject-logo.png',
      quote: "Developer tools live or die by adoption velocity. Tunnels understood this deeply - they engineered our entire go-to-market strategy and execution. We went from invisible to processing 500K+ API calls monthly in 3 months.",
      rating: 5,
      results: '500K+ API calls/month'
    },
    {
      name: 'Jessica Okan',
      role: 'Founder',
      company: 'OkansEat',
      logo: '/assets/OkanEats.png',
      quote: "Cloud kitchens are only viable with consistent order volume. Tunnels built the user acquisition systems that turned our concept into a thriving business. From launch to 25K+ orders in 6 months.",
      rating: 5,
      results: '25K+ orders, 4.8★ rating'
    },
    {
      name: 'Karo O.',
      role: 'CEO',
      company: 'Educential',
      logo: '/assets/Educential.png',
      quote: "Education platforms need trust and scale simultaneously. Tunnels crafted our positioning, built our content engine, and designed conversion pathways that actually work. We're now the go-to platform for relocation-via-education in West Africa.",
      rating: 5,
      results: 'Market leader, 10K+ students'
    },
    {
      name: 'Jay Abanum',
      role: 'Managing Partner',
      company: 'Jayco',
      logo: '/assets/Jayco.png',
      quote: "As investors, we've seen countless 'growth agencies.' Tunnels is different - they think like operators, not consultants. Every portfolio company we've referred has seen measurable traction. They're the growth partner we wish existed when we were building.",
      rating: 5,
      results: '3+ portfolio companies scaled'
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-tunnels-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tunnels-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tunnels-red/5 rounded-full blur-3xl" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-tunnels-red">Partners</span> Say
          </h2>
          <p className="text-tunnels-lightgray text-lg md:text-xl max-w-2xl mx-auto">
            Founders share how Tunnels engineered their growth breakthroughs
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main testimonial card */}
          <div className="relative">
            {/* Large quote icon */}
            <Quote className="absolute -top-8 -left-4 w-20 h-20 text-tunnels-red/10" />
            
            <div className="bg-tunnels-dark border border-tunnels-darkgray rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-tunnels-red/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-tunnels-red/30 rounded-br-2xl" />

              {/* Testimonial content */}
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Author info */}
                  <div className="flex-shrink-0">
                    <div className="relative mb-6">
                      {/* Company Logo */}
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-4 flex items-center justify-center border-2 border-tunnels-darkgray/30 hover:border-tunnels-red/30 transition-colors relative overflow-hidden">
                        <img
                          src={testimonials[currentIndex].logo}
                          alt={`${testimonials[currentIndex].company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to initial if logo doesn't load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.classList.add('bg-gradient-to-br', 'from-tunnels-red', 'to-tunnels-red/70');
                              parent.classList.remove('bg-white');
                              const fallback = document.createElement('span');
                              fallback.className = 'text-4xl md:text-5xl font-bold text-white';
                              fallback.textContent = testimonials[currentIndex].company.charAt(0);
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-tunnels-red/10 rounded-2xl blur-xl -z-10" />
                    </div>

                    <div className="text-center md:text-left">
                      <p className="text-tunnels-red font-bold text-lg mb-1">
                        {testimonials[currentIndex].company}
                      </p>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-tunnels-lightgray text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mt-4 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-tunnels-red text-tunnels-red" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    {/* Results highlight */}
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wide">
                      <span className="text-tunnels-red">Result</span>
                      <span className="relative inline-block text-base normal-case tracking-normal text-white">
                        <span className="relative z-10 px-1">{testimonials[currentIndex].results}</span>
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-tunnels-red/70 via-tunnels-red/30 to-transparent -z-10" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-tunnels-darkgray bg-tunnels-dark/50 text-white hover:border-tunnels-red hover:text-tunnels-red transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-tunnels-red rounded-full'
                        : 'w-2 h-2 bg-tunnels-darkgray rounded-full hover:bg-tunnels-gray'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-tunnels-darkgray bg-tunnels-dark/50 text-white hover:border-tunnels-red hover:text-tunnels-red transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
