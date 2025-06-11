import { Plus } from 'react-feather';
import { useAppSelector } from '@/store';
import { selectCardsByStatus, useCards, type CreateCardDto } from '@/features/cards';
import { Layout, Button, Card } from '@/ui';
import { ControlledModal } from '@/components/controlled-modal';
import { CardForm } from '@/components/card-form';
import { Column } from './column';
import { type Card as CartType } from '@/features/cards/types';

const Board = () => {
  const { createNewCard } = useCards();
  const todoCards = useAppSelector(selectCardsByStatus('todo'));
  const inProgressCards = useAppSelector(selectCardsByStatus('in-progress'));
  const doneCards = useAppSelector(selectCardsByStatus('done'));

  const onCreateCard = (data: Omit<CreateCardDto, 'board'>): Promise<CartType | void> =>
    createNewCard(data);

  return (
    <Layout.Row>
      <Layout.Col col={4}>
        <Column title="To Do">
          {todoCards.map((card) => (
            <Card key={card._id} card={card} onEdit={() => {}} onDelete={() => {}} />
          ))}
          <ControlledModal
            title="Add Card"
            content={({ onClose }) => (
              <CardForm onSubmit={(data) => onCreateCard(data).then(onClose)} />
            )}
          >
            {({ onOpen }) => (
              <Button full onClick={onOpen}>
                <Plus />
              </Button>
            )}
          </ControlledModal>
        </Column>
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="In Progress">
          {inProgressCards.map((card) => (
            <Card key={card._id} card={card} onEdit={() => {}} onDelete={() => {}} />
          ))}
        </Column>
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="Done">
          {doneCards.map((card) => (
            <Card key={card._id} card={card} onEdit={() => {}} onDelete={() => {}} />
          ))}
        </Column>
      </Layout.Col>
    </Layout.Row>
  );
};

export { Board };
