import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Card, CardsState, CardDto } from './types';

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
    updateCard: (state, action: PayloadAction<{ id: string; changes: CardDto }>) => {
      const { id, changes } = action.payload;
      const existingCard = state.entities[id];
      if (existingCard) {
        state.entities[id] = { ...existingCard, ...changes };
      }
    },
    removeCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      if (state.entities[cardId]) {
        delete state.entities[cardId];
        state.ids = state.ids.filter(id => id !== cardId);
      }
    },
  },
});

export const { setCards, clearCards, addCard, removeCard, updateCard } = actions;
export { reducer };
