import { createSlice } from '@reduxjs/toolkit';
import { fetchAuth, fetchAuthRegister } from '../thunk/authThunk';

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchAuthRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchAuthRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const { logout } = authSlice.actions;
