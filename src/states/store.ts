import { configureStore } from '@reduxjs/toolkit';
import flashCardSlice from './features/flashCardSlice';

export const store = configureStore({
  reducer: {
    flashCard: flashCardSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
