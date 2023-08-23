import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchPizzasArgs = Record<string, string>;

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params: FetchPizzasArgs) => {
    console.log(params);

    const { sortBy, categoryBy, orderBy, search, pageCount } = params;
    const { data } = await axios.get<Pizza[]>(
      `http://localhost:3002/items?_limit=4&_page=${pageCount}&${categoryBy}&_sort=${sortBy}&_order=${orderBy}${search}`,
    );
    return data;
  },
);

enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
