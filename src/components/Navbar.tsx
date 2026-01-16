import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Rocket, Code2, Settings, Users, BookOpen, Briefcase, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Business Automation', path: '/services#automation', icon: Settings, description: 'Streamline your operations' },
        { name: 'MVP Development', path: '/services#mvp', icon: Rocket, description: 'Launch faster' },
        { name: 'Custom Software', path: '/services#custom', icon: Code2, description: 'Tailored solutions' },
        { name: 'IT Consultancy', path: '/services#consultancy', icon: Users, description: 'Strategic guidance' },
      ]
    },
    { 
      name: 'Venture Studio', 
      path: '/venture-studio',
      dropdown: [
        { name: 'Partnership Models', path: '/venture-studio', icon: Briefcase, description: 'Equity, revenue share & more' },
        { name: 'How It Works', path: '/how-it-works', icon: BookOpen, description: 'Our process explained' },
        { name: 'Portfolio', path: '/portfolio', icon: FolderKanban, description: 'Ventures we\'ve built' },
        { name: 'Case Studies', path: '/case-studies', icon: Rocket, description: 'Success stories' },
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-tunnels-black py-3 shadow-lg shadow-black/20 border-b border-tunnels-darkgray' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
          <NavLink to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/assets/Tunnels-Logo-White.png" 
                alt="Tunnels.ng" 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-tunnels-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 rounded-lg',
                      isActive 
                        ? 'text-white' 
                        : 'text-tunnels-lightgray hover:text-white',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-tunnels-red rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>

                {item.dropdown && (
                  <div className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-300 origin-top",
                    activeDropdown === item.name 
                      ? "opacity-100 scale-100 visible" 
                      : "opacity-0 scale-95 invisible"
                  )}>
                    <div className="bg-tunnels-dark border border-tunnels-darkgray rounded-xl p-2 min-w-[280px]">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 hover:bg-tunnels-darkgray group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-tunnels-red/10 flex items-center justify-center text-tunnels-red group-hover/item:bg-tunnels-red group-hover/item:text-white transition-colors duration-200">
                            <subItem.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{subItem.name}</div>
                            <div className="text-tunnels-lightgray text-xs mt-0.5">{subItem.description}</div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/contact">
              <Button className="btn-primary text-sm px-6 py-2.5 h-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </NavLink>
          </div>

          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={cn(
                "absolute left-0 w-full h-0.5 bg-white transition-all duration-300",
                isOpen ? "top-2 rotate-45" : "top-0"
              )} />
              <span className={cn(
                "absolute left-0 top-2 w-full h-0.5 bg-white transition-all duration-300",
                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )} />
              <span className={cn(
                "absolute left-0 w-full h-0.5 bg-white transition-all duration-300",
                isOpen ? "top-2 -rotate-45" : "top-4"
              )} />
            </div>
          </button>
        </div>

        <div className={cn(
          "lg:hidden fixed inset-x-0 top-[60px] bg-tunnels-black/95 backdrop-blur-xl border-t border-tunnels-darkgray transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-[calc(100vh-60px)] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between py-3 text-white font-medium"
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      activeDropdown === item.name ? "max-h-96" : "max-h-0"
                    )}>
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 py-2 text-tunnels-lightgray hover:text-white transition-colors"
                          >
                            <subItem.icon className="w-4 h-4 text-tunnels-red" />
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 font-medium transition-colors',
                        isActive ? 'text-tunnels-red' : 'text-white hover:text-tunnels-red'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t border-tunnels-darkgray">
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="btn-primary w-full text-base py-4 h-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;