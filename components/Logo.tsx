import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brgy Tamago Ninja Chick Logo"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Main Background Circle (Dark Grey/Black) */}
      <circle cx="100" cy="100" r="95" fill="#1f1f20" stroke="#fdbd16" strokeWidth="4" />
      
      {/* Inner Background (Yellow) */}
      <circle cx="100" cy="100" r="85" fill="#fdbd16" />

      {/* Egg Shell (White) - Bottom Half */}
      <path 
        d="M 35 110 Q 100 170 165 110 L 155 90 L 135 100 L 115 85 L 100 100 L 85 85 L 65 100 L 45 90 Z" 
        fill="#ffffff" 
        stroke="#1f1f20" 
        strokeWidth="2"
      />
      
      {/* Chick Body (Orange/Yellow) - Top Half */}
      <path 
        d="M 50 100 L 60 40 Q 100 20 140 40 L 150 100 Z" 
        fill="#ef6d1f" 
      />

      {/* Egg Shell - Top Half (Hat/Helmet style) */}
      <path 
        d="M 50 70 Q 100 10 150 70 L 140 85 L 125 75 L 100 90 L 75 75 L 60 85 Z" 
        fill="#ffffff" 
        stroke="#1f1f20" 
        strokeWidth="2"
      />

      {/* Ninja Headband (Red) */}
      <path 
        d="M 45 60 Q 100 50 155 60 L 155 75 Q 100 65 45 75 Z" 
        fill="#f22524" 
        stroke="#1f1f20" 
        strokeWidth="1"
      />
      {/* Headband Ties */}
      <path d="M 45 65 L 20 50 L 25 70 L 45 70 Z" fill="#f22524" stroke="#1f1f20" strokeWidth="1"/>
      
      {/* Eyes */}
      <circle cx="80" cy="90" r="6" fill="#1f1f20" />
      <circle cx="120" cy="90" r="6" fill="#1f1f20" />
      <circle cx="82" cy="88" r="2" fill="white" />
      <circle cx="122" cy="88" r="2" fill="white" />

      {/* Beak */}
      <path d="M 95 98 L 105 98 L 100 108 Z" fill="#fdbd16" />

      {/* Ninja Weapons/Gear sticking out of shell (Stylized) */}
      <rect x="145" y="100" width="8" height="40" transform="rotate(-15 145 100)" fill="#f22524" stroke="#1f1f20" strokeWidth="1" rx="2" />
      <rect x="150" y="90" width="4" height="20" transform="rotate(-15 150 90)" fill="#585858" />

    </svg>
  );
};

export default Logo;