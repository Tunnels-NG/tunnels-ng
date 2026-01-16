import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'partnership', label: 'Partnership Models' },
    { id: 'process', label: 'Process & Timeline' },
    { id: 'technical', label: 'Technical' },
    { id: 'pricing', label: 'Pricing & Payment' }
  ];

  const faqs = {
    general: [
      {
        question: 'What is Tunnels.ng?',
        answer: 'Tunnels.ng is a technology venture studio that partners with founders and businesses to build digital products. Unlike traditional agencies, we offer flexible partnership models including equity partnerships, revenue sharing, and our unique "Build Now, Pay Later" option. We are not just developers, we are co-builders invested in your success.'
      },
      {
        question: 'What makes Tunnels different from other development agencies?',
        answer: 'Three things set us apart: First, our partnership models mean we have skin in the game, we succeed when you succeed. Second, we specialize in the African market, understanding its unique challenges and opportunities. Third, we offer end-to-end support from ideation to scaling, not just code delivery.'
      },
      {
        question: 'What types of projects do you work on?',
        answer: 'We specialize in fintech, SaaS, marketplaces, agritech, and food tech, though we are open to innovative ideas in other sectors. We typically work on web applications, mobile apps, and complex platform builds that require both technical excellence and strategic thinking.'
      },
      {
        question: 'Do you only work with startups?',
        answer: 'Not at all. While we love working with early-stage founders, we also partner with established businesses looking to build new digital products, modernize legacy systems, or spin out new ventures. Our partnership models adapt to different business stages.'
      }
    ],
    partnership: [
      {
        question: 'What is the "Build Now, Pay Later" model?',
        answer: 'Build Now, Pay Later allows you to get your product built with minimal upfront cost. We develop your MVP or full product, and you pay us back over time from your revenue once you launch. It\'s designed for founders with great ideas but limited initial capital. Specific terms vary based on project scope and revenue projections.'
      },
      {
        question: 'How does the Equity Partnership work?',
        answer: 'In an equity partnership, we reduce our development fees in exchange for equity in your company. This typically ranges from 5-20% depending on the scope of work and stage of your venture. We become true partners, providing ongoing technical support and strategic input as you grow.'
      },
      {
        question: 'What is Revenue Share?',
        answer: 'Revenue share means we take a percentage of your product\'s revenue for a defined period instead of traditional payment. This is ideal for products with clear monetization strategies. The percentage and duration are negotiated based on your business model and our contribution.'
      },
      {
        question: 'Can I switch between partnership models?',
        answer: 'Yes, we understand that circumstances change. We\'ve helped founders transition from one model to another as their situation evolves. For example, converting from Build Now, Pay Later to equity once they raise funding. We\'re flexible and founder-friendly.'
      },
      {
        question: 'How do you decide which partnership model fits my project?',
        answer: 'During our discovery phase, we assess your funding situation, business model, timeline, and risk appetite. We then recommend the model that aligns best with your goals. Sometimes we create hybrid arrangements that combine elements of different models.'
      }
    ],
    process: [
      {
        question: 'How long does it take to build an MVP?',
        answer: 'Most MVPs take 8-12 weeks from kickoff to launch. This includes 1-2 weeks of discovery, 2-3 weeks of design, and 6-8 weeks of development. Complex projects may take 16-20 weeks. We prioritize speed without sacrificing quality.'
      },
      {
        question: 'What happens during the Discovery phase?',
        answer: 'Discovery is where we deeply understand your vision, market, and users. We conduct stakeholder interviews, market research, user persona development, and technical feasibility assessment. You\'ll receive a comprehensive discovery report, user personas, and a detailed project scope document.'
      },
      {
        question: 'How involved will I be during the build process?',
        answer: 'Very involved. We operate in 2-week sprints with regular demos and feedback sessions. You\'ll have access to a shared project board, direct communication with your development team, and weekly progress reports. We believe great products come from close collaboration.'
      },
      {
        question: 'Do you provide support after launch?',
        answer: 'Absolutely. Our Growth & Support phase includes ongoing maintenance, bug fixes, feature enhancements, and scaling support. For equity and revenue share partners, this support is built into our partnership. For other models, we offer flexible support packages.'
      },
      {
        question: 'What if I need to pivot or change direction?',
        answer: 'Pivots are a natural part of building products. Our agile approach is designed to accommodate changes. We build in flexibility milestones where we can assess and adjust direction based on user feedback and market response without derailing the project.'
      }
    ],
    technical: [
      {
        question: 'What technologies do you work with?',
        answer: 'We are technology-agnostic but have deep expertise in React, React Native, Node.js, Python, PostgreSQL, MongoDB, AWS, and blockchain technologies. We choose the stack that best fits your product needs, scalability requirements, and long-term maintenance considerations.'
      },
      {
        question: 'Will I own the code?',
        answer: 'Yes. Regardless of partnership model, you own 100% of the intellectual property and source code we develop for you. We may retain usage rights for portfolio purposes, but you have full ownership and control over your product.'
      },
      {
        question: 'How do you ensure code quality?',
        answer: 'We follow industry best practices: code reviews on every pull request, automated testing, continuous integration/deployment, and security audits. Our senior engineers oversee all projects to maintain consistent quality standards.'
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Yes, we regularly integrate with payment processors, social media APIs, banking systems, logistics platforms, and enterprise software. If you have existing systems, we\'ll assess integration requirements during discovery and plan accordingly.'
      },
      {
        question: 'Do you build mobile apps?',
        answer: 'Yes. We build cross-platform mobile apps using React Native, which allows us to ship iOS and Android apps from a single codebase. For projects requiring native performance, we can also develop native iOS (Swift) or Android (Kotlin) applications.'
      }
    ],
    pricing: [
      {
        question: 'How much does it cost to build an MVP?',
        answer: 'MVP costs typically range from $15,000 to $50,000 depending on complexity, features, and integrations. However, with our partnership models, your upfront cost could be significantly lower, or even zero with Build Now, Pay Later or equity arrangements.'
      },
      {
        question: 'Do you require a deposit?',
        answer: 'For traditional payment arrangements, we require 30-40% upfront to begin work. For Build Now, Pay Later, we may require a smaller commitment or none at all depending on the project. Equity partnerships typically have minimal upfront requirements.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, credit cards, and cryptocurrency. For international clients, we can invoice in USD, EUR, GBP, or local currencies. We are flexible and will work with you to find a payment arrangement that works.'
      },
      {
        question: 'Are there any hidden costs?',
        answer: 'No hidden costs. Our proposals are comprehensive and include development, testing, deployment, and initial support. Third-party costs (hosting, domain, API subscriptions) are clearly outlined and remain your responsibility, but we\'ll help you budget for these.'
      },
      {
        question: 'What if the project goes over budget?',
        answer: 'Scope changes can affect timelines and costs. That\'s why we\'re thorough during discovery and maintain clear documentation. If scope changes are needed, we discuss them openly and get your approval before proceeding. No surprises.'
      }
    ]
  };

  const currentFAQs = faqs[selectedCategory as keyof typeof faqs];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="FAQ"
        description="Find answers to frequently asked questions about Tunnels.ng services, partnership models, pricing, and development process. Learn about Build Now Pay Later, equity partnerships, and more."
        keywords="tunnels ng FAQ, MVP development questions, technology partnership FAQ, build now pay later explained, equity partnership questions, software development pricing"
        url="https://tunnels.ng/faq"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-tunnels-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 bg-tunnels-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-tunnels-red" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-tunnels-red">Questions</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to know about working with Tunnels. 
              Can't find what you're looking for? Reach out to us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq-section" 
        data-section 
        className={`py-20 bg-tunnels-dark transition-all duration-700 ${visibleSections.has('faq-section') ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenFAQ(0);
                }}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-tunnels-red text-white'
                    : 'bg-tunnels-black border border-tunnels-darkgray/50 text-white/60 hover:text-white hover:border-tunnels-red/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {currentFAQs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl border border-tunnels-darkgray/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-tunnels-black/50 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-tunnels-red shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section 
        id="quick-section" 
        data-section 
        className={`py-20 bg-tunnels-black transition-all duration-700 ${visibleSections.has('quick-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quick <span className="text-tunnels-red">Answers</span>
            </h2>
            <p className="text-white/60">
              The essentials at a glance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { q: 'Minimum project size?', a: 'We typically work on projects starting at $10K' },
              { q: 'Remote or on-site?', a: 'We work remotely with teams across Africa and globally' },
              { q: 'NDA available?', a: 'Yes, we sign NDAs before any detailed discussions' },
              { q: 'Team size per project?', a: '2-5 dedicated team members based on scope' },
              { q: 'Communication tools?', a: 'Slack, Google Meet, and your preferred platforms' },
              { q: 'First step to get started?', a: 'Book a free discovery call with our team' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-tunnels-darkgray/50 hover:border-tunnels-red/30 transition-all duration-300"
              >
                <p className="text-white font-medium mb-2">{item.q}</p>
                <p className="text-white/60 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-tunnels-dark">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl border border-tunnels-darkgray/50">
            <div className="w-14 h-14 bg-tunnels-red/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-7 h-7 text-tunnels-red" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/60 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
              Reach out and we'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:gap-3"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tunnels-black border border-tunnels-darkgray/50 text-white font-semibold rounded-lg hover:border-tunnels-red/30 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
