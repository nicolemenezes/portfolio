import React from 'react';
import { clsx } from 'clsx';

const Badge = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors';
  
  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border text-foreground',
    accent: 'bg-accent/10 text-accent border border-accent/20',
  };
  
  return (
    <div
      ref={ref}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = 'Badge';

export { Badge };