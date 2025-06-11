import { useRef, useEffect, type FormEvent } from 'react';
import { useAppSelector } from '@/store';
import { useLoadBoard, useLoadBoards } from '@/features/board';
import { Layout, FormField, Button } from '@/ui';

const LoadBoard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const loadBoard = useLoadBoard();
  const loadBoards = useLoadBoards();
  const { boards } = useAppSelector((state) => state.board);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const boardId = formData.get('boardId') as string;

    if (boardId) {
      loadBoard(boardId);
    }
  };

  const onClickBoardLink = (id: string) => {
    if (inputRef.current) {
      inputRef.current.value = id;
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    loadBoards();
  }, [loadBoards]);

  return (
    <form onSubmit={onSubmit}>
      <Layout.Row>
        <Layout.Col col={9} align="middle">
          <FormField
            ref={inputRef}
            id="boardId"
            name="boardId"
            placeholder="Enter a board ID here"
            required
          />
          {boards.length > 0 && boards
            .map((board) => [(
              <a key={board._id} href="#" onClick={() => onClickBoardLink(board._id)}>{board._id}</a>
            ), ', '])
            .flat()
          }
        </Layout.Col>

        <Layout.Col col={3}>
          <FormField>
            <Button full type="submit">
              Load
            </Button>
          </FormField>
        </Layout.Col>
      </Layout.Row>
    </form>
  );
};

export { LoadBoard };
