import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '@/store';
import { getCardsByBoard, createCard, deleteCard } from './cards.service';
import { setCards, clearCards, addCard, removeCard } from './cards.slice';
import { useNotification } from '@/features/notify';
import type { Card, CreateCardDto } from './types';

export const useCards = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards);
  const { currentBoard } = useAppSelector((state) => state.board);
  const notify = useNotification();

  const loadCardsByBoard = useCallback(
    async (boardId: string) => {
      try {
        const cards = await getCardsByBoard(boardId);
        dispatch(setCards(cards.data));
        notify.success('Cards loaded successfully', 'cards/loadByBoard');
        return cards;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load cards';
        notify.danger(errorMessage, 'cards/loadByBoard');
      }
    },
    [dispatch, notify]
  );

  const createNewCard = useCallback(
    async (data: Omit<CreateCardDto, 'board'>): Promise<Card | void> => {
      try {
        if (!currentBoard?._id) {
          notify.danger('Board not found', 'cards/create');
          return;
        }

        const response = await createCard({ ...data, board: currentBoard._id });
        dispatch(addCard(response.data));
        notify.success('Card created successfully', 'cards/create');
        return response.data;
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error?.response?.data?.errors[0]?.msg
            : 'Failed to create card';
        notify.danger(errorMessage, 'cards/create');
      }
    },
    [dispatch, currentBoard, notify]
  );

  const deleteCardById = useCallback(
    async (cardId: string): Promise<boolean> => {
      try {
        await deleteCard(cardId);
        dispatch(removeCard(cardId));
        notify.success('Card deleted successfully', 'cards/delete');
        return true;
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error?.response?.data?.errors[0]?.msg
            : 'Failed to delete card';
        notify.danger(errorMessage, 'cards/delete');
        return false;
      }
    },
    [dispatch, notify]
  );

  const clearAllCards = useCallback(() => {
    dispatch(clearCards());
  }, [dispatch]);

  return { cards, loadCardsByBoard, clearAllCards, createNewCard, deleteCardById };
};
