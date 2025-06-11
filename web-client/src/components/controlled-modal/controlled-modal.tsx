import { useState, type ReactNode } from 'react';
import { Modal } from '@/ui';

type ModalControls = {
  onOpen: () => void;
  onClose: () => void;
};

type ControlledModalProps = {
  children: (controls: ModalControls) => ReactNode;
  content: (controls: ModalControls) => ReactNode;
  title: string;
};

const ControlledModal = ({ children, title, content }: ControlledModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      {children({ onOpen, onClose })}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        children={content({ onOpen, onClose })}
      />
    </>
  );
};

export { ControlledModal };
