import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const partners = [
  { name: "Aquafarm", logo: "/logos/Aquafarm.png", type: "GameFi", color: "border-blue-400", shadow: "shadow-blue-400/20" },
  { name: "Arcus", logo: "/logos/Arcus.png", type: "GameFi", color: "border-yellow-400", shadow: "shadow-yellow-400/20" },
  { name: "Bitrue", logo: "/logos/Bitrue.png", type: "Exchange", color: "border-blue-600", shadow: "shadow-blue-600/20" },
  { name: "Heroes of Mavia", logo: "/logos/Heroes of Mavia.png", type: "GameFi", color: "border-red-500", shadow: "shadow-red-500/20" },
  { name: "Huobi", logo: "/logos/Huobi.png", type: "Exchange", color: "border-blue-500", shadow: "shadow-blue-500/20" },
  { name: "KOF Arena", logo: "/logos/Kof.png", type: "GameFi", color: "border-purple-500", shadow: "shadow-purple-500/20" },
  { name: "LBank", logo: "/logos/LBank.png", type: "Exchange", color: "border-orange-400", shadow: "shadow-orange-400/20" },
  { name: "Netmarble", logo: "/logos/Netmarble.png", type: "Game Publisher", color: "border-gray-400", shadow: "shadow-gray-400/20" },
  { name: "p2eAll", logo: "/logos/p2eall.png", type: "GameFi Platform", color: "border-pink-400", shadow: "shadow-pink-400/20" },
  { name: "Perplay", logo: "/logos/Perplay.png", type: "GameFi", color: "border-purple-400", shadow: "shadow-purple-400/20" },
  { name: "Playermon", logo: "/logos/Playermon.png", type: "GameFi", color: "border-yellow-500", shadow: "shadow-yellow-500/20" },
  { name: "Thetan Arena", logo: "/logos/Thetan Arena.png", type: "GameFi", color: "border-green-400", shadow: "shadow-green-400/20" },
  { name: "Wikibit", logo: "/logos/Wikibit.png", type: "Crypto Data", color: "border-green-500", shadow: "shadow-green-500/20" },
];

const PartnersCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % partners.length);
    setTilt({ x: 0, y: 0 });
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setTilt({ x: 0, y: 0 });
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setTilt({ x: 0, y: 0 });
  }

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
    
    setTouchEnd(null);
    setTouchStart(null);
    setIsAutoPlaying(true);
  };

  // Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt (max 15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setTilt({ x: 0, y: 0 });
  };

  // Calculate styles for each card
  const getCardStyle = (index: number) => {
    const total = partners.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    const isActive = diff === 0;
    const isLeft = diff === -1;
    const isRight = diff === 1;

    let transform = 'translate3d(0, 0, -300px) scale(0.6)';
    let zIndex = 0;
    let opacity = 0;
    let filter = 'brightness(30%) blur(2px)';
    let pointerEvents: 'auto' | 'none' = 'none';

    if (isActive) {
      transform = `translate3d(0, 0, 0) scale(1) perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;
      zIndex = 30;
      opacity = 1;
      filter = 'brightness(100%) blur(0px)';
      pointerEvents = 'auto';
    } else if (isLeft) {
      transform = 'translate3d(-85%, 0, -100px) scale(0.85) perspective(1000px) rotateY(25deg)';
      zIndex = 20;
      opacity = 0.8;
      filter = 'brightness(60%) blur(1px)';
      pointerEvents = 'auto';
    } else if (isRight) {
      transform = 'translate3d(85%, 0, -100px) scale(0.85) perspective(1000px) rotateY(-25deg)';
      zIndex = 20;
      opacity = 0.8;
      filter = 'brightness(60%) blur(1px)';
      pointerEvents = 'auto';
    } else if (Math.abs(diff) === 2) {
      const dir = diff < 0 ? -1 : 1;
      transform = `translate3d(${dir * 160}%, 0, -200px) scale(0.7) perspective(1000px) rotateY(${dir * 35}deg)`;
      zIndex = 10;
      opacity = 0.4;
    }

    return {
      style: {
        transform,
        zIndex,
        opacity,
        filter,
        pointerEvents,
        transition: isActive ? 'transform 0.1s ease-out, filter 0.5s' : 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      className: `absolute top-0 left-0 right-0 mx-auto w-[280px] md:w-[350px] h-[400px]`,
      onClick: diff !== 0 ? () => goToSlide(index) : undefined
    };
  };

  return (
    <div 
      className="relative w-full h-[550px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden py-10 select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tamago-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Cards Container */}
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center perspective-1000">
        {partners.map((partner, index) => {
          const { style, className, onClick } = getCardStyle(index);
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`${className} cursor-pointer`}
              style={style}
              onClick={onClick}
            >
              <div className={`w-full h-full glass-panel rounded-3xl p-8 flex flex-col items-center justify-between border-2 bg-[#1a1a1a] transition-all duration-300 ${
                  isActive ? `${partner.color} ${partner.shadow} shadow-2xl` : 'border-white/5 shadow-none hover:border-white/20'
              }`}>
                 
                 {/* Top Badge */}
                 <div className="w-full flex justify-between items-start">
                     <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
                     {isActive && <ExternalLink size={16} className="text-gray-400 opacity-50" />}
                 </div>

                 {/* Logo Area */}
                 <div className="flex-1 w-full flex items-center justify-center relative my-4">
                     {/* Reflection/Glow behind logo */}
                     {isActive && <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full"></div>}
                     
                     <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-[240px] object-contain drop-shadow-xl z-10"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent && !parent.querySelector('.fallback-text')) {
                                const span = document.createElement('span');
                                span.textContent = partner.name;
                                span.className = "fallback-text text-2xl font-black text-center text-white font-display uppercase tracking-wider";
                                parent.appendChild(span);
                            }
                        }}
                     />
                 </div>
                 
                 {/* Info Area */}
                 <div className="text-center w-full">
                     <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2 tracking-tight">{partner.name}</h3>
                     <div className="h-px w-12 bg-white/20 mx-auto mb-3"></div>
                     <span className="text-xs md:text-sm font-mono text-tamago-yellow uppercase tracking-widest block">{partner.type}</span>
                 </div>

                 {/* Shine Effect for Active Card */}
                 {isActive && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none"></div>
                 )}
              </div>
              
              {/* Reflection under the card */}
              {isActive && (
                  <div className="absolute -bottom-8 left-0 right-0 h-8 mx-auto w-[90%] bg-black/50 blur-xl rounded-[100%] z-[-1]"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 flex items-center gap-6 z-40">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-4 rounded-full bg-black/40 border border-white/10 text-white hover:bg-tamago-yellow hover:text-black hover:scale-110 transition-all backdrop-blur-md group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        
        <div className="flex gap-2 bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/5">
            {partners.map((_, idx) => (
                <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-8 bg-tamago-yellow shadow-[0_0_10px_#fdbd16]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                />
            ))}
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="p-4 rounded-full bg-black/40 border border-white/10 text-white hover:bg-tamago-yellow hover:text-black hover:scale-110 transition-all backdrop-blur-md group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      
      {/* Decorative Side Gradients */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-tamago-dark to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-tamago-dark to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default PartnersCarousel;