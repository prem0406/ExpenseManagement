import {configureStore} from '@reduxjs/toolkit';
import {expenseSlice} from './src/redux/app.slice';
// ...

// const persistConfi = {

// }

// const persistedReducer = persistReducer

export const store = configureStore({
  reducer: {
    [expenseSlice.name]: expenseSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
