import { type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Edit, Trash2, Plus } from 'react-feather';

const icons = {
  edit: Edit,
  trash: Trash2,
  plus: Plus,
};

type IconName = keyof typeof icons;

const iconButtonVariants = cva('col padding-small border border-white', {
  variants: {},
  defaultVariants: {},
});

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: IconName;
}

const IconButton = ({ icon, className = '', style = {}, ...props }: IconButtonProps) => {
  const Icon = icons[icon];

  return Icon ? (
    <button
      className={clsx(iconButtonVariants({ className }))}
      style={{ boxShadow: 'none', ...style }}
      {...props}
    >
      <Icon />
    </button>
  ) : null;
};

export { IconButton };
