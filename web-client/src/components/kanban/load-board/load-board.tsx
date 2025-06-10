import { type FormEvent } from 'react';
import { useLoadBoard } from '@/features/board';
import { Layout, FormField, Button } from '@/ui';

const LoadBoard = () => {
  const loadBoard = useLoadBoard();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const boardId = formData.get('boardId') as string;

    if (boardId) {
      loadBoard(boardId);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Layout.Row>
        <Layout.Col col={9} align="middle">
          <FormField
            id="boardId"
            name="boardId"
            placeholder="Enter a board ID here"
            required
          />
        </Layout.Col>

        <Layout.Col col={3}>
          <FormField>
            <Button full type='submit'>Load</Button>
          </FormField>
        </Layout.Col>
      </Layout.Row>
    </form>
  );
};

export { LoadBoard };
