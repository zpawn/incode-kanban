import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AlertProps } from '@/ui';

export type NotificationType = AlertProps['variant'];

interface NotificationState {
  message: string | null;
  source: string | null;
  type: NotificationType;
}

const initialState: NotificationState = {
  message: null,
  source: null,
  type: 'primary',
};

const { reducer, actions } = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    notify: (state, action: PayloadAction<{ message: string; source: string; type?: NotificationType; }>) => {
      state.message = action.payload.message;
      state.source = action.payload.source;
      state.type = action.payload.type || 'primary';
    },
    clearNotification: (state) => {
      state.message = null;
      state.source = null;
      state.type = 'primary';
    },
  },
});

export const { notify, clearNotification } = actions;
export { reducer };
