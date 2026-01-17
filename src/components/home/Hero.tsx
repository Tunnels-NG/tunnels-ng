import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating nodes
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = 60;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    // Code rain columns
    const codeRain: { x: number; y: number; speed: number; chars: string[]; opacity: number }[] = [];
    const columnCount = Math.floor(canvas.width / 30);
    const codeChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]=/\\'.split('');

    for (let i = 0; i < columnCount; i++) {
      codeRain.push({
        x: i * 30 + Math.random() * 15,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        chars: Array.from({ length: 15 }, () => codeChars[Math.floor(Math.random() * codeChars.length)]),
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Scanning line
    let scanLineY = 0;
    const scanLineSpeed = 1.5;

    // Grid pulse
    let gridPulse = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = `rgba(249, 115, 22, ${0.03 + Math.sin(gridPulse) * 0.01})`;
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      gridPulse += 0.02;

      // Draw code rain
      ctx.font = '12px monospace';
      codeRain.forEach((column) => {
        column.y += column.speed;
        if (column.y > canvas.height + 200) {
          column.y = -200;
          column.opacity = Math.random() * 0.3 + 0.1;
        }

        column.chars.forEach((char, i) => {
          const charY = column.y + i * 14;
          if (charY > 0 && charY < canvas.height) {
            const fadeOpacity = i === 0 ? column.opacity : column.opacity * (1 - i / column.chars.length);
            ctx.fillStyle = `rgba(249, 115, 22, ${fadeOpacity})`;
            ctx.fillText(char, column.x, charY);
          }
        });

        // Randomly change characters
        if (Math.random() < 0.02) {
          const randomIndex = Math.floor(Math.random() * column.chars.length);
          column.chars[randomIndex] = codeChars[Math.floor(Math.random() * codeChars.length)];
        }
      });

      // Draw floating nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.4)';
        ctx.fill();
      });

      // Draw connections between nodes
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw scanning line
      scanLineY += scanLineSpeed;
      if (scanLineY > canvas.height) scanLineY = 0;

      const gradient = ctx.createLinearGradient(0, scanLineY - 100, 0, scanLineY + 20);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0)');
      gradient.addColorStop(0.5, 'rgba(249, 115, 22, 0.1)');
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 100, canvas.width, 120);

      // Scanning line glow
      ctx.beginPath();
      ctx.moveTo(0, scanLineY);
      ctx.lineTo(canvas.width, scanLineY);
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-tunnels-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Corner accents */}
      <div className="absolute top-24 left-6 md:left-10 lg:left-16 w-20 h-20 border-l-2 border-t-2 border-tunnels-red/30 pointer-events-none" />
      <div className="absolute top-24 right-6 md:right-10 lg:right-16 w-20 h-20 border-r-2 border-t-2 border-tunnels-red/30 pointer-events-none" />
      <div className="absolute bottom-20 left-6 md:left-10 lg:left-16 w-20 h-20 border-l-2 border-b-2 border-tunnels-red/30 pointer-events-none" />
      <div className="absolute bottom-20 right-6 md:right-10 lg:right-16 w-20 h-20 border-r-2 border-b-2 border-tunnels-red/30 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-tunnels-black via-transparent to-tunnels-black pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight mt-8">
              We Co-Build Technology
              <br />
              <span className="text-tunnels-red">Businesses That Scale</span>
            </h1>
          </div>

          <p 
            className={`text-lg md:text-xl text-tunnels-lightgray max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A technology venture studio partnering with founders and growth-stage businesses 
            to build, automate, and scale revenue-generating products through structured 
            services and long-term partnerships.
          </p>

          <div 
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-tunnels-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-red-light hover:shadow-lg hover:shadow-tunnels-red/20"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/venture-studio" 
              className="inline-flex items-center px-8 py-4 border border-tunnels-gray text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tunnels-dark hover:border-tunnels-lightgray"
            >
              Venture Studio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div 
            className={`flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-tunnels-darkgray transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-sm text-tunnels-lightgray mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-tunnels-lightgray mt-1">Partners Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-sm text-tunnels-lightgray mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;