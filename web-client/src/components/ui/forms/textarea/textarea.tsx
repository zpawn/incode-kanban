import { type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const textareaVariants = cva('', {
  variants: {
    full: {
      true: 'input-block',
    },
    noResize: {
      true: 'no-resize',
      false: '',
    },
  },
  defaultVariants: {
    noResize: false,
  },
});

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  full?: boolean;
  noResize?: boolean;
}

const Textarea = ({ className, full, noResize, ...props }: TextareaProps) => {
  return <textarea className={clsx(textareaVariants({ full, noResize, className }))} {...props} />;
};

export { Textarea };
