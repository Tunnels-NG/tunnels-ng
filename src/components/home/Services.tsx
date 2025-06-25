import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Award, Rocket, Mail, Phone, MessageSquare, Send, Star, Zap, Shield, Target, Globe, Users, Code, Layers, ChevronDown, Play, X, Settings, TrendingUp, FileText, Lightbulb, BarChart3 } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Business Process Automation',
      description: 'Automate manual workflows with custom software, AI, and cloud-native tools to reduce costs and boost productivity.',
      features: ['Custom Workflow Design', 'AI Integration', 'Cloud Automation'],
      color: 'from-blue-600 to-blue-400',
      details: 'Transform your business operations with intelligent automation solutions. We design and implement custom workflows that eliminate repetitive tasks, reduce human error, and free up your team to focus on strategic initiatives. Our automation solutions integrate seamlessly with existing systems and scale with your business growth.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Strategic Partnership',
      description: 'Unlock growth potential through flexible engagement terms—crafted to match your pace, resources, and ambition.',
      features: ['Equity Partnerships', 'Deferred Payments', 'Flexible Terms'],
      color: 'from-yellow-600 to-yellow-400',
      details: 'Partner with us to build your digital infrastructure without upfront costs. Our Build-Now, Grow-Later model allows startups and early-stage companies to access world-class development services through equity partnerships or deferred payment arrangements, removing financial barriers to innovation.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'System Audit & Scalability',
      description: 'Identify bottlenecks, fortify security, and redesign architectures for effortless expansion.',
      features: ['Performance Analysis', 'Security Audits', 'Architecture Redesign'],
      color: 'from-green-600 to-green-400',
      details: 'Comprehensive evaluation of your existing systems to identify performance bottlenecks, security vulnerabilities, and scalability limitations. We provide detailed reports and implement solutions that prepare your infrastructure for exponential growth while maintaining security and performance standards.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'MVP Launch Services',
      description: 'Transform ideas into deployable MVPs with lean, agile processes that ensure speed without sacrificing quality.',
      features: ['Rapid Prototyping', 'Market Validation', 'Agile Development'],
      color: 'from-purple-600 to-purple-400',
      details: 'Fast-track your idea from concept to market with our streamlined MVP development process. We use lean methodologies and proven frameworks to build functional prototypes that allow you to test, validate, and iterate quickly, getting you to market ahead of the competition.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'IT Consultancy & Strategy',
      description: 'Advise on technology roadmaps—from tech-stack selection to cybersecurity and business continuity—to guide strategic tech decisions.',
      features: ['Technology Roadmaps', 'Architecture Planning', 'Security Strategy'],
      color: 'from-tunnels-red to-red-400',
      details: 'Strategic technology guidance tailored to your business objectives. Our consultants help you make informed decisions about technology investments, develop comprehensive IT strategies, and create roadmaps that align with your growth plans while ensuring security and compliance.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Bespoke solutions built with cutting-edge tech stacks that scale infinitely and drive business transformation.',
      features: ['Full-Stack Development', 'Modern Tech Stacks', 'Scalable Architecture'],
      color: 'from-indigo-600 to-indigo-400',
      details: 'End-to-end custom software development using the latest technologies and best practices. From web applications to mobile apps and enterprise systems, we build solutions that are robust, scalable, and perfectly aligned with your business requirements.'
    }
  ];

  const handleLearnMore = (service, index) => {
    setSelectedService({...service, index});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-tunnels-red to-pink-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of tech solutions designed to propel your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* <button 
                    onClick={() => handleLearnMore(service, index)}
                    className="group/btn flex items-center text-white font-semibold hover:text-red-400 transition-colors"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => window.open('/services', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-tunnels-red to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-red-500/25"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedService.color} p-3`}>
                  <div className="text-white">{selectedService.icon}</div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{selectedService.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.details}</p>
              
              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-tunnels-red to-red-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;