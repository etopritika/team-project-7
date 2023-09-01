import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://group-project-7.onrender.com';

export const fetchTasks = createAsyncThunk(
  '/api/tasks',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/tasks');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  '/api/tasks',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', text);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  '/api/tasks',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  '/api/tasks',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
