import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '@/store';
import { getCardsByBoard, createCard } from './cards.service';
import { setCards, clearCards, addCard } from './cards.slice';
import { setError } from '@/features/error';
import type { Card, CreateCardDto } from './types';

export const useCards = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards);
  const { currentBoard } = useAppSelector((state) => state.board);

  const loadCardsByBoard = useCallback(
    async (boardId: string) => {
      try {
        const cards = await getCardsByBoard(boardId);
        dispatch(setCards(cards.data));
        return cards;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load cards';
        dispatch(setError({ message: errorMessage, source: 'cards/loadByBoard' }));
      }
    },
    [dispatch]
  );

  const createNewCard = useCallback(
    async (data: Omit<CreateCardDto, 'board'>): Promise<Card | void> => {
      try {
        if (!currentBoard?._id) {
          dispatch(setError({ message: 'Board not found', source: 'cards/create' }));
          return;
        }

        const response = await createCard({ ...data, board: currentBoard._id });
        dispatch(addCard(response.data));
        return response.data;
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error?.response?.data?.errors[0]?.msg
            : 'Failed to create card';
        dispatch(setError({ message: errorMessage, source: 'cards/create' }));
      }
    },
    [dispatch, currentBoard]
  );

  const clearAllCards = useCallback(() => {
    dispatch(clearCards());
  }, [dispatch]);

  return { cards, loadCardsByBoard, clearAllCards, createNewCard };
};
