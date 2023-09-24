import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://650b504edfd73d1fab09e1cb.mockapi.io';
export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get('/todos');
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
