import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const paragraphVariants = cva('', {
  variants: {
    align: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
  },
  defaultVariants: {},
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const P = ({ align, children, className, ...props }: ParagraphProps) => (
  <p className={clsx(paragraphVariants({ align, className }))} {...props}>
    {children}
  </p>
);

export { P };
