import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://group-project-7.onrender.com';

export const fetchTasks =
  createAsyncThunk();
  //   'contacts/fetchAll',
  //   async (_, thunkAPI) => {
  //     try {
  //       const res = await axios.get('/contacts');
  //       return res.data;
  //     } catch (e) {
  //       return thunkAPI.rejectWithValue(e.message);
  //     }
  //   }

export const addTask =
  createAsyncThunk();
  //   'contacts/addContact',
  //   async (text, thunkAPI) => {
  //     try {
  //       const response = await axios.post('/contacts', text);
  //       return response.data;
  //     } catch (e) {
  //       return thunkAPI.rejectWithValue(e.message);
  //     }
  //   }

export const deleteTask =
  createAsyncThunk();
  //   'contacts/deleteContact',
  //   async (taskId, thunkAPI) => {
  //     try {
  //       const response = await axios.delete(`/contacts/${taskId}`);
  //       return response.data;
  //     } catch (e) {
  //       return thunkAPI.rejectWithValue(e.message);
  //     }
  //   }
