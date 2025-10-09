import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MessageSquare, Clock, Shield, Globe } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-green-500/20">
            <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Build</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss your vision and see how we can bring it to life. Your next breakthrough is just one conversation away.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: <Mail className="w-8 h-8" />, 
                title: 'Email Us', 
                subtitle: 'hello@tunnelsng.tech', 
                description: 'Send us a detailed message',
                href: 'mailto:hello@tunnelsng.tech',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: <Phone className="w-8 h-8" />, 
                title: 'Call Us', 
                subtitle: '+234 708 911 8412', 
                description: 'Speak directly with our team',
                href: 'tel:+2347089118412',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: <MessageSquare className="w-8 h-8" />, 
                title: 'Schedule a Call',
                subtitle: 'Book a consultation', 
                description: 'Free 30-minute strategy session',
                href: '#',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group block p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-lg text-gray-300 font-semibold mb-2">{item.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex items-center text-white group-hover:text-green-400 transition-colors">
                  <span className="text-sm font-semibold">Connect now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Whether you're looking to automate processes, launch an MVP, or scale your existing platform, let's build something extraordinary together.
                </p>
              </div>
              
              {/* Team availability indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-semibold">Team available now</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                {/* <a
                  href="mailto:hello@tunnelsng.tech"
                  className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Send Quick Message
                </a> */}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">2 Hours</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">100%</div>
                <div className="text-gray-400 text-sm">Confidential</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Global</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;