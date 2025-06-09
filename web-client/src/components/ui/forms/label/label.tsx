import { type LabelHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const labelVariants = cva('', {
  variants: {
    required: {
      true: '',
    },
  },
});

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const Label = ({ children, className, required = false, ...props }: LabelProps) => {
  return (
    <label className={clsx(labelVariants({ className }))} {...props}>
      {children}
      {required && <span className="text-danger"> *</span>}
    </label>
  );
};

export { Label };
