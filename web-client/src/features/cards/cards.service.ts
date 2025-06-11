import { api } from '@/api';
import type { Card, CardDto } from './types';

const getCardsByBoard = (boardId: string) => {
  return api.get<Card[]>('/cards', { params: { boardId } });
};

const createCard = (data: CardDto) => {
  return api.post<Card>('/cards', data);
};

const updateCard = (id: string, data: CardDto) => {
  return api.patch<Card>(`/cards/${id}`, data);
};

const deleteCard = (cardId: string) => {
  return api.delete(`/cards/${cardId}`);
};

export { getCardsByBoard, createCard, deleteCard, updateCard };
