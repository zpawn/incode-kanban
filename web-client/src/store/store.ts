import { configureStore } from '@reduxjs/toolkit';
import { reducer as boardReducer } from '@/features/board';
import { reducer as errorReducer } from '@/features/error';
import { reducer as cardsReducer } from '@/features/cards';

const store = configureStore({
  reducer: {
    board: boardReducer,
    cards: cardsReducer,
    error: errorReducer,
  },
});

export { store };
