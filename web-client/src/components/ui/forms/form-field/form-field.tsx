import { type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Label } from '../label';
import { Input } from '../input';

const formFieldVariants = cva('form-group', {
  variants: {},
  defaultVariants: {},
});

interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof formFieldVariants> {
  label?: string;
  required?: boolean;
  className?: string;
}

const FormField = ({
  id,
  label,
  className,
  required = false,
  children = null,
  ...props
}: FormFieldProps) => {
  return (
    <div className={clsx(formFieldVariants({ className }))}>
      {label && (
        <Label {...(id ? { htmlFor: id } : {})} required={required}>
          {label}
        </Label>
      )}
      {children || <Input full {...(id ? { id } : {})} {...props} />}
    </div>
  );
};

export { FormField };
