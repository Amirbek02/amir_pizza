import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Sort = {
  name: string;
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
};

interface FilterSliceState {
  categoryId: number;
  pageCount: number;
  sort: Sort;
}

export const initialState: FilterSliceState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSorts(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.category);
    },
  },
});

export const { setCategory, setSorts, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
