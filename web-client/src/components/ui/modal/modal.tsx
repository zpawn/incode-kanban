import { type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const modalVariants = cva('modal', {
  variants: {},
  defaultVariants: {},
});

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal = ({ title, style, isOpen, onClose, children, className, ...props }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={clsx(modalVariants({ className }))}
      style={{ opacity: 1, visibility: 'visible', ...style }}
      {...props}
    >
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal-body" style={{ top: '50%', minWidth: '36rem' }}>
        <label className="btn-close" onClick={onClose}>
          X
        </label>
        {title && <h4 className="modal-title">{title}</h4>}
        <div className="modal-text">{children}</div>
      </div>
    </div>
  );
};

export { Modal };
