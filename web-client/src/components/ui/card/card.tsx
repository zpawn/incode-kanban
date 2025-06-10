import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { type Card as CardType }  from '@/features/cards';
import { IconButton } from '../button';
import { H4, P } from '../typography';

const cardVariants = cva('border border-primary padding-small margin-bottom-small', {
  variants: {},
  defaultVariants: {},
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  card: CardType;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Card = ({ className, card, onEdit, onDelete }: CardProps) => {
  const isShowActions = Boolean(onEdit || onDelete);

  return (
    <section className={clsx(cardVariants({ className }))} style={{ backgroundColor: 'white' }}>
      {card.title && (
        <header>
          <H4 className="margin-none">{card.title}</H4>
        </header>
      )}

      {card.description && <P>{card.description}</P>}

      {isShowActions && (
        <footer className="row flex-right">
          {onEdit && <IconButton icon="edit" onClick={onEdit} />}
          {onDelete && <IconButton icon="trash" onClick={onDelete} />}
        </footer>
      )}
    </section>
  );
};

export { Card };
