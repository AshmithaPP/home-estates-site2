import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable Primary Orange Pill Button Component
 * Matches reference style from EverydayLivingSection:
 * - Orange pill background (#ff8c00 / var(--primary))
 * - Bold uppercase black text with tracking
 * - Right circular icon badge with smooth hover animation
 */
export const Button = ({
  children,
  onClick,
  href,
  icon: Icon = ArrowUpRight,
  showIcon = true,
  variant = 'primary', // 'primary' | 'secondary' | 'glass' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = "group inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px]",
    md: "px-4.5 py-2.5 text-xs",
    lg: "px-6 py-3 text-xs sm:text-sm",
  };

  const variantStyles = {
    primary: "bg-[#ff8c00] hover:bg-[#e67e00] text-black hover:shadow-[#ff8c00]/30",
    secondary: "bg-[#383838] hover:bg-[#484848] text-[#f0ede8] border border-white/10 hover:border-[#ff8c00]/40",
    glass: "glass-pill text-white hover:bg-white/20 border border-white/15",
    outline: "bg-transparent border-2 border-[#ff8c00] text-[#ff8c00] hover:bg-[#ff8c00] hover:text-black",
  };

  const iconCircleSize = {
    sm: "w-3.5 h-3.5",
    md: "w-4.5 h-4.5",
    lg: "w-5 h-5",
  };

  const iconSize = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
  };

  const content = (
    <>
      <span>{children}</span>
      {showIcon && Icon && (
        <div className={`${iconCircleSize[size]} rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 shrink-0`}>
          <Icon className={`${iconSize[size]} ${variant === 'primary' ? 'text-black' : 'text-current'}`} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        style={{ fontFamily: 'Montserrat' }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
