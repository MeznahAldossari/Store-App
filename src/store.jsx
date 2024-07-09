import { configureStore } from '@reduxjs/toolkit';
import LogInSlice from './features/LogInSlice';

export const store = configureStore({
  reducer: {
    login: LogInSlice,
  },
});
