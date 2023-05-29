import { configureStore } from '@reduxjs/toolkit';

import eclReducer from '../features/eclSlice';

const store = configureStore({
  reducer: {
    ecl: eclReducer,
  },
});

export default store;
