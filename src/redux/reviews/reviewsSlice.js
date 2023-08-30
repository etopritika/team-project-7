import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews } from './reviewsOperations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.rejected, handleRejected)
      .addCase(fetchReviews.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
