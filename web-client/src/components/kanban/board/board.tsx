import { useCallback } from 'react';
import { useAppSelector } from '@/store';
import { selectCardsByStatus, useCards, type Card as CardType } from '@/features/cards';
import { Layout } from '@/ui';
import { Card, NewCard } from '@/components/card';
import { Column } from './column';

const Board = () => {
  const { createNewCard, deleteCardById, updateCard } = useCards();
  const todoCards = useAppSelector(selectCardsByStatus('todo'));
  const inProgressCards = useAppSelector(selectCardsByStatus('in-progress'));
  const doneCards = useAppSelector(selectCardsByStatus('done'));

  const renderCards = useCallback((cards: CardType[]) => {
    return cards.map((card) => (
      <Card
        key={card._id}
        card={card}
        onEdit={(id, data) => updateCard(id, data)}
        onDelete={() => deleteCardById(card._id)}
      />
    ));
  }, [deleteCardById, updateCard]);

  return (
    <>
      <Layout.Row>
        <Layout.Col col={4}>
          <Column title="To Do">
            {renderCards(todoCards)}
            <NewCard onSubmit={createNewCard} />
          </Column>
        </Layout.Col>

        <Layout.Col col={4}>
          <Column title="In Progress">
            {renderCards(inProgressCards)}
          </Column>
        </Layout.Col>

        <Layout.Col col={4}>
          <Column title="Done">
            {renderCards(doneCards)}
          </Column>
        </Layout.Col>
      </Layout.Row>
    </>
  );
};

export { Board };
