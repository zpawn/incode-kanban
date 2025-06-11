import { useState, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { H4, P, Modal, IconButton } from '@/ui';
import { type Card as CardType, type CardDto } from '@/features/cards';
import { CardForm } from '@/components/card-form';

const cardVariants = cva('border border-primary padding-small margin-bottom-small', {
  variants: {},
  defaultVariants: {},
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  card: CardType;
  onEdit?: (id: CardType['_id'], data: Omit<CardDto, 'board'>) => Promise<CardType | void>;
  onDelete?: () => void;
}

const Card = ({ className, card, onEdit, onDelete }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const isShowActions = Boolean(onEdit || onDelete);

  return (
    <>
      {onEdit && (
        <Modal isOpen={isOpen} onClose={onClose} title="Update Card">
          <CardForm
            card={card}
            onSubmit={(data) => onEdit(card._id, data).finally(onClose)}
          />
        </Modal>
      )}

      <section className={clsx(cardVariants({ className }))} style={{ backgroundColor: 'white' }}>
        {card.title && (
          <header>
            <H4 className="margin-none">{card.title}</H4>
          </header>
        )}

        {card.description && <P>{card.description}</P>}

        {isShowActions && (
          <footer className="row flex-right">
            {onEdit && <IconButton icon="edit" onClick={onOpen} />}
            {onDelete && <IconButton icon="trash" onClick={onDelete} />}
          </footer>
        )}
      </section>
    </>
  );
};

export { Card };
