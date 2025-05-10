
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  return (
    <section className="py-16 md:py-24 bg-tunnels-darkgray">
      <div className="container mx-auto px-4 md:px-6">
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
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-tunnels-red text-tunnels-red hover:bg-tunnels-red/10">
            <Link to="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
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
}

const CaseStudyCard = ({ title, category, description, results, image, reverse = false }: CaseStudyCardProps) => {
  return (
    <div className="bg-tunnels-gray/10 backdrop-blur-sm rounded-lg overflow-hidden card-hover animate-fade-in border border-tunnels-gray/20">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2">
          <div className="aspect-[4/3] bg-tunnels-black/50 flex items-center justify-center">
            {/* Placeholder for case study image */}
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-tunnels-red/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-tunnels-red text-2xl" dangerouslySetInnerHTML={{ __html: image }}></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8 md:w-1/2">
          <div className="inline-block px-3 py-1 bg-tunnels-red/10 rounded-full text-tunnels-red text-sm font-medium mb-4">
            {category}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Results:</h4>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-tunnels-green mr-2">✓</span>
                  <span className="text-gray-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-tunnels-red hover:text-tunnels-red/80 transition-colors"
          >
            Read full case study <ArrowRight className="ml-1 h-4 w-4" />
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
