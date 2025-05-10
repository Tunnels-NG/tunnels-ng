
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Award, Rocket } from 'lucide-react';

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [achievements, setAchievements] = useState({
    automation: false,
    startups: false,
    scaling: false
  });
  
  const unlockAchievement = (key: keyof typeof achievements) => {
    if (!achievements[key]) {
      setAchievements(prev => ({...prev, [key]: true}));
      // Could show a toast notification here for the achievement
    }
  };

  return (
    <section className="py-16 md:py-24 bg-tunnels-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Why <span className="text-tunnels-red">TunnelsNG</span>?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            At TunnelsNG, we believe the future belongs to businesses that embrace automation and strategic technology. From streamlining repetitive workflows to launching Minimum Viable Products at lightning speed, our equity-aligned partnerships ensure your vision becomes reality—without the usual upfront cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
              index={index}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
              onInteract={() => unlockAchievement(index === 0 ? 'automation' : index === 1 ? 'startups' : 'scaling')}
              className={cn(
                "animate-fade-in",
                index === 0 && "md:animate-delay-0",
                index === 1 && "md:animate-delay-200",
                index === 2 && "md:animate-delay-400"
              )} 
            />
          ))}
        </div>
        
        {/* Achievement Indicators */}
        <div className="mt-12 flex justify-center space-x-8">
          {Object.entries(achievements).map(([key, unlocked], idx) => (
            <div 
              key={key} 
              className={cn(
                "flex items-center p-2 rounded-lg transition-all duration-300",
                unlocked ? "bg-tunnels-green/20" : "bg-tunnels-gray/20"
              )}
              title={`${unlocked ? 'Unlocked' : 'Locked'} Achievement`}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                unlocked ? "bg-tunnels-green text-black" : "bg-tunnels-gray/30 text-gray-400"
              )}>
                {idx === 0 && <Rocket size={16} />}
                {idx === 1 && <Award size={16} />}
                {idx === 2 && <Check size={16} />}
              </div>
              <span className={cn(
                "text-sm font-medium",
                unlocked ? "text-tunnels-green" : "text-gray-400"
              )}>
                {key.charAt(0).toUpperCase() + key.slice(1)} {unlocked ? 'Unlocked!' : 'Locked'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onInteract: () => void;
}

const FeatureCard = ({ 
  icon, title, description, className, isHovered, onHover, onLeave, onInteract 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-tunnels-darkgray rounded-lg p-8 border border-tunnels-gray/20 transition-all duration-300",
        isHovered ? "transform scale-105 shadow-lg shadow-tunnels-red/20 border-tunnels-red/50" : "card-hover",
        className
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onInteract}
    >
      <div className={cn(
        "w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-all duration-300",
        isHovered ? "bg-tunnels-red text-white" : "bg-tunnels-red/10 text-tunnels-red"
      )}>
        <span className="text-2xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      
      <div className={cn(
        "w-full bg-tunnels-gray/20 h-1 mt-6 rounded overflow-hidden",
        isHovered ? "opacity-100" : "opacity-0",
        "transition-opacity duration-300"
      )}>
        <div className="bg-tunnels-red h-full animate-pulse" style={{width: '60%'}}></div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m9 9 2.45 2.45A2 2 0 0 1 12 12a2 2 0 0 1 .55-1.45L15 8"/></svg>',
    title: 'Business Process Automation',
    description: 'Unlock new levels of efficiency by automating manual tasks across your organization.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 22V7"/><path d="M14 22V7"/><rect x="2" y="2" width="20" height="5" rx="2"/><path d="M10 7H2"/><path d="M22 7h-8"/></svg>',
    title: 'Build-Now, Grow-Later',
    description: 'Invest in your idea today—pay with equity or deferred terms, not cash.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>',
    title: 'Scalability Engineering',
    description: 'Future-proof your tech stack with audits, optimizations, and cloud transitions.'
  }
];

export default WhyUs;
