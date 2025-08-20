// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer   // <-- must match selector
  },
});

export default store;

