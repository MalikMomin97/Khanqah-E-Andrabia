import React, { useId } from 'react';

interface GirihPatternProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export const GirihPattern: React.FC<GirihPatternProps> = ({
  className = '',
  opacity = 0.05,
  color = '#d4af37'
}) => {
  const patternId = useId();
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={patternId}
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          {/* Central 8-Pointed Star Lattice */}
          <polygon
            points="60,20 72,48 100,60 72,72 60,100 48,72 20,60 48,48"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />
          {/* Intersecting squares */}
          <rect
            x="35"
            y="35"
            width="50"
            height="50"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          <rect
            x="35"
            y="35"
            width="50"
            height="50"
            transform="rotate(45 60 60)"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          {/* Corner Connectors */}
          <line x1="0" y1="0" x2="35" y2="35" stroke={color} strokeWidth="0.6" />
          <line x1="120" y1="0" x2="85" y2="35" stroke={color} strokeWidth="0.6" />
          <line x1="0" y1="120" x2="35" y2="85" stroke={color} strokeWidth="0.6" />
          <line x1="120" y1="120" x2="85" y2="85" stroke={color} strokeWidth="0.6" />
          {/* Medial Dots */}
          <circle cx="60" cy="60" r="1.5" fill={color} />
          <circle cx="0" cy="60" r="1.5" fill={color} />
          <circle cx="120" cy="60" r="1.5" fill={color} />
          <circle cx="60" cy="0" r="1.5" fill={color} />
          <circle cx="60" cy="120" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
