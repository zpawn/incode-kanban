import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '@/store';
import { getCardsByBoard, createCard, deleteCard, updateCard } from './cards.service';
import { setCards, clearCards, addCard, removeCard, updateCard as updateCardAction } from './cards.slice';
import { useNotification } from '@/features/notify';
import type { Card, CardDto } from './types';

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
    async (data: Omit<CardDto, 'board'>): Promise<Card | void> => {
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

  const updateExistingCard = useCallback(
    async (id: string, data: Omit<CardDto, 'board'>): Promise<Card | void> => {
      try {
        if (!currentBoard?._id) {
          notify.danger('Board not found', 'cards/create');
          return;
        }

        const updatedData = {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          status: cards.entities[id]?.status,
          ...data,
          board: currentBoard._id,
        };

        const response = await updateCard(id, updatedData);
        dispatch(updateCardAction({ id, changes: updatedData }));
        notify.success('Card updated successfully!', 'cards/update');
        return response.data;
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error?.response?.data?.errors[0]?.msg || 'Failed to update card'
            : 'Failed to update card';
        notify.danger(errorMessage, 'cards/update');
      }
    },
    [dispatch, notify, currentBoard]
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

  return {
    cards,
    loadCardsByBoard,
    clearAllCards,
    createNewCard,
    deleteCardById,
    updateCard: updateExistingCard,
  };
};
