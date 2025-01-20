import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string; 
  target?: string; 
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  href,
  target,
  
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={` rounded text-black transition-all ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={` rounded text-black transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
