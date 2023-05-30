import { configureStore } from '@reduxjs/toolkit';
import eclReducer from './eclSlice';

export const store = configureStore({
  reducer: {
    ecl: eclReducer,
  },
});
