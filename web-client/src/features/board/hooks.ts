import { useCallback } from 'react';
import { useAppDispatch } from '@/store';
import { getBoard, getBoards } from './board.service';
import { setBoard, setLoading, setBoards } from './board.slice';
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

export const useLoadBoards = () => {
  const dispatch = useAppDispatch();

  const loadBoards = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await getBoards();
      dispatch(setBoards(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load boards';
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  return loadBoards;
};
