import React from 'react';

// SVG icons for mystical elements
export const BuziosIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C8.5 2 6 4.5 6 8c0 2 1 4 2.5 5.5L12 22l3.5-8.5C17 12 18 10 18 8c0-3.5-2.5-6-6-6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
  </svg>
);

export const MysticalSmokeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22c0-1 0-2 1-3s2-1 2-3-1-2-2-3 1-2 1-3-1-1-1-2 1-1 1-2-1-1-1-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 22c0-1 0-2 1-3s2-1 2-3-1-2-2-3 1-2 1-3-1-1-1-2 1-1 1-2-1-1-1-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
    <path
      d="M8 22c0-1 0-2 1-3s2-1 2-3-1-2-2-3 1-2 1-3-1-1-1-2 1-1 1-2-1-1-1-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
  </svg>
);

export const RitualSymbolIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polygon
      points="12,6 16,18 8,18"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CandleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="10" y="8" width="4" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 8c0-2 1-3 1-5s-1-1-1-1-1-1-1 1 1 3 1 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="12" cy="3" rx="0.5" ry="1" fill="currentColor" />
  </svg>
);

export const MoonPhasesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.5" />
    <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const CrystalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <polygon
      points="12,2 22,8 22,16 12,22 2,16 2,8"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path d="M2 8l10 4 10-4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 12v10" stroke="currentColor" strokeWidth="2" />
    <path d="M2 8l10-6 10 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);