import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

interface Slide {
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    type: 'video',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-animation-3162-large.mp4',
    title: 'The Future of Web3',
    subtitle: 'Incubating the next generation of digital excellence'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2071',
    title: 'Gaming Tournaments',
    subtitle: 'Compete, Win, and Earn in our community events'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?auto=format&fit=crop&q=80&w=2070',
    title: 'Expert Consultation',
    subtitle: 'Strategic guidance for your blockchain journey'
  }
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-full">
      <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group min-h-[300px]">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video 
                src={slide.src} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={slide.src} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-tamago-dark via-tamago-dark/50 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className={`transition-all duration-700 delay-300 transform ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <span className="inline-block px-3 py-1 bg-tamago-yellow text-black text-xs font-bold rounded-full mb-2">
                  FEATURED
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base max-w-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-tamago-yellow hover:text-black text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-tamago-yellow hover:text-black text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current ? 'bg-tamago-yellow w-6' : 'bg-white/30 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;