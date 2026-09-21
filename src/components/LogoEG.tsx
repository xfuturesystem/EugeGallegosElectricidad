import React from 'react';

interface LogoEGProps {
  className?: string;
  variant?: 'light' | 'dark' | 'current';
}

export const LogoEG: React.FC<LogoEGProps> = ({ 
  className = 'h-8 w-auto',
  variant = 'light' 
}) => {
  const fillColor = variant === 'light' ? '#FFFFFF' : variant === 'dark' ? '#0F172A' : 'currentColor';
  const subFill = variant === 'light' ? '#E2E8F0' : variant === 'dark' ? '#334155' : 'currentColor';

  return (
    <svg
      viewBox="0 0 360 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Electricidad Gallegos"
      role="img"
    >
      {/* Top line: ELECTRICIDAD */}
      <text
        x="2"
        y="28"
        fill={subFill}
        fontFamily="-apple-system, BlinkMacSystemFont, 'Montserrat', 'Eurostile', 'Bank Gothic', 'Arial Black', sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="0.25em"
      >
        ELECTRICIDAD
      </text>

      {/* Bottom line: GALLEGOS */}
      <text
        x="2"
        y="76"
        fill={fillColor}
        fontFamily="-apple-system, BlinkMacSystemFont, 'Montserrat', 'Eurostile', 'Bank Gothic', 'Arial Black', sans-serif"
        fontSize="52"
        fontWeight="900"
        letterSpacing="0.10em"
      >
        GALLEGOS
      </text>
    </svg>
  );
};
