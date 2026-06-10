import React from 'react';
import { clsx } from 'clsx';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'hover:bg-primary/10 hover:text-primary',
      link: 'text-primary underline-offset-4 hover:underline',
    };
    
    const sizes = {
      default: 'h-11 px-6 py-2',
      sm: 'h-9 px-4 text-sm',
      lg: 'h-14 px-8 text-lg',
      icon: 'h-10 w-10',
    };
    
    return (
      <button
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };