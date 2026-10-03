import React, { useId } from 'react';

interface RubElHizbProps {
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
}

export const RubElHizb: React.FC<RubElHizbProps> = ({
  className = '',
  size = 48,
  color = '#d4af37',
  secondaryColor = '#064e3b'
}) => {
  const gradientId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient background glow */}
      <circle cx="50" cy="50" r="46" fill={`url(#${gradientId})`} />

      {/* First Square (Rotated 0 deg) */}
      <rect
        x="18"
        y="18"
        width="64"
        height="64"
        rx="3"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Second Square (Rotated 45 deg) */}
      <rect
        x="18"
        y="18"
        width="64"
        height="64"
        rx="3"
        transform="rotate(45 50 50)"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner Interlocking Starlets */}
      <polygon
        points="50,24 57,43 76,50 57,57 50,76 43,57 24,50 43,43"
        stroke={secondaryColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Central Rosette Circle */}
      <circle cx="50" cy="50" r="14" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.85" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" />

      {/* Cardinal Points Pearls */}
      <circle cx="50" cy="18" r="2.5" fill={color} />
      <circle cx="50" cy="82" r="2.5" fill={color} />
      <circle cx="18" cy="50" r="2.5" fill={color} />
      <circle cx="82" cy="50" r="2.5" fill={color} />
    </svg>
  );
};
