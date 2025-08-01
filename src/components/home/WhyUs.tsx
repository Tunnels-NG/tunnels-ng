import React, { useState } from 'react';
import { ArrowRight, Award, Rocket, Star, Zap, Shield, Users } from 'lucide-react';

const WhyUs = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Process Automation',
      description: 'Eliminate bottlenecks by automating repetitive tasks with intelligent software and AI.',
      color: 'from-blue-500 to-cyan-500',
      stats: '95% efficiency boost',
      testimonial: {
        text: "TunnelsNG automated our entire remote workflow system. As a people-driven company, this freed our team to focus on creativity and innovation instead of repetitive tasks.",
        author: "Emmanuel Bountiful",
        role: "Founder & CEO - Symbi Technologies",
      }
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rapid MVP Launch',
      description: 'From concept to market in weeks, not months. We build MVPs that scale from day one.',
      color: 'from-purple-500 to-pink-500',
      stats: '3x faster delivery',
      testimonial: {
        text: "They built our MVP in just 3 weeks, connecting skilled professionals with clients seamlessly. Now we're the go-to platform for task solutions.",
        author: "Taskpadi",
        role: "CEO - Taskpadi",
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Future-Proof Scalability',
      description: 'Audit, optimize, and migrate your stack for seamless growth and rock-solid performance.',
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% uptime',
      testimonial: {
        text: "Our website and app couldn't handle our growing customer base. TunnelsNG rebuilt and scaled our platforms to process 10x more orders seamlessly.",
        author: "Okan Jessica",
        role: "Chef & Owner - Okan Eats"
      }
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden mt-12">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm text-white mb-6 border border-red-500/20">
            <Award className="w-4 h-4 mr-2 text-red-500" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">TunnelsNG</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe technology should adapt to your vision—not the other way around. Whether you're freeing your team from manual busywork, accelerating an idea to market, or architecting for tomorrow's scale, we craft bespoke solutions that deliver impact without hidden strings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${
                activeCard === index ? 'ring-2 ring-red-500/50' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-green-400">{feature.stats}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                {/* Client Testimonial */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    {/* <img 
                      src={feature.testimonial.avatar}
                      alt={feature.testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm italic mb-2">"{feature.testimonial.text}"</p>
                      <div className="text-xs">
                        <span className="text-white font-semibold">{feature.testimonial.author}</span>
                        <span className="text-gray-400">, {feature.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-1000 ${
                      activeCard === index ? 'translate-x-0' : '-translate-x-full'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Metrics */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">250%</div>
                <div className="text-gray-400 text-sm">Average Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">6 Weeks</div>
                <div className="text-gray-400 text-sm">From Idea to Launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;