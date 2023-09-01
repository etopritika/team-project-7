import { createSlice } from '@reduxjs/toolkit';
import {
  createOwnReview,
  deleteOwnReview,
  fetchOwnReview,
  fetchReviews,
  updateOwnReview,
} from './reviewsOperations';

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
    ownReview: { text: '', rating: 1 },
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
      })
      .addCase(createOwnReview.pending, handlePending)
      .addCase(createOwnReview.rejected, handleRejected)
      .addCase(createOwnReview.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items
            ? [...state.items, action.payload]
            : [action.payload],
          ownReview: action.payload,
        };
      })
      .addCase(fetchOwnReview.pending, handlePending)
      .addCase(fetchOwnReview.rejected, handleRejected)
      .addCase(fetchOwnReview.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: [...state.items, action.payload],
          ownReview: action.payload,
        };
      })
      .addCase(updateOwnReview.pending, handlePending)
      .addCase(updateOwnReview.rejected, handleRejected)
      .addCase(updateOwnReview.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          ownReview: action.payload,
        };
      })
      .addCase(deleteOwnReview.pending, handlePending)
      .addCase(deleteOwnReview.rejected, handleRejected)
      .addCase(deleteOwnReview.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          ownReview: { text: '', rating: 1 },
        };
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
