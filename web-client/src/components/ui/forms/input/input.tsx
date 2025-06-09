import { type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const inputVariants = cva('', {
  variants: {
    full: {
      true: 'input-block',
    },
  },
});

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  full?: boolean;
}

const Input = ({ className, full, ...props }: InputProps) => {
  return <input className={clsx(inputVariants({ full, className }))} {...props} />;
};

export { Input };
