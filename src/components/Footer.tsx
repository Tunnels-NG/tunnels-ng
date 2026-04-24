import { Link, NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Growth Strategy', path: '/services#strategy' },
      { name: 'Execution Sprints', path: '/services#sprints' },
      { name: 'Growth Partnerships', path: '/venture-studio' },
    ],
    resources: [
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'How It Works', path: '/how-it-works' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/tunnelsng' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/tunnelsng' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/tunnelsng' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tunnelsng' },
  ];

  return (
    <footer className="relative bg-tunnels-black border-t border-tunnels-darkgray overflow-hidden">
      <div className="relative border-b border-tunnels-darkgray">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16">
          <div className="bg-tunnels-dark border border-tunnels-darkgray rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Growth insights, weekly
              </h3>
              <p className="text-tunnels-lightgray max-w-md">
                Join founders learning how to engineer real user acquisition. No fluff, just systems.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-[280px] px-5 py-3.5 bg-tunnels-darkgray border border-tunnels-gray/50 rounded-lg text-white placeholder:text-tunnels-lightgray focus:outline-none focus:border-tunnels-red/50 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap px-6 py-3.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </form>
              <p className="text-tunnels-lightgray text-xs mt-3 text-center sm:text-left">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-1.5 mb-6 group">
              <img
                src="/assets/tunnels-icon-nobg.png"
                alt="Tunnels.ng"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl md:text-2xl font-display font-medium tracking-wide">
                <span className="text-white">Tunnels</span>
                <span className="text-tunnels-red">NG</span>
              </span>
            </Link>
            <p className="text-tunnels-lightgray mb-6 max-w-sm leading-relaxed">
              We design and execute growth systems that turn working products into products people actually use. From strategy to hands-on execution, we're the growth partner for products ready to scale.
            </p>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-tunnels-darkgray border border-tunnels-gray/50 text-tunnels-lightgray hover:text-white hover:bg-tunnels-red hover:border-tunnels-red transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-tunnels-lightgray hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-tunnels-lightgray hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-tunnels-lightgray hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tunnels-red shrink-0 mt-0.5" />
                <span className="text-tunnels-lightgray text-sm">
                  Lagos, Nigeria<br />
                  & Remote Worldwide
                </span>
              </li>
              <li>
                <a
                  href="tel:+2347089118412"
                  className="flex items-center gap-3 text-tunnels-lightgray hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-tunnels-red shrink-0" />
                  +234 708 911 8412
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tunnels.ng"
                  className="flex items-center gap-3 text-tunnels-lightgray hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-tunnels-red shrink-0" />
                  hello@tunnels.ng
                </a>
              </li>
            </ul>

            <a
              href="https://calendly.com/tunnelsnig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-tunnels-red hover:text-tunnels-red-light transition-colors font-medium text-sm group"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-tunnels-darkgray">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-tunnels-lightgray text-sm">
              © {currentYear} Tunnels.ng. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link
                to="/contact"
                className="text-tunnels-lightgray hover:text-white transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/faq"
                className="text-tunnels-lightgray hover:text-white transition-colors text-sm"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


