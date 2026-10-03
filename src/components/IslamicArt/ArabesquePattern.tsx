import React from 'react';

interface ArabesquePatternProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export const ArabesquePattern: React.FC<ArabesquePatternProps> = ({
  className = '',
  opacity = 0.04,
  color = '#d59b35'
}) => {
  return (
    <svg
      className={`pointer-events-none select-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="shaha-arabesque"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {/* Central Arabesque Palmette & Rosette */}
          <circle cx="80" cy="80" r="12" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="80" cy="80" r="5" fill={color} fillOpacity="0.6" />
          
          {/* Petal Cusps */}
          <path
            d="M80,68 C72,55 88,55 80,68 Z M80,92 C72,105 88,105 80,92 Z M68,80 C55,72 55,88 68,80 Z M92,80 C105,72 105,88 92,80 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />

          {/* Intertwining Foliate Tendrils */}
          <path
            d="M80,50 C60,20 20,60 50,80 C20,100 60,140 80,110 C100,140 140,100 110,80 C140,60 100,20 80,50 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.6"
            strokeDasharray="1,1"
          />

          {/* Corner Rosettes */}
          <circle cx="0" cy="0" r="10" fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="160" cy="0" r="10" fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="0" cy="160" r="10" fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="160" cy="160" r="10" fill="none" stroke={color} strokeWidth="0.8" />

          {/* Connecting Hairlines */}
          <line x1="0" y1="80" x2="68" y2="80" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="92" y1="80" x2="160" y2="80" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="80" y1="0" x2="80" y2="68" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="80" y1="92" x2="80" y2="160" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#shaha-arabesque)" />
    </svg>
  );
};
