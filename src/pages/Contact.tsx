import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Award, Rocket, Mail, Phone, MessageSquare, Send, Star, Zap, Shield, Target, Globe, Users, Code, Layers, ChevronDown, Play, X, Settings, TrendingUp, FileText, Lightbulb, BarChart3, Menu, Clock, MapPin, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// EmailJS Configuration 
const EMAILJS_CONFIG = {
  serviceId: 'service_dklrwlt',              // From Email Services
  templateIdCustomer: 'template_customer',   // Customer template ID
  templateIdAdmin: 'template_admin',         // Admin template ID
  publicKey: 'qhtEaObeaR1XYXprU'          // From Account settings
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', project: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const newData = { ...formData, [name]: value };
    let progress = 0;
    if (newData.name.length > 2) progress += 16.67;
    if (newData.email.includes('@') && newData.email.includes('.')) progress += 16.67;
    if (newData.company.length > 1) progress += 16.66;
    if (newData.budget.length > 0) progress += 16.67;
    if (newData.project.length > 1) progress += 16.67;
    if (newData.message.length > 10) progress += 16.66;
    setFormProgress(Math.round(progress));
  };

  const handleProjectTypeSelect = (type) => {
    setSelectedProjectType(type);
    setFormData(prev => ({ ...prev, project: type }));
    
    const newData = { ...formData, project: type };
    let progress = 0;
    if (newData.name.length > 2) progress += 16.67;
    if (newData.email.includes('@') && newData.email.includes('.')) progress += 16.67;
    if (newData.company.length > 1) progress += 16.66;
    if (newData.budget.length > 0) progress += 16.67;
    if (newData.project.length > 1) progress += 16.67;
    if (newData.message.length > 10) progress += 16.66;
    setFormProgress(Math.round(progress));
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        budget: formData.budget || 'Not specified',
        project_type: formData.project,
        message: formData.message,
        to_email: formData.email
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateIdCustomer,
        templateParams
      );

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateIdAdmin,
        templateParams
      );

      setSubmitStatus('success');
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', company: '', budget: '', project: '', message: '' });
      setSelectedProjectType('');
      setFormProgress(0);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { id: 'automation', label: 'Business Automation', icon: <Settings className="w-5 h-5" /> },
    { id: 'mvp', label: 'MVP Development', icon: <Rocket className="w-5 h-5" /> },
    { id: 'audit', label: 'System Audit', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'consultancy', label: 'IT Consultancy', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'development', label: 'Custom Development', icon: <Code className="w-5 h-5" /> },
    { id: 'partnership', label: 'Strategic Partnership', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for reaching out. We've sent a confirmation to your email and our team will respond within 2 hours.
              </p>
              
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/85 to-gray-900/90"></div>
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
              <MessageSquare className="w-4 h-4 mr-2 text-red-500" />
              Let's Connect
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Let's Build</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Something Amazing</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss your project and create solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-blue-500/20">
                    <Target className="w-4 h-4 mr-2 text-blue-500" />
                    Get in Touch
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Transform</span> Your Business?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Our team of experts is ready to discuss your project and provide tailored solutions that drive real results.
                  </p>
                </div>
                
                {/* Contact Methods */}
                <div className="space-y-6">
                  {[
                    { 
                      icon: <Mail className="w-6 h-6" />, 
                      label: 'Email Us', 
                      value: 'hello@tunnels.ng', 
                      description: 'Send us a detailed message',
                      href: 'mailto:hello@tunnels.ng',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    { 
                      icon: <Phone className="w-6 h-6" />, 
                      label: 'Call Us', 
                      value: '+234 Tunnels', 
                      description: 'Speak directly with our team',
                      href: 'tel:+2347089118412',
                      color: 'from-green-500 to-emerald-500'
                    },
                    { 
                      icon: <MessageSquare className="w-6 h-6" />, 
                      label: 'Schedule Call',
                      value: 'Book a consultation', 
                      description: 'Pick a convenient time to discuss your strategy',
                      href: 'https://calendly.com/tunnelsnig',
                      target: '_blank',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.target}
                      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="group block p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                          <p className="text-red-400 font-medium mb-1">{item.value}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Progress Indicator */}
                {formProgress > 0 && (
                  <div className="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {formProgress}%
                      </div>
                      <div>
                        <div className="font-semibold text-white">Form Progress</div>
                        <div className="text-gray-300 text-sm">
                          {formProgress === 100 ? 'Ready to send!' : 'Keep going...'}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-500 ease-out"
                        style={{ width: `${formProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Shield className="w-5 h-5" />, label: '100% Confidential' },
                    { icon: <Clock className="w-5 h-5" />, label: '2hr Response' },
                    { icon: <Award className="w-5 h-5" />, label: 'Quality Guaranteed' },
                    { icon: <Globe className="w-5 h-5" />, label: 'Global Support' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-300">
                      <div className="text-red-500">{item.icon}</div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                    <p className="text-gray-300">Tell us about your project and we'll get back to you within 2 hours.</p>
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-red-400 font-semibold mb-1">Failed to send message</h4>
                        <p className="text-gray-300 text-sm">Please try again or contact us directly at hello@tunnels.ng</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                            focusedField === 'name' ? 'border-red-500 ring-red-500/20' : 'border-white/20'
                          }`}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                            focusedField === 'email' ? 'border-red-500 ring-red-500/20' : 'border-white/20'
                          }`}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          focusedField === 'company' ? 'border-red-500 ring-red-500/20' : 'border-white/20'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Project Budget (USD)</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          focusedField === 'budget' ? 'border-red-500 ring-red-500/20' : 'border-white/20'
                        }`}
                        placeholder="e.g. $50,000 - $100,000"
                      />
                    </div>

                    {/* Project Type Selection */}
                    <div>
                      <label className="block text-white font-semibold mb-4">Project Type *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handleProjectTypeSelect(type.label)}
                            className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                              selectedProjectType === type.label
                                ? 'bg-gradient-to-r from-red-500 to-pink-500 border-red-500 text-white'
                                : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {type.icon}
                              <span className="text-sm font-medium">{type.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                          focusedField === 'message' ? 'border-red-500 ring-red-500/20' : 'border-white/20'
                        }`}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        required
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || formProgress < 100}
                      className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                        formProgress === 100 && !isSubmitting
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-red-500/25'
                          : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>Sending... <div className="ml-2 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></>
                      ) : (
                        <>Send Message <Send className="ml-2 w-5 h-5" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team ready to help"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-purple-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Ready to Start Yet?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            That's okay! Learn more about our services or connect with us when you're ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Learn About Us
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Book Consultation</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
