import { configureStore } from '@reduxjs/toolkit';
import slideoverReducer from './slices/slideoverSlice';

export const store = configureStore({
  reducer: {
    slideover: slideoverReducer,
  },
});
