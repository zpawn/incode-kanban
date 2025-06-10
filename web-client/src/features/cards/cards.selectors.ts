import { type RootState } from '@/store';
import { type CardStatus } from './types';

export const selectCardsState = (state: RootState) => state.cards;

export const selectAllCards = (state: RootState) => {
  const { entities, ids } = selectCardsState(state);
  return ids.map(id => entities[id]);
};

export const selectCardsByStatus = (status: CardStatus) => (state: RootState) => {
  const cards = selectAllCards(state);
  return cards.filter(card => card.status === status);
};

export const selectCardById = (id: string) => (state: RootState) =>
  selectCardsState(state).entities[id];
