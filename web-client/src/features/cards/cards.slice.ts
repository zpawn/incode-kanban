import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Card, CardsState } from './types';

const initialState: CardsState = {
  entities: {},
  ids: [],
};

const { reducer, actions } = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.entities = action.payload.reduce((acc, card) => {
        acc[card._id] = card;
        return acc;
      }, {} as Record<string, Card>);
      state.ids = action.payload.map(card => card._id);
    },
    clearCards: (state) => {
      state.entities = {};
      state.ids = [];
    },
  },
});

export const { setCards, clearCards } = actions;
export { reducer };
