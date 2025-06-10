import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { getCardsByBoard } from './cards.service';
import { setCards, clearCards } from './cards.slice';
import { setError } from '@/features/error';

export const useCards = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards);

  const loadCardsByBoard = useCallback(async (boardId: string) => {
    try {
      const cards = await getCardsByBoard(boardId);
      dispatch(setCards(cards.data));
      return cards;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load cards';
      dispatch(setError({ message: errorMessage, source: 'cards/loadByBoard' }));
      throw error;
    }
  }, [dispatch]);

  const clearAllCards = useCallback(() => {
    dispatch(clearCards());
  }, [dispatch]);

  return { cards, loadCardsByBoard, clearAllCards };
};
