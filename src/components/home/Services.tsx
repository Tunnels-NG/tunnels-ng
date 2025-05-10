
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-tunnels-black to-tunnels-darkgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Our <span className="text-tunnels-green">Services</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We offer a comprehensive suite of tech solutions designed to propel your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index + 1}
              {...service}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-tunnels-green text-tunnels-green hover:bg-tunnels-green/10">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ index, title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-tunnels-gray/10 backdrop-blur-sm rounded-lg border border-tunnels-gray/20 overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="p-6">
        <div className="w-12 h-12 bg-tunnels-green/10 rounded-md flex items-center justify-center mb-4">
          <span className="text-tunnels-green text-2xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-tunnels-green hover:text-tunnels-green/80 transition-colors"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const services = [
  {
    title: 'Business Process Automation',
    description: 'Automate manual workflows with custom software, AI, and cloud-native tools to reduce costs and boost productivity.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    link: '/services/automation'
  },
  {
    title: 'Build-Now, Grow-Later Model',
    description: 'Partner with early-stage companies on equity or deferred payment terms, removing upfront cost barriers to rapid digital infrastructure development.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    link: '/services/build-now'
  },
  {
    title: 'System Audit & Scalability',
    description: 'Evaluate and optimize existing systems—security audits, database tuning, and cloud-native transitions—to support seamless growth.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    link: '/services/system-audit'
  },
  {
    title: 'MVP Launch Services',
    description: 'Transform ideas into deployable MVPs with lean, agile processes that ensure speed without sacrificing quality.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v4c0 1.1-.9 2-2 2H5"/><path d="M15 22H5a2 2 0 0 1-2-2V9.5C3 8.67 3.67 8 4.5 8H9"/><path d="M21 15V5a2 2 0 0 0-2-2h-6"/><path d="M19 22H5a2 2 0 0 1-2-2v-7"/><path d="M21.3 15H13a2 2 0 0 0-2 2v4.5"/></svg>',
    link: '/services/mvp'
  },
  {
    title: 'IT Consultancy & Strategy',
    description: 'Advise on technology roadmaps—from tech-stack selection to cybersecurity and business continuity—to guide strategic tech decisions.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>',
    link: '/services/consultancy'
  }
];

export default Services;
