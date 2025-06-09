import { Layout, FormField, Button } from '@/ui';

const LoadBoard = () => {
  return (
    <Layout.Row>
      <Layout.Col col={9} align="middle">
        <FormField id="boardId" placeholder="Enter a board ID here" />
      </Layout.Col>

      <Layout.Col col={3}>
        <FormField>
          <Button full>Load</Button>
        </FormField>
      </Layout.Col>
    </Layout.Row>
  );
};

export { LoadBoard };
