import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import EngagementModels from '@/components/home/EngagementModels';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import Contact from '@/components/home/Contact';
import SEO from '@/components/SEO';

const Index = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tunnels.ng",
    "description": "Africa's leading technology venture studio specializing in MVP development, business automation, and innovative partnership models including Build Now Pay Later and equity partnerships.",
    "url": "https://tunnels.ng",
    "logo": "https://tunnels.ng/assets/Tunnels-Logo-White.png",
    "image": "https://tunnels.ng/assets/og-image.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Rapid MVP development to validate your business idea"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Streamline operations with custom automation solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equity Partnership",
            "description": "Technology partnership with equity-based engagement"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Technology Venture Studio - Build Now, Pay Later"
        description="Africa's leading technology venture studio. We build MVPs, automate business processes, and partner with founders through equity, revenue share, or Build Now Pay Later models. Transform your idea into a scalable product."
        keywords="technology venture studio, MVP development, business automation, software development Nigeria, tech startup partner, build now pay later, equity partnership, fintech development, SaaS development, African tech"
        url="https://tunnels.ng/"
        structuredData={homeStructuredData}
      />
      <Navbar />
      <main>
        <Hero />
        <EngagementModels />
        <Services />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
