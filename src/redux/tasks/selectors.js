export const selectTasks = state => state.tasks.tasks.items;

export const selectIsLoading = state => state.tasks.tasks.isLoading;

export const selectError = state => state.tasks.tasks.error;
