import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { P } from '@/ui';

const columnVariants = cva(
  'border border-primary background-primary padding-small border-1 child-shadows-hover',
  {
    variants: {},
    defaultVariants: {},
  }
);

interface ColumnProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof columnVariants> {
  title: string;
}

const Column = ({ children, title, className, ...props }: ColumnProps) => {
  return (
    <>
      <P align="center">{title}</P>

      <div className={clsx(columnVariants({ className }))} {...props}>
        {children ? children : <P align="center">No cards</P>}
      </div>
    </>
  );
};

export { Column };
