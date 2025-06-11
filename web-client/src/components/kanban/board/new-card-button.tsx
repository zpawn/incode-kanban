import { Plus } from 'react-feather';
import { Button } from '@/ui';
import { ControlledModal } from '@/components/controlled-modal';
import { CardForm } from '@/components/card-form';
import { type CreateCardDto } from '@/features/cards/types';
import { type Card as CardType } from '@/features/cards/types';

interface NewCardButtonProps {
  onSubmit: (data: Omit<CreateCardDto, 'board'>) => Promise<CardType | void>;
}

const NewCardButton = ({ onSubmit }: NewCardButtonProps) => {
  return (
    <ControlledModal
      title="Add Card"
      content={({ onClose }) => (
        <CardForm onSubmit={(data) => onSubmit(data).then(onClose)} />
      )}
    >
      {({ onOpen }) => (
        <Button full onClick={onOpen}>
          <Plus />
        </Button>
      )}
    </ControlledModal>
  )
};

export { NewCardButton };
