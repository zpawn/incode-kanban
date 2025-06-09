import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const rowVariants = cva('row', {
  variants: {
    align: {
      left: '',
      right: 'flex-right',
      center: 'flex-center',
      edges: 'flex-edges',
      spaces: 'flex-spaces',
      top: 'flex-top',
      middle: 'flex-middle',
      bottom: 'flex-bottom',
    },
  },
  defaultVariants: {
    align: 'left',
  },
});

export interface RowProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {}

const Row = ({ className, align, ...props }: RowProps) => {
  return <div className={clsx(rowVariants({ align, className }))} {...props} />;
};

export { Row };
