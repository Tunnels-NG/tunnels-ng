import React, { useState } from 'react';
import { ArrowRight, Award, Rocket, Star, Zap, Shield, Users } from 'lucide-react';

const WhyUs = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [progress, setProgress] = useState({ automation: 0, startups: 0, scaling: 0 });
  
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Process Automation',
      description: 'Eliminate bottlenecks by automating repetitive tasks with intelligent software and AI.',
      color: 'from-blue-500 to-cyan-500',
      stats: '95% efficiency boost'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rapid MVP Launch',
      description: 'From concept to market in weeks, not months. We build MVPs that scale from day one.',
      color: 'from-purple-500 to-pink-500',
      stats: '3x faster delivery'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Future-Proof Scalability',
      description: 'Audit, optimize, and migrate your stack for seamless growth and rock-solid performance.',
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% uptime'
    }
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-tunnels-red to-pink-500">TunnelsNG</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe technology should adapt to your vision—not the other way around. Whether you’re freeing your team from manual busywork, accelerating an idea to market, or architecting for tomorrow’s scale, we craft bespoke solutions that deliver impact without hidden strings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeCard === index ? 'ring-2 ring-red-500/50' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-400">{feature.stats}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
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
          ))}
        </div>
        
        {/* Interactive Achievement System */}
        {/* <div className="text-center">
          <div className="inline-flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.9/5 Client Rating</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">Industry Recognition</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">500+ Projects</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUs;