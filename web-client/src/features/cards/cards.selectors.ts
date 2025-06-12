import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '@/store';
import { type CardStatus } from './types';

export const selectCardsState = (state: RootState) => state.cards;

export const selectAllCards = createSelector(
  [selectCardsState],
  (cardsState) => cardsState.ids.map((id) => cardsState.entities[id]),
);

export const selectCardsByStatus = (status: CardStatus) => createSelector(
  [selectAllCards],
  (cards) => cards.filter((card) => card.status === status)
);

export const selectCardById = (id: string) => (state: RootState) =>
  selectCardsState(state).entities[id];
