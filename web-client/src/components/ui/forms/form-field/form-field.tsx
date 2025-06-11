import { type InputHTMLAttributes, type Ref } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Label } from '../label';
import { Input } from '../input';

const formFieldVariants = cva('form-group', {
  variants: {},
  defaultVariants: {},
});

interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formFieldVariants> {
  label?: string;
  required?: boolean;
  className?: string;
  ref?: Ref<HTMLInputElement>;
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
