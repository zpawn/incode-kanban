import { type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      warning: 'btn-warning',
      danger: 'btn-danger',
    },
    size: {
      sm: 'btn-small',
      md: '',
      lg: 'btn-large',
    },
    full: {
      true: 'btn-block',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  full?: boolean;
}

const Button = ({ className, variant, size, full, ...props }: ButtonProps) => {
  return <button className={clsx(buttonVariants({ variant, size, full, className }))} {...props} />;
};

export { Button };
