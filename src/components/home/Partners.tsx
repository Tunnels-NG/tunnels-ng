import React, { useState, useEffect, useRef } from 'react';
import { Building, Sparkles } from 'lucide-react';

const Partners = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [autoFocusIndex, setAutoFocusIndex] = useState(0);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const interactionTimeoutRef = useRef(null);


  const logos = [
    { name: 'Jaycolinks', src: '/assets/Jayco.png' },
    { name: 'Ndonu', src: '/assets/Ndonu.png' },
    { name: 'Rendezvouscare', src: '/assets/Rendezvouscare.png' },
    { name: 'Symbi', src: '/assets/symbi.png' },
    { name: 'Taskpadi', src: '/assets/Taskpadi.jpg' },
    { name: 'Listdem', src: '/assets/Listdem.jpg' },
    { name: 'Payrendr', src: '/assets/Payrendr.png' },
    { name: 'AWS', src: '/assets/AWS.png' },
    { name: 'GCP', src: '/assets/GCP.png' },
    { name: 'Azure', src: '/assets/Azure.png' },
    { name: 'Google', src: '/assets/Google.png' },
    { name: 'Oracle', src: '/assets/Oracle.png' },
    { name: 'Jetbrain', src: '/assets/JetBrains.png' },
    { name: 'Okaneats', src: '/assets/OkanEats.png' },
    { name: 'Educential', src: '/assets/Educential.png' },
    { name: 'Fenypay', src: '/assets/Fenypay.jpg' },
    { name: 'Jayrify', src: '/assets/Jayrify.png' },
    { name: 'VTB', src: '/assets/VTB.png' }
  ];

  // Calculate responsive grid layout
  const getGridLayout = () => {
    const width = containerDimensions.width || 800;
    
    if (width < 480) {
      // Mobile: 4x5 grid
      return { cols: 4, rows: 5, logoSize: 40, spacing: 60 };
    } else if (width < 768) {
      // Tablet: 5x4 grid
      return { cols: 5, rows: 4, logoSize: 48, spacing: 70 };
    } else if (width < 1024) {
      // Small desktop: 6x4 grid
      return { cols: 6, rows: 4, logoSize: 52, spacing: 80 };
    } else {
      // Large desktop: 8x3 grid
      return { cols: 8, rows: 3, logoSize: 56, spacing: 90 };
    }
  };

  const gridLayout = getGridLayout();

  // Auto-focus cycling when user is not interacting
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting) {
        setAutoFocusIndex(prev => (prev + 1) % logos.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isUserInteracting, logos.length]);

  // Handle container resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const newMousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    setMousePos(newMousePos);
    setIsUserInteracting(true);

    // Reset interaction timeout
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
      setMousePos({ x: 0, y: 0 });
    }, 3000);
  };

  const handleMouseLeave = () => {
    setIsUserInteracting(false);
    setMousePos({ x: 0, y: 0 });
    setHoveredLogo(null);
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const getLogoPosition = (index) => {
    const col = index % gridLayout.cols;
    const row = Math.floor(index / gridLayout.cols);
    
    const containerWidth = containerDimensions.width || 800;
    const containerHeight = gridLayout.rows * gridLayout.spacing;
    
    const gridWidth = (gridLayout.cols - 1) * gridLayout.spacing;
    const gridHeight = (gridLayout.rows - 1) * gridLayout.spacing;
    
    const offsetX = (containerWidth - gridWidth) / 2;
    const offsetY = (containerHeight - gridHeight) / 2;
    
    return {
      x: offsetX + col * gridLayout.spacing,
      y: offsetY + row * gridLayout.spacing
    };
  };

  const calculateLogoTransform = (index) => {
    const basePos = getLogoPosition(index);
    let x = basePos.x;
    let y = basePos.y;
    let scale = 1;
    let zIndex = 1;
    let glow = false;

    if (isUserInteracting && mousePos.x > 0) {
      // Magnetic interaction mode
      const distance = Math.sqrt(Math.pow(mousePos.x - x, 2) + Math.pow(mousePos.y - y, 2));
      const magneticForce = Math.max(0, 100 - distance) * 0.4;
      const angle = Math.atan2(mousePos.y - y, mousePos.x - x);
      
      x += Math.cos(angle) * magneticForce;
      y += Math.sin(angle) * magneticForce;
      
      if (distance < 80) {
        scale = 1.4;
        zIndex = 10;
        glow = true;
      } else if (distance < 120) {
        scale = 1.2;
        zIndex = 5;
      }
    } else {
      // Auto-focus mode
      if (index === autoFocusIndex) {
        scale = 1.3;
        zIndex = 10;
        glow = true;
      }
    }

    return { x, y, scale, zIndex, glow };
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white mb-4 md:mb-6 border border-red-500/20">
            <Building className="w-3 h-3 md:w-4 md:h-4 mr-2 text-red-500" />
            Trusted Partners
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Innovation</span>
          </h2>
          {/* <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Our partners 
          </p> */}
        </div>

        {/* Interactive Logo Container */}
        <div className="max-w-6xl mx-auto">
          <div 
            ref={containerRef}
            className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
            style={{ 
              height: `${gridLayout.rows * gridLayout.spacing + 60}px`,
              minHeight: '240px'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: `${gridLayout.spacing}px ${gridLayout.spacing}px`,
                backgroundPosition: `${(containerDimensions.width - (gridLayout.cols - 1) * gridLayout.spacing) / 2}px ${gridLayout.spacing / 2}px`
              }}></div>
            </div>

            {/* Status indicator */}
            {/* <div className="absolute top-4 right-4 z-20">
              <div className={`w-2 h-2 rounded-full ${isUserInteracting ? 'bg-green-400' : 'bg-blue-400'} animate-pulse`}></div>
              <div className="text-xs text-white/60 mt-1 hidden md:block">
                {isUserInteracting ? 'Interactive' : 'Auto-Focus'}
              </div>
            </div> */}

            {/* Partner Logos */}
            {logos.map((logo, index) => {
              const transform = calculateLogoTransform(index);
              
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    left: transform.x - gridLayout.logoSize / 2,
                    top: transform.y - gridLayout.logoSize / 2,
                    transform: `scale(${transform.scale})`,
                    zIndex: transform.zIndex,
                    width: gridLayout.logoSize,
                    height: gridLayout.logoSize
                  }}
                  onMouseEnter={() => setHoveredLogo(logo.name)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  {/* Glow effect */}
                  {transform.glow && (
                    <div className="absolute inset-0 bg-red-500/30 rounded-xl blur-lg animate-pulse"></div>
                  )}
                  
                  {/* Logo container */}
                  <div className="relative w-full h-full bg-white/90 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group">
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className={`max-w-full max-h-full object-contain p-2 transition-all duration-300 ${
                        transform.glow ? 'filter-none' : 'filter grayscale group-hover:grayscale-0'
                      }`}
                      style={{ padding: `${gridLayout.logoSize * 0.05}px` }}
                    />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredLogo === logo.name && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap z-30 animate-in fade-in duration-200">
                      {logo.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Auto-focus indicator */}
            {!isUserInteracting && (
              <div
                className="absolute w-20 h-20 border-2 border-red-500/60 rounded-full animate-pulse pointer-events-none"
                style={{
                  left: getLogoPosition(autoFocusIndex).x - 40,
                  top: getLogoPosition(autoFocusIndex).y - 40,
                  transition: 'all 0.8s ease-in-out'
                }}
              >
                <div className="absolute inset-2 border border-red-500/40 rounded-full animate-ping"></div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 md:mt-16">
          <p className="text-sm md:text-lg text-gray-400">
            Powering innovation with <span className="text-white font-semibold">our strategic partners</span> worldwide
          </p>
          {/* <p className="text-xs md:text-sm text-gray-500 mt-2">
            {isUserInteracting ? 'Move your mouse to interact with logos' : 'Auto-focusing through partners - hover to take control'}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;