import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filteSlice'

export const store = configureStore({
  reducer: {
    filterReducer
  }
})