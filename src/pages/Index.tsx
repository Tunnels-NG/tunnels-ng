import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';
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
      "description": "Technology venture studio in Lagos, Nigeria partnering with African founders, growth-stage teams, and corporate innovators.",
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
      "name": "TunnelsNG Service Architecture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advisory & Audit",
            "areaServed": "Nigeria",
            "serviceType": "Technology advisory for startups and enterprises",
            "url": "https://tunnels.ng/services#advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Build & Automation",
            "areaServed": "Africa",
            "serviceType": "Custom software, MVP development, automation",
            "url": "https://tunnels.ng/services#build"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venture Studio Partnerships",
            "areaServed": "Africa",
            "serviceType": "Selective co-building and technical co-founder engagements",
            "url": "https://tunnels.ng/venture-studio"
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO 
        title="Technology Venture Studio Nigeria"
        description="Lagos-based technology venture studio partnering with African founders, growth-stage businesses, and corporate operators to co-build products, automation, and long-term ventures."
        keywords="technology venture studio Nigeria, venture studio Africa, startup technology partner Nigeria, technical co-founder Africa, co-build startup Africa"
        url="https://tunnels.ng/"
        structuredData={homeStructuredData}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
