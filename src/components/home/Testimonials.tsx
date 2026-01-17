import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      company: 'FinFlow',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      quote: "Tunnels.ng didn't just build our fintech platform, they became strategic partners in our growth. In 8 weeks, we went from concept to processing over $2M monthly. Their execution speed and business acumen set them apart.",
      rating: 5,
      results: '$2M+ monthly transactions'
    },
    {
      name: 'Michael Okonkwo',
      role: 'Co-Founder',
      company: 'LogiTech Africa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      quote: "We needed more than developers. We needed partners who understood scaling a logistics business across Africa. Tunnels brought technical excellence and strategic thinking that helped us expand to 15 cities.",
      rating: 5,
      results: '15 cities, 500% growth'
    },
    {
      name: 'Amara Williams',
      role: 'Product Lead',
      company: 'HealthBridge',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80',
      quote: "The partnership approach changed everything. Tunnels automated our entire patient management system and stayed engaged to ensure adoption. We saw 60% time savings within the first month.",
      rating: 5,
      results: '60% time saved'
    },
    {
      name: 'David Mensah',
      role: 'Founder',
      company: 'EduScale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      quote: "From MVP to 50,000 users in 6 months. Tunnels understood our vision for democratizing education and built a platform that scales beautifully. They operate like an extension of our founding team.",
      rating: 5,
      results: '50K users in 6 months'
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
            Founders and leaders share their experience building with Tunnels.ng
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
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-tunnels-red/30">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-tunnels-red/20 rounded-full blur-xl -z-10" />
                    </div>
                    
                    <div className="mt-4 text-center md:text-left">
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-tunnels-red font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-tunnels-lightgray text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mt-3 justify-center md:justify-start">
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

          {/* Mini testimonial cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  index === currentIndex
                    ? 'bg-tunnels-red/10 border-tunnels-red/50'
                    : 'bg-tunnels-dark/30 border-tunnels-darkgray hover:border-tunnels-gray'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white text-sm font-medium truncate">{testimonial.name}</p>
                    <p className="text-tunnels-lightgray text-xs truncate">{testimonial.company}</p>
                  </div>
                </div>
                <p className={`text-xs font-medium ${index === currentIndex ? 'text-tunnels-red' : 'text-tunnels-lightgray'}`}>
                  {testimonial.results}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
