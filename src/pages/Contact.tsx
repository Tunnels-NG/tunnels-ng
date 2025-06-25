import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Award, Rocket, Mail, Phone, MessageSquare, Send, Star, Zap, Shield, Target, Globe, Users, Code, Layers, ChevronDown, Play, X, Settings, TrendingUp, FileText, Lightbulb, BarChart3, Menu, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Calculate progress
    const newData = { ...formData, [name]: value };
    let progress = 0;
    if (newData.name.length > 2) progress += 33;
    if (newData.email.includes('@') && newData.email.includes('.')) progress += 33;
    if (newData.message.length > 10) progress += 34;
    setFormProgress(progress);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setFormProgress(0);
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Connect</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss your project and build something extraordinary together.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                      Ready to revolutionize your business? Our team responds within 2 hours.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'hello@tunnelsng.tech', href: 'mailto:hello@tunnelsng.tech' },
                      { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+234 800 TUNNELS', href: 'tel:+2348008866357' },
                      { icon: <MessageSquare className="w-6 h-6" />, label: 'Live Chat', value: 'Available 24/7', href: '#' }
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="group flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.label}</div>
                          <div className="text-gray-300">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Progress Indicator */}
                  {formProgress > 0 && (
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500 ease-out"
                          style={{ width: `${formProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          focusedField === 'name' ? 'border-blue-500 ring-blue-500/20' : 'border-white/20'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          focusedField === 'email' ? 'border-blue-500 ring-blue-500/20' : 'border-white/20'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full p-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                          focusedField === 'message' ? 'border-blue-500 ring-blue-500/20' : 'border-white/20'
                        }`}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || formProgress < 100}
                      className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                        formProgress === 100 && !isSubmitting
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25'
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
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose TunnelsNG?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We're committed to delivering exceptional results and building lasting partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Clock className="w-8 h-8" />, value: '2hr', label: 'Response Time' },
                { icon: <Shield className="w-8 h-8" />, value: '24/7', label: 'Support' },
                { icon: <Target className="w-8 h-8" />, value: '100%', label: 'Confidential' },
                { icon: <Award className="w-8 h-8" />, value: '5★', label: 'Rating' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;