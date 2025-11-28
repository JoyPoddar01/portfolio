import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick, 
  href,
  download,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary";
  
  const variants = {
    primary: "border-transparent text-white bg-secondary hover:bg-blue-900 shadow-md hover:shadow-lg",
    outline: "border-secondary text-secondary bg-transparent hover:bg-blue-50"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        download={download}
        onClick={onClick ? (e) => {
             // If it's an anchor link, we might want to prevent default if onClick acts as a scroller
             if (!download && href.startsWith('#')) {
                e.preventDefault();
                onClick();
             }
        } : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};