import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Board, type BoardState } from './types';

const initialState: BoardState = {
  currentBoard: null,
  loading: false,
};

const { reducer, actions } = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<Board>) => {
      state.currentBoard = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearBoard: (state) => {
      state.currentBoard = null;
    },
  },
});

export const { setBoard, setLoading, clearBoard } = actions;
export { reducer };
