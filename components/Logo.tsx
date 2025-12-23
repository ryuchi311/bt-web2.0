import React from 'react';

interface LogoProps {
  className?: string;
  src?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({ className, src, style }) => {
  const defaultClass = 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative z-10 drop-shadow-2xl animate-bounce-short hover:scale-105 transition-transform duration-300';

  // If a className is provided, use it (header overrides default sizing).
    // Use the exact header classes and default width unless overridden
    const headerDefaultClass = 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative z-10 drop-shadow-2xl animate-bounce-short hover:scale-105 transition-transform duration-300';
    const classes = className && className.length > 0 ? className : headerDefaultClass;

    // Only apply inline styles if provided by the caller; do not force a default width
    const mergedStyle = style ?? undefined;

    return (
      <img
        src={src || "/src/assets/icon-bt/logo.png"}
        alt="Brgy Tamago Logo"
        className={classes}
        role="img"
        aria-label="Brgy Tamago Logo"
        style={mergedStyle}
      />
    );
};

export default Logo;