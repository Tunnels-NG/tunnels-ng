import React from 'react';
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';

const HomeContactSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Transform</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's build something extraordinary together. Your next breakthrough is just one conversation away.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: 'hello@tunnelsng.tech', href: 'mailto:hello@tunnelsng.tech' },
              { icon: <Phone className="w-6 h-6" />, label: 'Call Us', value: '+234 800 TUNNELS', href: 'tel:+2348008866357' },
              { icon: <MessageSquare className="w-6 h-6" />, label: 'Live Chat', value: 'Available 24/7', href: '#' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-gray-300 text-sm">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA to Contact Page */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Tell us about your vision and let's discuss how we can bring it to life. Our team responds within 2 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2hr</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-400 text-sm">Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;