import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, editTask, fetchTasks } from './taskOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

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

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items
            ? [...state.items, action.payload]
            : [action.payload],
        };
      })
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.rejected, handleRejected)
      .addCase(editTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const taskIdToUpdate = updatedTask._id;
        const updatedItems = state.items.map(task =>
          task._id === taskIdToUpdate ? updatedTask : task
        );
        state.items = updatedItems;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, action) => {
        // const deletedTaskId = action.payload;
        // state.items = state.items.filter(task => task._id !== deletedTaskId);
        const index = state.items.findIndex(
          task => task._id === action.payload._id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = taskSlice.reducer;
