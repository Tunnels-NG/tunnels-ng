
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  
  return (
    <section className="py-16 md:py-24 bg-tunnels-darkgray relative overflow-hidden">
      {/* Animated geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-24 h-24 border border-tunnels-red/20 rounded-lg rotate-12 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-[10%] w-32 h-32 border border-tunnels-green/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-[80%] w-16 h-16 bg-tunnels-red/5 rounded-md -rotate-12 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Case <span className="text-tunnels-red">Studies</span>
          </h2>
          <p className="text-gray-300 text-lg">
            See how we've helped businesses like yours overcome challenges and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.title}
              {...study}
              isActive={activeCase === index}
              onMouseEnter={() => setActiveCase(index)}
              onMouseLeave={() => setActiveCase(null)}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-tunnels-red text-tunnels-red hover:bg-tunnels-red/10 group">
            <Link to="/case-studies" className="flex items-center">
              View All Case Studies 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  reverse?: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}

const CaseStudyCard = ({ 
  title, category, description, results, image, reverse = false,
  isActive, onMouseEnter, onMouseLeave, index
}: CaseStudyCardProps) => {
  return (
    <div 
      className={`bg-tunnels-gray/10 backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-300 
        ${isActive ? 'border-tunnels-red/40 shadow-lg shadow-tunnels-red/10 transform translate-y-[-4px]' : 'border-tunnels-gray/20 card-hover'}
        animate-fade-in`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2">
          <div className="aspect-[4/3] bg-tunnels-black/50 relative overflow-hidden">
            {/* Case study image */}
            {index === 0 ? (
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Code on computer screen" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            ) : (
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Person working on laptop" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-tunnels-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="w-10 h-10 bg-tunnels-red/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-tunnels-red text-xl" dangerouslySetInnerHTML={{ __html: image }}></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8 md:w-1/2">
          <div className="relative inline-block text-sm font-semibold text-tunnels-red mb-4">
            <span className="relative z-10 px-1">{category}</span>
            <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${isActive ? 'from-tunnels-red/80 via-tunnels-red/30 to-transparent' : 'from-tunnels-red/50 via-tunnels-red/20 to-transparent'} -z-10`} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Results:</h4>
            <ul className="space-y-1">
              {results.map((result, idx) => (
                <li key={idx} className={`flex items-start transition-all duration-300 ${isActive ? 'transform translate-x-1' : ''}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                  <span className="text-tunnels-green mr-2">✓</span>
                  <span className="text-gray-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to="/case-studies" 
            className={`inline-flex items-center transition-colors group
              ${isActive ? 'text-tunnels-red' : 'text-tunnels-red/80 hover:text-tunnels-red'}`}
          >
            Read full case study <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    title: 'KYC Workflow Automation for Fintech Startup',
    category: 'Business Process Automation',
    description: 'We helped a fintech startup automate their KYC workflows, eliminating manual review bottlenecks and enabling faster customer onboarding.',
    results: [
      'Reduced manual review time by 80%',
      'Increased customer onboarding speed by 5x',
      'Improved compliance accuracy to 99.8%'
    ],
    image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
  },
  {
    title: 'EdTech Platform MVP Launch',
    category: 'MVP Development',
    description: 'We helped an education startup transform their vision into a market-ready product in just 8 weeks, enabling them to secure investor funding.',
    results: [
      'Launched MVP in just 8 weeks',
      'Secured $1.2M in seed funding',
      'Acquired 5,000+ users in first month'
    ],
    image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  }
];

export default CaseStudies;
