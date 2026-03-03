import React from 'react';

// 1. Dotted/dashed curved arrow
export const CurvedArrow = ({ className, color = "#FF1493" }: { className?: string, color?: string }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 110C10 110 30 20 110 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
    <path d="M90 10L110 10L105 30" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 2. 4-point star (sparkle)
export const SparkleFour = ({ className, color = "#CCFF00" }: { className?: string, color?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0C20 0 20 15 35 20C35 20 20 25 20 40C20 40 20 25 5 20C5 20 20 15 20 0Z" fill={color} stroke="#000" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// 3. 5-point star (sparkle)
export const SparkleFive = ({ className, color = "#FF8C00" }: { className?: string, color?: string }) => (
  <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 2L31 16L46 17L34 27L38 42L25 34L12 42L16 27L4 17L19 16L25 2Z" fill={color} stroke="#000" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// 4. Imperfect Circle
export const ImperfectCircle = ({ className, color = "#00BFFF" }: { className?: string, color?: string }) => (
  <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 5C60 4 75 18 76 38C77 58 62 76 42 75C22 74 4 58 5 38C6 18 20 6 40 5Z" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M38 8C56 9 70 22 68 40C66 58 50 72 32 70C14 68 4 52 6 34C8 16 20 7 38 8Z" stroke="#000" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 5. Small Cross (X)
export const CrossDoodle = ({ className, color = "#FF1493" }: { className?: string, color?: string }) => (
  <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5L25 25M25 5L5 25" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M6 4L24 26M26 6L4 24" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 6. Asterisk
export const AsteriskDoodle = ({ className, color = "#CCFF00" }: { className?: string, color?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5V35M5 20H35M9 9L31 31M31 9L9 31" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M21 4V36M4 21H36M10 8L32 32M32 8L10 32" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);


// 7. Thread/Sewing line
export const ThreadLine = ({ className, color = "#00BFFF" }: { className?: string, color?: string }) => (
  <svg className={className} width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10C30 5 40 15 60 10C80 5 90 15 110 10C130 5 140 15 160 10C180 5 190 15 195 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
    <path d="M4 11C29 6 41 16 61 11C81 6 91 16 111 11C131 6 141 16 161 11C181 6 191 16 196 11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 6" />
  </svg>
);

// 8. Loop/Scribble
export const LoopScribble = ({ className, color = "#FF8C00" }: { className?: string, color?: string }) => (
  <svg className={className} width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 30C20 10 40 5 50 25C60 45 40 55 30 40C20 25 50 10 70 15C90 20 95 40 90 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M6 31C21 11 41 6 51 26C61 46 41 56 31 41C21 26 51 11 71 16C91 21 96 41 91 51" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);