import axios from '../../axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  console.log(params);
  try {
    const { data } = await axios.post('/auth/signIn', params);
    return data;
  } catch (error) {}
});
export const fetchAuthRegister = createAsyncThunk('auth/fetchAuthRegister', async (params) => {
  console.log(params);
  try {
    const { data } = await axios.post('/auth/signUp', params);
    return data;
  } catch (error) {}
});
