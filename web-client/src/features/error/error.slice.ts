import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  message: string | null;
  source: string | null;
}

const initialState: ErrorState = {
  message: null,
  source: null,
};

const { reducer, actions } = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ message: string; source: string }>) => {
      state.message = action.payload.message;
      state.source = action.payload.source;
    },
    clearError: (state) => {
      state.message = null;
      state.source = null;
    },
  },
});

export const { setError, clearError } = actions;
export { reducer };

export const selectError = (state: { error: ErrorState }) => state.error;
