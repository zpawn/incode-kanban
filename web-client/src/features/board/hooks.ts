import { useCallback } from 'react';
import { useAppDispatch } from '@/store';
import { getBoard } from './board.service';
import { setBoard, setLoading } from './board.slice';
import { useNotification } from '@/features/notify';
import { useCards } from '@/features/cards';

export const useLoadBoard = () => {
  const dispatch = useAppDispatch();
  const notify = useNotification();
  const { loadCardsByBoard } = useCards();

  const loadBoard = useCallback(
    async (boardId: string) => {
      if (!boardId.trim()) {
        notify.danger('Please enter a board ID', 'board/loadBoard');
        return;
      }

      try {
        dispatch(setLoading(true));
        const board = await getBoard(boardId);
        dispatch(setBoard(board.data));

        await loadCardsByBoard(boardId);
        notify.success('Board loaded successfully', 'board/loadBoard');
        return { success: true, data: board.data };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load board';
        notify.danger(errorMessage, 'board/loadBoard');
        return { success: false, error: errorMessage };
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, loadCardsByBoard, notify]
  );

  return loadBoard;
};
