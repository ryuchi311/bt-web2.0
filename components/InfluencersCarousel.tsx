import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Facebook, Youtube, Send, MessageCircle, BarChart3, Users } from 'lucide-react';

const influencers = [
  { 
    name: "Mike Tamago", 
    role: "Founder / Content Creator",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=800",
    reach: "150K+", 
    platforms: ["facebook", "x", "telegram", "discord"] 
  },
  { 
    name: "Alrock", 
    role: "Co-Founder / Streamer",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=800",
    reach: "120K+", 
    platforms: ["facebook", "youtube", "discord"] 
  },
  { 
    name: "Dong Ayan TV", 
    role: "Tech Influencer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800",
    reach: "85K+", 
    platforms: ["youtube", "facebook", "tiktok"] 
  },
  { 
    name: "Lester", 
    role: "Global BD / Speaker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    reach: "50K+", 
    platforms: ["x", "linkedin", "telegram"] 
  },
  { 
    name: "Crypto Titas", 
    role: "Community Leaders",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    reach: "95K+", 
    platforms: ["facebook", "x", "telegram"] 
  },
  { 
    name: "Ultm8x", 
    role: "Gaming Content",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800",
    reach: "70K+", 
    platforms: ["facebook", "youtube"] 
  }
];

const InfluencersCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % influencers.length);
    setTilt({ x: 0, y: 0 });
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + influencers.length) % influencers.length);
    setTilt({ x: 0, y: 0 });
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setTilt({ x: 0, y: 0 });
  }

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5; // Reduced tilt for better text readability
    const rotateX = ((centerY - y) / centerY) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const renderPlatformIcon = (platform: string) => {
    const className = "w-4 h-4 md:w-5 md:h-5";
    switch(platform) {
      case 'x': return <Twitter className={className} />;
      case 'facebook': return <Facebook className={className} />;
      case 'youtube': return <Youtube className={className} />;
      case 'telegram': return <Send className={className} />;
      case 'discord': return <MessageCircle className={className} />;
      default: return <Users className={className} />;
    }
  };

  const getCardStyle = (index: number) => {
    const total = influencers.length;
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
      transform = 'translate3d(-60%, 0, -100px) scale(0.85) perspective(1000px) rotateY(15deg)';
      zIndex = 20;
      opacity = 0.6;
      filter = 'brightness(50%) blur(1px)';
      pointerEvents = 'auto';
    } else if (isRight) {
      transform = 'translate3d(60%, 0, -100px) scale(0.85) perspective(1000px) rotateY(-15deg)';
      zIndex = 20;
      opacity = 0.6;
      filter = 'brightness(50%) blur(1px)';
      pointerEvents = 'auto';
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
      className: `absolute top-0 left-0 right-0 mx-auto w-[280px] md:w-[320px] h-[450px]`,
      onClick: diff !== 0 ? () => goToSlide(index) : undefined
    };
  };

  return (
    <div 
      className="relative w-full h-[550px] flex flex-col items-center justify-center overflow-hidden py-10 select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => { setIsAutoPlaying(true); setTilt({x:0, y:0}); }}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center perspective-1000">
        {influencers.map((influencer, index) => {
          const { style, className, onClick } = getCardStyle(index);
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`${className} cursor-pointer`}
              style={style}
              onClick={onClick}
            >
              <div className={`w-full h-full glass-panel rounded-[2rem] p-4 flex flex-col border border-white/10 bg-[#151515] transition-all duration-300 ${isActive ? 'shadow-[0_0_50px_rgba(253,189,22,0.1)] border-tamago-yellow/30' : ''}`}>
                 
                 {/* Image Area */}
                 <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden mb-4 bg-gray-800">
                    <img 
                      src={influencer.image} 
                      alt={influencer.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider text-tamago-yellow">
                       Verified
                    </div>
                 </div>

                 {/* Content Area */}
                 <div className="flex-1 flex flex-col items-center text-center px-2">
                     <h3 className="text-2xl font-display font-bold text-white mb-1">{influencer.name}</h3>
                     <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">{influencer.role}</p>

                     {/* Stats Box */}
                     <div className="w-full bg-white/5 rounded-xl p-3 mb-4 border border-white/5 flex items-center justify-between px-6">
                        <div className="flex items-center gap-2">
                           <BarChart3 size={16} className="text-tamago-accent" />
                           <span className="text-xs text-gray-400">Total Reach</span>
                        </div>
                        <span className="text-lg font-bold text-white font-display">{influencer.reach}</span>
                     </div>

                     {/* Platforms */}
                     <div className="mt-auto flex gap-3 justify-center">
                        {influencer.platforms.map((platform, i) => (
                           <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 hover:bg-tamago-yellow hover:text-black hover:border-tamago-yellow transition-all">
                              {renderPlatformIcon(platform)}
                           </div>
                        ))}
                     </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 flex items-center gap-4 z-40">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-tamago-yellow hover:text-black transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-tamago-yellow hover:text-black transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default InfluencersCarousel;