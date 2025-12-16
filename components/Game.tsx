import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Zap, Trophy, Cpu, MousePointer2, Hammer } from 'lucide-react';
import { generateGameLore } from '../services/geminiService';
import { Logo } from './Logo';

const Game: React.FC = () => {
  const [yolk, setYolk] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickers, setAutoClickers] = useState(0);
  const [lore, setLore] = useState<string[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [isGeneratingLore, setIsGeneratingLore] = useState(false);
  
  // Upgrade Costs
  const clickUpgradeCost = Math.floor(10 * Math.pow(1.5, clickPower));
  const autoClickerCost = Math.floor(50 * Math.pow(1.5, autoClickers));

  // Audio simulation (visual feedback only as per constraints, but setup for expansion)
  const eggRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClickers > 0) {
        setYolk(prev => prev + (autoClickers * 1));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClickers]);

  const handleEggClick = useCallback(() => {
    setIsClicking(true);
    setYolk(prev => prev + clickPower);
    
    // Trigger shake animation
    if (eggRef.current) {
      eggRef.current.classList.remove('animate-shake');
      void eggRef.current.offsetWidth; // trigger reflow
      eggRef.current.classList.add('animate-shake');
    }

    setTimeout(() => setIsClicking(false), 100);

    // Random lore chance
    if (Math.random() > 0.95 && !isGeneratingLore) {
      setIsGeneratingLore(true);
      generateGameLore(yolk + clickPower).then(newLore => {
        setLore(prev => [newLore, ...prev].slice(0, 5));
        setIsGeneratingLore(false);
      });
    }
  }, [clickPower, yolk, isGeneratingLore]);

  const buyClickUpgrade = () => {
    if (yolk >= clickUpgradeCost) {
      setYolk(prev => prev - clickUpgradeCost);
      setClickPower(prev => prev + 1);
    }
  };

  const buyAutoClicker = () => {
    if (yolk >= autoClickerCost) {
      setYolk(prev => prev - autoClickerCost);
      setAutoClickers(prev => prev + 1);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col items-center justify-start md:justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Game Area */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tamago-yellow via-tamago-accent to-purple-600 animate-pulse-slow"></div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{yolk.toLocaleString()} <span className="text-tamago-yellow">YOLK</span></h2>
          <p className="text-gray-400 mb-8 font-mono text-xs md:text-sm">CPS: {autoClickers} | Power: {clickPower}</p>

          <div 
            ref={eggRef}
            onClick={handleEggClick}
            className={`cursor-pointer transition-transform duration-100 transform active:scale-95 ${isClicking ? 'scale-95' : ''} relative select-none touch-manipulation`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* SVG Logo Component */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
               {/* Background radial glow */}
               <div className="absolute inset-0 bg-tamago-yellow/10 rounded-full blur-[40px] md:blur-[60px] animate-pulse-slow"></div>
               
               <Logo className="w-full h-full drop-shadow-[0_0_30px_rgba(255,184,0,0.3)] z-10" />
               
               {/* Click Effect */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none ${isClicking ? 'opacity-100 scale-110' : 'opacity-0 scale-75'} transition-all duration-100`}>
                   <Zap className="w-24 h-24 md:w-32 md:h-32 text-white drop-shadow-[0_0_10px_gold]" fill="currentColor" />
               </div>
            </div>
          </div>

          <p className="mt-8 text-gray-500 text-xs md:text-sm animate-pulse font-mono">Tap the Ninja to hatch resources</p>
        </div>

        {/* Upgrade Panel */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-6 flex-1">
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="text-tamago-accent" /> Upgrades
            </h3>
            
            <div className="space-y-4">
              <button 
                onClick={buyClickUpgrade}
                disabled={yolk < clickUpgradeCost}
                className={`w-full p-3 md:p-4 rounded-xl flex items-center justify-between border transition-all ${
                  yolk >= clickUpgradeCost 
                    ? 'border-tamago-accent/50 bg-tamago-accent/10 hover:bg-tamago-accent/20 cursor-pointer active:scale-[0.98]' 
                    : 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-tamago-accent/20 p-2 rounded-lg">
                    <MousePointer2 size={18} className="text-tamago-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm md:text-base">Neural Link</div>
                    <div className="text-[10px] md:text-xs text-gray-400">+1 Click Power</div>
                  </div>
                </div>
                <div className="font-mono text-sm md:text-base text-tamago-yellow">{clickUpgradeCost} Y</div>
              </button>

              <button 
                onClick={buyAutoClicker}
                disabled={yolk < autoClickerCost}
                className={`w-full p-3 md:p-4 rounded-xl flex items-center justify-between border transition-all ${
                  yolk >= autoClickerCost 
                    ? 'border-green-500/50 bg-green-500/10 hover:bg-green-500/20 cursor-pointer active:scale-[0.98]' 
                    : 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Hammer size={18} className="text-green-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm md:text-base">Auto-Hatcher</div>
                    <div className="text-[10px] md:text-xs text-gray-400">+1 Yolk / sec</div>
                  </div>
                </div>
                <div className="font-mono text-sm md:text-base text-tamago-yellow">{autoClickerCost} Y</div>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 h-40 md:h-48 overflow-y-auto">
             <h3 className="text-lg md:text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-500" /> Data Logs
            </h3>
            <div className="space-y-2">
              {lore.length === 0 ? (
                <p className="text-gray-500 text-xs md:text-sm italic">No data fragments recovered yet...</p>
              ) : (
                lore.map((text, idx) => (
                  <div key={idx} className="text-[10px] md:text-xs text-gray-300 border-l-2 border-tamago-yellow pl-2 py-1 bg-white/5 rounded-r">
                    <span className="text-tamago-yellow mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {text}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;