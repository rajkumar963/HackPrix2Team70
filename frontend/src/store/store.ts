import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../authSlice'; // make sure the path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

// Type exports for hooks and components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// This file sets up the Redux store for the application, integrating the auth slice.           