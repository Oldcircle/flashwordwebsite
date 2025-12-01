import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold rounded-2xl transition-all active:translate-y-[4px] active:border-b-0 uppercase tracking-widest flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-duo-green text-white border-b-4 border-duo-green-dark hover:bg-[#61e002]",
    secondary: "bg-duo-blue text-white border-b-4 border-duo-blue-dark hover:bg-[#20bdff]",
    danger: "bg-duo-red text-white border-b-4 border-duo-red-dark hover:bg-[#ff5f5f]",
    ghost: "bg-transparent text-duo-blue border-2 border-transparent hover:bg-slate-100",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm border-b-[3px]",
    md: "py-3 px-8 text-base",
    lg: "py-4 px-10 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};