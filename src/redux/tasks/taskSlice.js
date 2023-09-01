import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './taskOperations';
// , addTask, editTask, deleteTask

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
      });
    // .addCase(addTask.fulfilled, (state, action) => {
    //   state.tasks.isLoading = false;
    //   state.tasks.error = null;
    //   state.tasks.items.push(action.payload);
    // })
    // .addCase(addTask.rejected, handleRejected)
    // .addCase(deleteTask.pending, handlePending)
    // .addCase(deleteTask.fulfilled, (state, action) => {
    //   state.tasks.isLoading = false;
    //   state.tasks.error = null;
    //   const index = state.tasks.items.findIndex(
    //     task => task.id === action.payload
    //   );
    //   if (index !== -1) {
    //     state.tasks.items.splice(index, 1);
    //   }
    // })
    // .addCase(deleteTask.rejected, handleRejected)
    // .addCase(editTask.pending, handlePending);
    // .addCase(editTask.fulfilled, (state, action) => {
    //   state.tasks.isLoading = false;
    //   state.tasks.error = null;
    //   const index = state.tasks.items.findIndex(
    //     task => task.id === action.payload
    //   );
    //   if (index !== -1) {

    //   }
    // });
  },
});

export const tasksReducer = taskSlice.reducer;
