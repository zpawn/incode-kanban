import { Plus } from 'react-feather';
import { useAppSelector } from '@/store';
import { selectCardsByStatus } from '@/features/cards';
import { Layout, Button, Card } from '@/ui';
import { Column } from './column';

const Board = () => {
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
              onDelete={() => {}}
            />
          ))}
          <Button full onClick={() => {}}>
            <Plus />
          </Button>
        </Column>
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="In Progress">
          {inProgressCards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </Column>
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="Done">
          {doneCards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </Column>
      </Layout.Col>
    </Layout.Row>
  );
};

export { Board };
