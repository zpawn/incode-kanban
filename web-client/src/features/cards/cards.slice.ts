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
      state.entities = action.payload.reduce(
        (acc, card) => {
          acc[card._id] = card;
          return acc;
        },
        {} as Record<string, Card>
      );
      state.ids = action.payload.map((card) => card._id);
    },
    clearCards: (state) => {
      state.entities = {};
      state.ids = [];
    },
    addCard: (state, action: PayloadAction<Card>) => {
      const card = action.payload;
      state.entities[card._id] = card;
      state.ids.push(card._id);
    },
  },
});

export const { setCards, clearCards, addCard } = actions;
export { reducer };
