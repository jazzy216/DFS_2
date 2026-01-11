
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * High-Fidelity Professional Logo for Dark Fire Security.
 * Incorporates a secure shield enclosure with a central 'Digital Spark'.
 * Palette: Deep Navy (#020617), Cyan (#22d3ee), and Teal.
 */
const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center group ${className}`} 
      style={{ width: size, height: size }}
      role="img"
      aria-label="Dark Fire Security Logo"
    >
      {/* Dynamic Glow Aura */}
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Shield Enclosure */}
        <path
          d="M50 5L12 22V48C12 70 32 90 50 95C68 90 88 70 88 48V22L50 5Z"
          fill="url(#shieldGrad)"
          stroke="#1e293b"
          strokeWidth="2"
        />

        {/* Inner Shield Border (Security Layer) */}
        <path
          d="M50 12L20 26V48C20 66 36 83 50 88C64 83 80 66 80 48V26L50 12Z"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeDasharray="4 2"
          className="opacity-40"
        />

        {/* Technical Circuit Patterns */}
        <g stroke="#22d3ee" strokeWidth="0.5" className="opacity-20">
          <path d="M35 35L45 45M65 35L55 45M35 65L45 55M65 65L55 55" />
          <circle cx="35" cy="35" r="1.5" />
          <circle cx="65" cy="35" r="1.5" />
          <circle cx="35" cy="65" r="1.5" />
          <circle cx="65" cy="65" r="1.5" />
        </g>

        {/* The Dark Fire Spark (Core) */}
        <g filter="url(#glow)">
          <path
            d="M50 28C50 28 32 45 32 62C32 72 40 80 50 80C60 80 68 72 68 62C68 45 50 28 50 28Z"
            fill="url(#flameGrad)"
            className="animate-pulse"
          />
          {/* Inner Spark Reflection */}
          <path
            d="M50 45C50 45 42 52 42 62C42 66 45 70 50 70C55 70 58 66 58 62C58 52 50 45 50 45Z"
            fill="#f8fafc"
            className="opacity-60"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
