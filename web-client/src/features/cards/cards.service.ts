import { api } from '@/api';
import type { Card, CreateCardDto } from './types';

const getCardsByBoard = (boardId: string) => {
  return api.get<Card[]>('/cards', { params: { boardId } });
};

const createCard = (data: CreateCardDto) => {
  return api.post<Card>('/cards', data);
};

export { getCardsByBoard, createCard };
