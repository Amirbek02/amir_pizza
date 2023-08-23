import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filteSlice';
import cart from './slice/cartSlice';
import pizzas from './slice/pizzasSlice';
import { useDispatch } from 'react-redux';
import { authReducer } from './slice/authSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
    auth: authReducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
