import { Plus } from 'react-feather';
import { Layout, Button, Card } from '@/ui';
import { Column } from './column';

const Board = () => {
  return (
    <Layout.Row>
      <Layout.Col col={4}>
        <Column title="To Do">
          <Card
            title="Card title"
            description="Card description"
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <Button full onClick={() => {}}>
            <Plus />
          </Button>
        </Column>
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="In Progress" />
      </Layout.Col>

      <Layout.Col col={4}>
        <Column title="Done" />
      </Layout.Col>
    </Layout.Row>
  );
};

export { Board };
