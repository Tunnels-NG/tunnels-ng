import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MessageSquare, Send, Shield, X, Settings, TrendingUp, Code, BarChart3, CheckCircle, AlertCircle, Rocket, Search } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { EMAILJS_CONFIG } from '@/lib/email';


const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', project: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleProjectTypeSelect = (type: string) => {
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
    { id: 'automation', label: 'Business Automation', icon: Settings },
    { id: 'mvp', label: 'MVP Development', icon: Rocket },
    { id: 'audit', label: 'System Audit', icon: TrendingUp },
    { id: 'consultancy', label: 'IT Consultancy', icon: BarChart3 },
    { id: 'development', label: 'Custom Development', icon: Code },
    { id: 'advisory', label: 'Advisory & Strategy', icon: Search }
  ];

  const contactMethods = [
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'hello@tunnels.ng', 
      description: 'Send us a detailed message',
      href: 'mailto:hello@tunnels.ng'
    },
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: '+234 708 911 8412', 
      description: 'Speak directly with our team',
      href: 'tel:+2347089118412'
    },
    { 
      icon: MessageSquare, 
      label: 'Schedule Call',
      value: 'Book a consultation', 
      description: 'Pick a convenient time',
      href: 'https://calendly.com/tunnelsnig',
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Contact TunnelsNG"
        description="Start an advisory, build, or automation engagement with TunnelsNG—Lagos technology partners for serious founders and enterprises."
        keywords="contact tunnelsng, technology services nigeria, advisory request, business automation nigeria, system audit contact"
        url="https://tunnels.ng/contact"
      />
      <Navbar />
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-tunnels-dark border border-tunnels-darkgray/50 rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-white/60 mb-6">
                Thank you for reaching out. We've sent a confirmation to your email and will review your request shortly.
              </p>
              
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-tunnels-red text-white font-semibold rounded-lg hover:bg-tunnels-red-light transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Work <span className="text-tunnels-red">With Us</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Reach out for advisory, build, or automation services. For long-term venture partnerships, please apply through our Venture Studio.
            </p>

            <Link
              to="/venture-studio/apply"
              className="inline-flex items-center gap-2 text-tunnels-red hover:text-tunnels-red-light transition-colors font-medium"
            >
              Apply to Venture Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-tunnels-dark">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Get in <span className="text-tunnels-red">Touch</span>
                  </h2>
                  <p className="text-white/60 text-lg">
                    We respond to qualified service inquiries. Initial discussion subject to evaluation.
                  </p>
                </div>
                
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="group block p-5 bg-tunnels-black rounded-xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-tunnels-darkgray rounded-lg flex items-center justify-center group-hover:bg-tunnels-red transition-colors duration-300">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                            <p className="text-tunnels-red font-medium mb-1">{item.value}</p>
                            <p className="text-white/50 text-sm">{item.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-tunnels-red group-hover:translate-x-1 transition-all" />
                        </div>
                      </a>
                    );
                  })}
                </div>
                
                {/* Progress Indicator */}
                {formProgress > 0 && (
                  <div className="p-5 bg-tunnels-black rounded-xl border border-tunnels-red/20">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-tunnels-red rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {formProgress}%
                      </div>
                      <div>
                        <div className="font-semibold text-white">Form Progress</div>
                        <div className="text-white/50 text-sm">
                          {formProgress === 100 ? 'Ready to send!' : 'Keep going...'}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-tunnels-darkgray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-tunnels-red transition-all duration-500 ease-out"
                        style={{ width: `${formProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Trust Indicator */}
                <div className="flex items-center gap-3 p-4 bg-tunnels-black rounded-xl border border-tunnels-darkgray/30">
                  <Shield className="w-5 h-5 text-tunnels-red flex-shrink-0" />
                  <span className="text-white/60 text-sm">All inquiries are treated with strict confidentiality</span>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-tunnels-black rounded-2xl p-8 border border-tunnels-darkgray/50">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Request a Service Discussion</h3>
                    <p className="text-white/60">Tell us about your project and requirements.</p>
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-red-400 font-semibold mb-1">Failed to send message</h4>
                        <p className="text-white/60 text-sm">Please try again or contact us directly at hello@tunnels.ng</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 bg-tunnels-dark border rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:outline-none ${
                            focusedField === 'name' ? 'border-tunnels-red' : 'border-tunnels-darkgray/50'
                          }`}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 bg-tunnels-dark border rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:outline-none ${
                            focusedField === 'email' ? 'border-tunnels-red' : 'border-tunnels-darkgray/50'
                          }`}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-tunnels-dark border rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:outline-none ${
                          focusedField === 'company' ? 'border-tunnels-red' : 'border-tunnels-darkgray/50'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-white font-medium mb-2">Project Budget (USD)</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 bg-tunnels-dark border rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:outline-none ${
                          focusedField === 'budget' ? 'border-tunnels-red' : 'border-tunnels-darkgray/50'
                        }`}
                        placeholder="e.g. $50,000 - $100,000"
                      />
                    </div>

                    {/* Project Type Selection */}
                    <div>
                      <label className="block text-white font-medium mb-4">Project Type *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => handleProjectTypeSelect(type.label)}
                              className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                                selectedProjectType === type.label
                                  ? 'bg-tunnels-red border-tunnels-red text-white'
                                  : 'bg-tunnels-dark border-tunnels-darkgray/50 text-white/60 hover:border-tunnels-red/30 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{type.label}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label className="block text-white font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full p-4 bg-tunnels-dark border rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:outline-none resize-none ${
                          focusedField === 'message' ? 'border-tunnels-red' : 'border-tunnels-darkgray/50'
                        }`}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        required
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || formProgress < 100}
                      className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        formProgress === 100 && !isSubmitting
                          ? 'bg-tunnels-red text-white hover:bg-tunnels-red-light'
                          : 'bg-tunnels-darkgray text-white/40 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>Submitting... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                      ) : (
                        <>Submit Request <Send className="w-5 h-5" /></>
                      )}
                    </button>

                    {/* Venture Studio Notice */}
                    <div className="mt-6 p-4 bg-tunnels-dark/50 rounded-xl border border-tunnels-darkgray/30">
                      <p className="text-white/50 text-sm mb-3">
                        Venture Studio partnerships require a separate application and evaluation process.
                      </p>
                      <Link
                        to="/venture-studio/apply"
                        className="inline-flex items-center gap-2 text-tunnels-red hover:text-tunnels-red-light transition-colors text-sm font-medium"
                      >
                        Apply to Venture Studio
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Work
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Learn more about our services and approach before reaching out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-tunnels-dark border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-tunnels-dark border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
