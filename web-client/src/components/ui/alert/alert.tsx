import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const alertVariants = cva('alert', {
  variants: {
    variant: {
      primary: 'alert-primary',
      secondary: 'alert-secondary',
      success: 'alert-success',
      warning: 'alert-warning',
      danger: 'alert-danger',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = ({ className, variant, children, ...props }: AlertProps) => {
  return (
    <div className={clsx(alertVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export { Alert };
