import { api } from '@/api';
import type { Card } from './types';

const getCardsByBoard = (boardId: string) => {
  return api.get<Card[]>('/cards', { params: { boardId } });
};

export { getCardsByBoard };
