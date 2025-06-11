import { configureStore } from '@reduxjs/toolkit';
import { reducer as boardReducer } from '@/features/board';
import { reducer as notifyReducer } from '@/features/notify';
import { reducer as cardsReducer } from '@/features/cards';

const store = configureStore({
  reducer: {
    board: boardReducer,
    cards: cardsReducer,
    notify: notifyReducer,
  },
});

export { store };
