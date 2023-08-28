import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://group-project-7.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  '/api/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log('res.data:', res.data);
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure(`${credentials.email} is already in use`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  '/api/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure('The login or password is incorrect');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  '/api/auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
