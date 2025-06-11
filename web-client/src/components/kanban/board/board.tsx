import { useAppSelector } from '@/store';
import { selectCardsByStatus, useCards, type CreateCardDto } from '@/features/cards';
import { Layout, Card } from '@/ui';
import { Column } from './column';
import { NewCardButton } from './new-card-button';
import { type Card as CardType } from '@/features/cards/types';

const Board = () => {
  const { createNewCard, deleteCardById } = useCards();
  const todoCards = useAppSelector(selectCardsByStatus('todo'));
  const inProgressCards = useAppSelector(selectCardsByStatus('in-progress'));
  const doneCards = useAppSelector(selectCardsByStatus('done'));

  return (
    <Layout.Row>
      <Layout.Col col={4}>
        <Column title="To Do">
          {todoCards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onEdit={() => {}}
              onDelete={() => deleteCardById(card._id)}
            />
          ))}
          <NewCardButton onSubmit={createNewCard} />
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
