import React, { useState } from 'react';
import { ArrowRight, Check, Star, Users, Globe, Zap, Code, Settings, TrendingUp, Rocket, BarChart3, Shield, Clock, Award, Lightbulb, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState('automation');

  const services = [
    {
      id: 'automation',
      icon: <Settings className="w-8 h-8" />,
      title: 'Business Process Automation',
      tagline: 'Streamline. Optimize. Scale.',
      description: 'Transform your business operations with intelligent automation solutions that eliminate repetitive tasks and boost productivity.',
      longDescription: 'We analyze your current workflows and design custom solutions that seamlessly integrate with your existing systems. Our automation experts use cutting-edge technologies to create processes that significantly reduce operational costs while improving accuracy and speed.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'partnership',
      icon: <Users className="w-8 h-8" />,
      title: 'Growth-Aligned Partnerships',
      tagline: 'Build Now. Grow Together.',
      description: 'Innovative engagement models designed to match your pace, resources, and ambition, removing traditional barriers to world-class development.',
      longDescription: 'We offer unique partnership models that align our success with yours. Instead of traditional upfront payments, we work with you to create flexible arrangements that allow you to access enterprise-level development services while focusing on growth.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      outcomes: [
        'Access to experienced technical teams',
        'Aligned incentives for mutual success',
        'Flexible engagement structures',
        'Long-term strategic partnership'
      ],
      solutions: [
        'Innovative Engagement Models',
        'Strategic Technical Advisory',
        'Growth-Oriented Planning',
        'Flexible Partnership Terms'
      ],
      idealFor: ['Early-stage startups', 'Bootstrapped companies', 'Innovative business models', 'High-growth ventures'],
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      id: 'audit',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'System Audit & Optimization',
      tagline: 'Diagnose. Optimize. Scale.',
      description: 'Comprehensive evaluation of your existing systems to unlock performance improvements and prepare for exponential growth.',
      longDescription: 'Our expert engineers conduct thorough assessments of your current infrastructure, identifying opportunities for improvement and implementing solutions that prepare your systems for scale. We focus on performance, security, and cost optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
      deliverables: ['Comprehensive Assessment Report', 'Optimization Roadmap', 'Implementation Strategy'],
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'mvp',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rapid MVP Development',
      tagline: 'Idea to Market in Record Time.',
      description: 'Transform your ideas into market-ready products using proven acceleration methodologies that ensure speed without sacrificing quality.',
      longDescription: 'Our streamlined development process gets your product to market faster than traditional approaches. We use proven frameworks and lean methodologies to build functional products that allow you to test, validate, and iterate quickly.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      outcomes: [
        'Fast time to market',
        'Validate ideas before full investment',
        'Attract investors with working products',
        'Gather real user feedback early'
      ],
      solutions: [
        'Rapid Prototyping',
        'Market Validation',
        'User Experience Design',
        'Iterative Development'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'consultancy',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'IT Consultancy & Strategic Advisory',
      tagline: 'Expert Guidance. Smart Decisions.',
      description: 'Strategic technology guidance to help you make informed decisions about your tech investments and digital transformation.',
      longDescription: 'Our senior technology experts provide strategic guidance to help you navigate complex technology decisions. We develop comprehensive strategies that align with your business objectives and ensure your technology choices support long-term growth.',
      image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
        'Digital Transformation',
        'Expert Advisory & Consultation'
      ],
      color: 'from-red-600 to-red-400'
    },
    {
      id: 'development',
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Solutions',
      tagline: 'Bespoke Solutions, Infinite Scale.',
      description: 'End-to-end custom software development that perfectly aligns with your business requirements and scales with your growth.',
      longDescription: 'From web applications to mobile apps and enterprise systems, we build custom software solutions that are robust, scalable, and perfectly aligned with your business requirements. Our development team uses modern technologies and industry best practices.',
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
        'API Development',
        'Security & Compliance Systems'
      ],
      color: 'from-indigo-600 to-indigo-400'
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Technology solutions"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-purple-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
                <Award className="w-4 h-4 mr-2 text-red-500" />
                World-Class Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Services</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions that transform businesses, streamline operations, and drive sustainable growth.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm sm:text-base mb-8">
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span>Innovation-Driven Solutions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span>Value-Driven Partnerships</span>
                </div>
              </div>
              
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1739302750702-e26a61113758?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional team delivering solutions"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-blue-500/20">
              <Lightbulb className="w-4 h-4 mr-2 text-blue-500" />
              What We Deliver
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Transform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every solution we deliver is designed to solve real business problems and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Services Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        selectedService === service.id
                          ? `bg-gradient-to-r ${service.color} text-white shadow-lg transform scale-105`
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${selectedService === service.id ? 'bg-white/20' : 'bg-white/10'}`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">{service.title}</h4>
                          <p className={`text-xs sm:text-sm ${selectedService === service.id ? 'text-white/80' : 'text-gray-400'}`}>
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-8">
              {selectedServiceData && (
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                  {/* Service Image Header */}
                  <div className="relative h-64">
                    <img 
                      src={selectedServiceData.image}
                      alt={selectedServiceData.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedServiceData.color} p-3 mb-3`}>
                        <div className="text-white">{selectedServiceData.icon}</div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedServiceData.title}</h2>
                      <p className="text-red-400 font-semibold">{selectedServiceData.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-300 text-lg mb-6">{selectedServiceData.description}</p>
                    <p className="text-gray-300 mb-8 leading-relaxed">{selectedServiceData.longDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Target className="w-5 h-5 text-green-400 mr-2" />
                          Outcomes You'll See
                        </h4>
                        <div className="space-y-3">
                          {selectedServiceData.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          What We Deliver
                        </h4>
                        <div className="space-y-3">
                          {selectedServiceData.solutions.map((solution, i) => (
                            <div key={i} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedServiceData.idealFor && (
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Perfect For</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceData.idealFor.map((target, i) => (
                            <span key={i} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedServiceData.deliverables && (
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Key Deliverables</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceData.deliverables.map((deliverable, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform flex items-center justify-center"
                      >
                        Schedule Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      {/* <a
                        href="/contact"
                        className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center"
                      >
                        Schedule Consultation
                      </a> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">TunnelsNG</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just deliver solutions, we deliver results that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Guaranteed</h3>
              <p className="text-gray-300 leading-relaxed">Every solution goes through rigorous testing and quality assurance. We don't just meet expectations, we exceed them.</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Partnership Approach</h3>
              <p className="text-gray-300 leading-relaxed">We're not just vendors. We're strategic partners invested in your success. Your growth is our growth.</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
              <p className="text-gray-300 leading-relaxed">Every project starts with understanding your business goals. We measure our success by your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-purple-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Your Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a startup with a bold vision or an enterprise ready to scale, we're here to turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            {/* <a
              href="/contact"
              className="px-10 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Schedule Consultation
            </a> */}
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Affordable Consultation</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Flexible Engagement</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Global Delivery</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;