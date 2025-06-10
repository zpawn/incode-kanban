import { useCallback } from 'react';
import { useAppDispatch } from '@/store';
import { getBoard } from './board.service';
import { setBoard, setLoading } from './board.slice';
import { setError } from '@/features/error';
import { useCards } from '@/features/cards';

export const useLoadBoard = () => {
  const dispatch = useAppDispatch();
  const { loadCardsByBoard } = useCards();

  const loadBoard = useCallback(async (boardId: string) => {
    if (!boardId.trim()) {
      throw new Error('Please enter a board ID');
    }

    try {
      dispatch(setLoading(true));
      const board = await getBoard(boardId);
      dispatch(setBoard(board.data));

      await loadCardsByBoard(boardId);

      return { success: true, data: board.data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load board';
      dispatch(setError({ message: errorMessage, source: 'board/loadBoard' }));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  return loadBoard;
};
