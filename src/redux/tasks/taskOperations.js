import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://group-project-7.onrender.com';

export const fetchTasks = createAsyncThunk(
  'tasks/tetchTasks',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/tasks');
      return res.data;
    } catch (e) {
      Notiflix.Notify.failure('Error while loading tasks: ' + e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, start, end, priority, date, category }, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', {
        title,
        start,
        end,
        priority,
        date,
        category,
      });
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Error creating task: ' + e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/tasks/${taskId}`, updatedData);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Task editing error: ' + e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
