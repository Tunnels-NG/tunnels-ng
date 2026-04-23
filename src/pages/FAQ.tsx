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
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'results', label: 'Results & Metrics' }
  ];

  const faqs = {
    general: [
      {
        question: 'What is Tunnels.ng?',
        answer: 'We help products get to real users. We design and execute growth systems that turn working products into products people actually use. Not marketing, not branding - real user acquisition and activation.'
      },
      {
        question: 'What makes you different from marketing agencies?',
        answer: 'Marketing agencies sell brand awareness and impressions. We build growth systems that acquire and activate real users. We measure success in users gained, not reach or engagement.'
      },
      {
        question: 'What types of products do you work with?',
        answer: 'Products with working functionality seeking systematic user growth. Typically SaaS, fintech, marketplaces, and platforms. We help functional products, not just ideas.'
      },
      {
        question: 'Do you only work with startups?',
        answer: 'No. We work with any product facing a growth challenge - early-stage startups, growing products, or established companies launching new offerings.'
      }
    ],
    partnerships: [
      {
        question: 'What partnership models do you offer?',
        answer: 'Three: Sprint Partnership (4-12 weeks, fixed engagement), Embedded Partner (3-6 months, ongoing), Equity Partnership (long-term, equity-based). Model depends on product stage and goals.'
      },
      {
        question: 'How do you decide which model fits?',
        answer: 'During assessment, we evaluate your product stage, growth gap, team capacity, and goals. We recommend the model that aligns with where you are and where you\'re going.'
      },
      {
        question: 'What is a Sprint Partnership?',
        answer: 'Intensive 4-12 week campaign to build your initial growth system, acquire first users, and deliver a repeatable playbook.'
      },
      {
        question: 'What is an Embedded Partner engagement?',
        answer: '3-6 month partnership where we operate as part of your team, continuously acquiring users and optimizing systems.'
      },
      {
        question: 'How does Equity Partnership work?',
        answer: 'For high-potential products, we take equity (typically 5-15%) and become your long-term growth partner with fully aligned incentives. Zero upfront cost.'
      }
    ],
    process: [
      {
        question: 'How long until we see results?',
        answer: 'First users typically within 2-4 weeks. Meaningful traction within 4-8 weeks. We prioritize speed to signal.'
      },
      {
        question: 'What happens during the assessment phase?',
        answer: 'We audit your product, analyze current user behavior, map growth opportunities, and identify the gaps holding you back. Delivered in 1-2 weeks.'
      },
      {
        question: 'How involved will we be?',
        answer: 'Very. We embed with your team, require product access, and need close collaboration. Growth works best with tight integration.'
      },
      {
        question: 'Do you provide support after the engagement?',
        answer: 'For Sprint engagements, we deliver a playbook you can operate. For Embedded/Equity partnerships, ongoing support is built in.'
      }
    ],
    pricing: [
      {
        question: 'How much does it cost?',
        answer: 'Sprint partnerships: $15K-$50K depending on scope. Embedded: Monthly retainer + performance incentives. Equity: Zero upfront, equity-based.'
      },
      {
        question: 'What\'s the minimum engagement?',
        answer: 'Typically $5K minimum for any paid engagement. Equity partnerships have no minimum but require evaluation approval.'
      },
      {
        question: 'Do you guarantee results?',
        answer: 'We guarantee systems and effort, not outcomes. We\'ll acquire users and optimize activation, but can\'t guarantee viral growth or specific numbers.'
      },
      {
        question: 'What if we can\'t afford upfront costs?',
        answer: 'Apply for Equity Partnership. If your product and team meet our criteria, we work for equity with zero upfront cost.'
      }
    ],
    results: [
      {
        question: 'How do you measure success?',
        answer: 'Users acquired, activation rate, cost per acquisition, channel efficiency, time to first user. Real metrics, not vanity numbers.'
      },
      {
        question: 'What results have you achieved?',
        answer: '18+ products helped, 12K+ users acquired, 3.2x average activation lift across engagements.'
      },
      {
        question: 'How fast do you move?',
        answer: 'First users in 2-4 weeks average. We prioritize speed to signal over perfection.'
      },
      {
        question: 'What if it doesn\'t work?',
        answer: 'We iterate fast. If a channel underperforms, we kill it and try another. Growth is experimentation guided by data.'
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.values(faqs).flat().map((entry) => ({
      "@type": "Question",
      "name": entry.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": entry.answer
      }
    }))
  };

  const currentFAQs = faqs[selectedCategory as keyof typeof faqs];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="FAQ - Growth Services"
        description="Answers about Tunnels growth services, partnership models, process, and results. Learn how we help products get to real users."
        keywords="growth faq, user acquisition questions, growth partnership faq, startup growth questions"
        url="https://tunnels.ng/faq"
        structuredData={faqStructuredData}
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
              { q: 'Minimum engagement?', a: '$5K for paid, evaluation for equity' },
              { q: 'Remote or on-site?', a: 'Fully remote, global partnerships' },
              { q: 'NDA available?', a: 'Yes, signed before detailed discussions' },
              { q: 'First step?', a: 'Contact form for paid services, application for partnerships' },
              { q: 'Average engagement length?', a: '4-12 weeks for sprints, 3-6 months embedded' },
              { q: 'Industries served?', a: 'SaaS, fintech, marketplaces, platforms, any digital product' }
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
