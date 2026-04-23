import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ClarityLayer from '@/components/home/ClarityLayer';
import Services from '@/components/home/Services';
import HowWeWork from '@/components/home/HowWeWork';
import Metrics from '@/components/home/Metrics';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';
import TrustBanner from '@/components/home/TrustBanner';
import Contact from '@/components/home/Contact';
import SEO from '@/components/SEO';

const Index = () => {
  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TunnelsNG",
      "url": "https://tunnels.ng",
      "logo": "https://tunnels.ng/assets/Tunnels-Logo-White.png",
      "description": "Growth systems for modern products. We design and execute the systems that turn products into users.",
      "foundingLocation": "Lagos, Nigeria",
      "areaServed": ["Nigeria", "West Africa", "Africa"],
      "sameAs": [
        "https://twitter.com/tunnelsng",
        "https://linkedin.com/company/tunnelsng",
        "https://github.com/tunnelsng",
        "https://instagram.com/tunnelsng"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "business",
        "telephone": "+2347089118412",
        "email": "hello@tunnels.ng",
        "areaServed": "NG"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "TunnelsNG Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Strategy",
            "areaServed": "Nigeria",
            "serviceType": "User acquisition strategy and conversion pathway design",
            "url": "https://tunnels.ng/services#strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Execution Sprints",
            "areaServed": "Africa",
            "serviceType": "Direct user acquisition and activation optimization",
            "url": "https://tunnels.ng/services#sprints"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Partnerships",
            "areaServed": "Africa",
            "serviceType": "Embedded growth partner and growth systems co-design",
            "url": "https://tunnels.ng/venture-studio"
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="Growth Systems for Modern Products"
        description="We design and execute the systems that turn products into users. Growth strategy, execution sprints, and venture partnerships for products ready to grow."
        keywords="growth systems, user acquisition, conversion engine, growth strategy, product growth, growth infrastructure, activation optimization"
        url="https://tunnels.ng/"
        structuredData={homeStructuredData}
      />
      <Navbar />
      <main>
        <Hero />
        <ClarityLayer />
        <Services />
        <HowWeWork />
        <Metrics />
        <Partners />
        <Testimonials />
        <TrustBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
