import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const colVariants = cva('col', {
  variants: {
    col: {
      auto: 'col-fill',
      1: 'col-1',
      2: 'col-2',
      3: 'col-3',
      4: 'col-4',
      5: 'col-5',
      6: 'col-6',
      7: 'col-7',
      8: 'col-8',
      9: 'col-9',
      10: 'col-10',
      11: 'col-11',
      12: 'col-12',
    },
    align: {
      top: 'align-top',
      middle: 'align-middle',
      bottom: 'align-bottom',
    },
  },
  defaultVariants: {
    col: 'auto',
  },
});

export interface ColProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colVariants> {}

const Col = ({ className, col, align, ...props }: ColProps) => {
  return <div className={clsx(colVariants({ col, align, className }))} {...props} />;
};

export { Col };
