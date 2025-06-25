import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check, Star, Users, Globe, Zap, Code, Settings, TrendingUp, Rocket, BarChart3, Shield, ChevronDown, ChevronUp, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState('automation');
  const [selectedPackage, setSelectedPackage] = useState('startup');

  const services = [
    {
      id: 'automation',
      icon: <Settings className="w-8 h-8" />,
      title: 'Business Process Automation',
      tagline: 'Streamline. Optimize. Scale.',
      description: 'Transform your business operations with intelligent automation solutions that eliminate repetitive tasks and boost productivity.',
      longDescription: 'Our automation experts analyze your current workflows and design custom solutions that integrate seamlessly with your existing systems. Using cutting-edge AI and cloud-native tools, we create automated processes that reduce operational costs by up to 60% while improving accuracy and speed.',
      features: [
        'Custom Workflow Design & Implementation',
        'AI-Powered Process Intelligence',
        'Cloud-Native Automation Tools',
        'Legacy System Integration',
        'Real-time Analytics & Monitoring',
        'Scalable Architecture Design'
      ],
      benefits: [
        'Reduce operational costs by 40-60%',
        'Eliminate human error in repetitive tasks',
        'Free up team resources for strategic work',
        'Improve process speed and consistency',
        'Real-time visibility into operations'
      ],
      technologies: ['Python', 'Node.js', 'AWS Lambda', 'Azure Functions', 'Zapier', 'Custom APIs'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'partnership',
      icon: <Users className="w-8 h-8" />,
      title: 'Strategic Partnership',
      tagline: 'Build Now. Grow Together.',
      description: 'Flexible engagement models designed to match your pace, resources, and ambition through equity partnerships and deferred payments.',
      longDescription: 'Our Build-Now, Grow-Later model removes the upfront cost barrier for startups and early-stage companies. We invest in your vision by providing world-class development services in exchange for equity or deferred payments, allowing you to focus on growth while we handle the technical infrastructure.',
      features: [
        'Equity-Based Development Partnerships',
        'Deferred Payment Options',
        'Flexible Engagement Terms',
        'Long-term Strategic Planning',
        'Technical Advisory Services',
        'Growth-Oriented Roadmaps'
      ],
      benefits: [
        'Zero upfront development costs',
        'Access to experienced technical team',
        'Aligned incentives for success',
        'Flexible payment structures',
        'Long-term partnership approach'
      ],
      idealFor: ['Early-stage startups', 'Bootstrapped companies', 'Innovative business models', 'Scalable tech ventures'],
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      id: 'audit',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'System Audit & Scalability',
      tagline: 'Diagnose. Optimize. Scale.',
      description: 'Comprehensive evaluation of your existing systems to identify bottlenecks, security vulnerabilities, and scalability opportunities.',
      longDescription: 'Our expert engineers conduct thorough audits of your current infrastructure, identifying performance bottlenecks, security vulnerabilities, and architectural limitations. We provide detailed reports with actionable recommendations and implement solutions that prepare your systems for exponential growth.',
      features: [
        'Comprehensive Infrastructure Assessment',
        'Performance Bottleneck Analysis',
        'Security Vulnerability Scanning',
        'Database Optimization',
        'Architecture Redesign',
        'Cloud Migration Strategy'
      ],
      benefits: [
        'Improve system performance by 3-10x',
        'Identify and fix security vulnerabilities',
        'Reduce infrastructure costs',
        'Prepare for high-traffic scenarios',
        'Optimize database performance'
      ],
      deliverables: ['Detailed Audit Report', 'Security Assessment', 'Performance Metrics', 'Optimization Roadmap', 'Implementation Plan'],
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'mvp',
      icon: <Rocket className="w-8 h-8" />,
      title: 'MVP Launch Services',
      tagline: 'Idea to Market in Record Time.',
      description: 'Transform your ideas into deployable MVPs using lean, agile processes that ensure speed without sacrificing quality.',
      longDescription: 'Our streamlined MVP development process gets your product to market faster than traditional development approaches. Using proven frameworks and lean methodologies, we build functional prototypes that allow you to test, validate, and iterate quickly, giving you a competitive edge.',
      features: [
        'Rapid Prototype Development',
        'Market Validation Testing',
        'Lean Development Methodology',
        'User Experience Optimization',
        'Analytics Integration',
        'Iterative Improvement Process'
      ],
      timeline: [
        'Week 1-2: Requirements & Planning',
        'Week 3-6: Core Development',
        'Week 7-8: Testing & Refinement',
        'Week 9-10: Launch & Optimization'
      ],
      benefits: [
        'Time to market in 6-10 weeks',
        'Validate ideas before full investment',
        'Attract investors with working prototype',
        'Gather real user feedback early',
        'Reduce development risks'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'consultancy',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'IT Consultancy & Strategy',
      tagline: 'Strategic Technology Leadership.',
      description: 'Expert guidance on technology roadmaps, architecture decisions, and digital transformation strategies.',
      longDescription: 'Our senior technology consultants provide strategic guidance to help you make informed decisions about technology investments. We develop comprehensive IT strategies, create roadmaps aligned with your business objectives, and ensure your technology choices support long-term growth.',
      features: [
        'Technology Roadmap Development',
        'Architecture Planning & Design',
        'Digital Transformation Strategy',
        'Cybersecurity Planning',
        'Cloud Strategy & Migration',
        'Team Training & Knowledge Transfer'
      ],
      expertise: [
        'Cloud Architecture (AWS, Azure, GCP)',
        'DevOps & CI/CD Implementation',
        'Microservices Architecture',
        'Security & Compliance',
        'Database Design & Optimization',
        'API Strategy & Design'
      ],
      benefits: [
        'Make informed technology decisions',
        'Avoid costly architectural mistakes',
        'Align IT strategy with business goals',
        'Optimize technology investments',
        'Reduce technical debt'
      ],
      color: 'from-red-600 to-red-400'
    },
    {
      id: 'development',
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Development',
      tagline: 'Bespoke Solutions, Infinite Scale.',
      description: 'End-to-end custom software development using cutting-edge technologies and best practices.',
      longDescription: 'From web applications to mobile apps and enterprise systems, we build custom software solutions that are robust, scalable, and perfectly aligned with your business requirements. Our full-stack development team uses modern technologies and follows industry best practices to deliver high-quality solutions.',
      features: [
        'Full-Stack Web Development',
        'Mobile App Development (iOS/Android)',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Database Design & Implementation',
        'DevOps & Deployment Automation'
      ],
      technologies: [
        'Frontend: React, Next.js, Vue.js, React Native',
        'Backend: Node.js, Python, .NET, Java',
        'Databases: PostgreSQL, MongoDB, Redis',
        'Cloud: AWS, Azure, Google Cloud',
        'DevOps: Docker, Kubernetes, CI/CD'
      ],
      benefits: [
        'Tailored to your exact requirements',
        'Scalable and maintainable code',
        'Modern, responsive user interfaces',
        'Secure and performant architecture',
        'Ongoing support and maintenance'
      ],
      color: 'from-indigo-600 to-indigo-400'
    }
  ];

  const packages = {
    startup: {
      name: 'Startup Package',
      price: '$15,000 - $50,000',
      description: 'Perfect for early-stage startups and MVP development',
      features: [
        'MVP Development (6-10 weeks)',
        'Basic automation setup',
        'Strategic partnership options',
        'Technical advisory sessions',
        'Cloud deployment',
        '3 months support'
      ]
    },
    growth: {
      name: 'Growth Package',
      price: '$50,000 - $150,000',
      description: 'For scaling businesses ready to optimize and expand',
      features: [
        'Full system audit & optimization',
        'Advanced automation implementation',
        'Custom software development',
        'Security & compliance review',
        'Team training & knowledge transfer',
        '6 months support'
      ]
    },
    enterprise: {
      name: 'Enterprise Package',
      price: '$150,000+',
      description: 'Comprehensive solutions for established organizations',
      features: [
        'Complete digital transformation',
        'Enterprise-grade custom development',
        'Advanced security implementation',
        'Multi-system integration',
        'Dedicated technical team',
        '12 months support & maintenance'
      ]
    }
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Navbar />
          {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive technology solutions that transform businesses, streamline operations, and drive sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Global Outlook</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Innovation-Driven Solutions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Value-Driven Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Services Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        selectedService === service.id
                          ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10'
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
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedServiceData.color} p-4 flex items-center justify-center`}>
                      <div className="text-white">{selectedServiceData.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedServiceData.title}</h2>
                      <p className="text-red-400 font-semibold text-lg">{selectedServiceData.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6">{selectedServiceData.description}</p>
                  <p className="text-gray-300 mb-8 leading-relaxed">{selectedServiceData.longDescription}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {selectedServiceData.features.map((feature, i) => (
                          <div key={i} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        Benefits
                      </h4>
                      <div className="space-y-3">
                        {selectedServiceData.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedServiceData.technologies && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Technologies We Use</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedServiceData.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedServiceData.timeline && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Development Timeline</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedServiceData.timeline.map((phase, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center mr-3 flex-shrink-0">
                              {i + 1}
                            </div>
                            {phase}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedServiceData.expertise && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Our Expertise</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedServiceData.expertise.map((skill, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <Shield className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedServiceData.idealFor && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedServiceData.idealFor.map((target, i) => (
                          <span key={i} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink
                      to='/contact' 
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform flex items-center justify-center"    
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </NavLink>
                    <NavLink
                      to='/contact' 
                        className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center"
                    >
                      Schedule Consultation
                      <ExternalLink className="w-4 h-4 ml-2" /> 
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-lg sm:text-xl text-gray-300">Choose the package that fits your business stage and requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(packages).map(([key, pkg]) => (
              <div 
                key={key}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPackage === key 
                    ? 'border-red-500 bg-gradient-to-br from-red-900/20 to-purple-900/20' 
                    : 'border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:border-white/20'
                }`}
                onClick={() => setSelectedPackage(key)}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">{pkg.price}</div>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">{pkg.description}</p>
                
                <div className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
                  Choose This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 bg-gradient-to-r from-red-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive your business forward. Schedule a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Schedule Call
            </button>
            <button className="flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </button>
            <button className="flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Chat
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Lagos-based with international clients and partnerships</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">MVP in 6-10 weeks, rapid prototyping and deployment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of successful projects and satisfied clients</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose TunnelsNg Section */}
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose TunnelsNg?</h2>
            <p className="text-xl text-gray-300">Our unique approach to technology partnerships sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Partnership Approach</h3>
              <p className="text-gray-300">We're not just vendors – we're invested in your success through equity partnerships and long-term relationships.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Innovation</h3>
              <p className="text-gray-300">From idea to market in record time using lean methodologies and cutting-edge technologies.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300">Every solution we build is designed to scale with your business growth and evolving needs.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-gray-300">Enterprise-grade security and compliance built into every solution from day one.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Standards</h3>
              <p className="text-gray-300">International quality standards with local market understanding and competitive pricing.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Technology</h3>
              <p className="text-gray-300">Latest technologies and best practices ensure your solutions are future-ready and maintainable.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      {/* <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we turn your vision into reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
              <p className="text-gray-300">We understand your business, challenges, and goals through detailed consultation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive strategy and roadmap tailored to your requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Execution</h3>
              <p className="text-gray-300">Our expert team implements the solution using agile methodologies and best practices.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth</h3>
              <p className="text-gray-300">We provide ongoing support and optimization to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Amazing</span> Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a startup with a bold vision or an enterprise ready to transform, we're here to turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NavLink
              to='/contact' 
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              Start Your Project
            </NavLink>
            <NavLink
              to='/contact' 
                className="px-10 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Schedule Consultation
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;