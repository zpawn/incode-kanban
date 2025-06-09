import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import './heading.css';

const headingVariants = cva('', {
  variants: {
    as: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
    },
  },
});

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface BaseHeadingProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingVariant;
  className?: string;
}

const H1 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h1 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h1>
);

const H2 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h2 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h2>
);

const H3 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h3 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h3>
);

const H4 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h4 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h4>
);

const H5 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h5 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h5>
);

const H6 = ({ children, className, as, ...props }: BaseHeadingProps) => (
  <h6 {...props} className={clsx(headingVariants({ as, className }))}>
    {children}
  </h6>
);

export { H1, H2, H3, H4, H5, H6 };
