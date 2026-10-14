import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <div 
      className={`inline-flex items-center gap-3 cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      {/* Sun + Solar Panel Icon */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Sun Rays (Yellow/Amber) */}
          <path
            d="M8 8L11 11M22 3V7M3 22H7M13 5L15 8M5 13L8 15"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Sun Core Glow */}
          <circle cx="16" cy="16" r="8" fill="#FBBF24" />
          <circle cx="16" cy="16" r="6" fill="#F59E0B" />

          {/* Solar Panel (Angled Blue Perspective Grid) */}
          <g transform="rotate(12 24 24)">
            <rect
              x="14"
              y="18"
              width="24"
              height="18"
              rx="2.5"
              fill="#1E40AF"
              stroke="#60A5FA"
              strokeWidth="1.2"
            />
            {/* Grid Lines */}
            <line x1="22" y1="18" x2="22" y2="36" stroke="#93C5FD" strokeWidth="1" />
            <line x1="30" y1="18" x2="30" y2="36" stroke="#93C5FD" strokeWidth="1" />
            <line x1="14" y1="24" x2="38" y2="24" stroke="#93C5FD" strokeWidth="1" />
            <line x1="14" y1="30" x2="38" y2="30" stroke="#93C5FD" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="text-xl font-extrabold tracking-tight text-[#0F172A] leading-tight flex items-baseline">
          <span>GreenIndo</span>
        </div>
        <span className="text-[7.5px] font-bold tracking-widest text-[#64748B] uppercase leading-none mt-0.5">
          Clean Energy For A Brighter Tomorrow
        </span>
      </div>
    </div>
  );
};
