
import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-tunnels-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tunnels-red blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-tunnels-green blur-[100px]"></div>
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

        <div className="bg-tunnels-darkgray rounded-xl p-6 md:p-8 border border-tunnels-gray/20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-tunnels-green mr-3" />
                  <a href="mailto:hello@tunnelsng.tech" className="text-gray-300 hover:text-white transition-colors">
                    hello@tunnelsng.tech
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-tunnels-green mr-3" />
                  <span className="text-gray-300">
                    +234 800 TUNNELS
                  </span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-tunnels-green mr-3" />
                  <span className="text-gray-300">
                    Live Chat Available
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-tunnels-gray/20 hover:bg-tunnels-gray/30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-tunnels-gray/20 hover:bg-tunnels-gray/30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent"
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
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent"
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
                    className="w-full px-4 py-2 bg-tunnels-gray/20 border border-tunnels-gray/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tunnels-green focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-tunnels-green hover:bg-tunnels-green/90 text-black font-medium">
                  Send Message
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
