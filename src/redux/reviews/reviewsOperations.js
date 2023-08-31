import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://group-project-7.onrender.com';

export const fetchReviews = createAsyncThunk(
  '/api/reviews/fetchReviews',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/reviews');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnReview = createAsyncThunk(
  'reviews/fetchOwnReview',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/reviews/own');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createOwnReview = createAsyncThunk(
  'reviews/addReview',
  async ({ text, rating }, thunkAPI) => {
    try {
      const res = await axios.post('/api/reviews/own', { text, rating });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
