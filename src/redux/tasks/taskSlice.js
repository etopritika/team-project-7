import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask } from './taskOperations';

const initialState = {
  tasks: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        state.tasks.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        state.tasks.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        const index = state.tasks.items.findIndex(
          task => task.id === action.payload
        );
        if (index !== -1) {
          state.tasks.items.splice(index, 1);
        }
      })
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const tasksReducer = taskSlice.reducer;
