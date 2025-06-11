import { type SelectHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const selectVariants = cva('', {
  variants: {
    full: {
      true: 'input-block',
    },
  },
});

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  full?: boolean;
  options: { value: string; label: string }[];
}

const Select = ({
  className,
  full,
  options,
  ...props
}: SelectProps) => {
  return (
    <select
      className={clsx(selectVariants({ full, className }))}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { Select };
