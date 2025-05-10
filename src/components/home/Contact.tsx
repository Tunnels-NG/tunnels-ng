
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formScore, setFormScore] = useState(0);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    
    // Simple gamification - increase form score as user fills out form
    let score = 0;
    if (formState.name.length > 2) score += 33;
    if (formState.email.includes('@') && formState.email.includes('.')) score += 33;
    if (formState.message.length > 10) score += 34;
    setFormScore(score);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "success"
      });
      setFormState({ name: '', email: '', message: '' });
      setFormScore(0);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-tunnels-black relative">
      {/* Background Elements - Using lighter colors for background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tunnels-red/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-tunnels-green/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Animated particles */}
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-tunnels-red/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-tunnels-green/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-[20%] w-4 h-4 bg-tunnels-red/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to <span className="text-tunnels-green">Get Started</span>?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Let's discuss how we can build the future—together.
          </p>
        </div>

        <div className="bg-tunnels-darkgray rounded-xl p-6 md:p-8 border border-tunnels-gray/20 max-w-4xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center transform transition-transform hover:translate-x-1">
                  <Mail className="h-5 w-5 text-tunnels-green mr-3" />
                  <a href="mailto:hello@tunnelsng.tech" className="text-gray-300 hover:text-white transition-colors">
                    hello@tunnelsng.tech
                  </a>
                </div>
                <div className="flex items-center transform transition-transform hover:translate-x-1">
                  <Phone className="h-5 w-5 text-tunnels-green mr-3" />
                  <span className="text-gray-300">
                    +234 800 TUNNELS
                  </span>
                </div>
                <div className="flex items-center transform transition-transform hover:translate-x-1">
                  <MessageSquare className="h-5 w-5 text-tunnels-green mr-3" />
                  <span className="text-gray-300">
                    Live Chat Available
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-tunnels-gray/20 hover:bg-tunnels-gray/30 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-tunnels-gray/20 hover:bg-tunnels-gray/30 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              
              {/* Achievement badge based on form completion */}
              {formScore > 0 && (
                <div className="mt-8 bg-tunnels-green/10 rounded-lg p-4 border border-tunnels-green/20 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-tunnels-green/20 flex items-center justify-center mr-4">
                      <span className="text-tunnels-green text-xl font-bold">{formScore}%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Form Progress</h4>
                      <p className="text-gray-300 text-sm">
                        {formScore === 100 ? 'All set! Ready to submit.' : 'Keep going! Complete the form to connect.'}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-tunnels-gray/20 rounded-full mt-3">
                    <div 
                      className="h-full bg-tunnels-green rounded-full transition-all duration-500" 
                      style={{width: `${formScore}%`}}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting || formScore < 100}
                  className={`w-full font-medium flex items-center justify-center transition-all duration-300 ${
                    formScore === 100 
                      ? 'bg-tunnels-green hover:bg-tunnels-green/90 text-black' 
                      : 'bg-tunnels-gray/40 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>Sending... <span className="ml-2 animate-spin">◌</span></>
                  ) : (
                    <>Send Message <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
