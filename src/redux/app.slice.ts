import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';
import {Expence} from '../types';

// Define a type for the slice state
interface ExpenceSliceState {
  expenses: Expence[];
  selectedExpense: Partial<Expence>;
}

// Define the initial state using that type
const initialState: ExpenceSliceState = {
  expenses: [],
  selectedExpense: {},
};

export const expenseSlice = createSlice({
  name: 'expenseReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expence>) => {
      state.expenses = [...state.expenses, action.payload];
    },
    removeExpense: (state, action: PayloadAction<{id: string}>) => {
      const updatedExpenses = state.expenses.filter(
        expense => expense.id !== action.payload.id,
      );
      state.expenses = updatedExpenses;
    },
    updateExpense: (state, action: PayloadAction<Expence>) => {
      const updatedExpenses = state.expenses.map(expense =>
        expense.id === action.payload.id ? action.payload : expense,
      );
      state.expenses = updatedExpenses;
    },
    setSelectedExpense: (state, action: PayloadAction<Expence>) => {
      state.selectedExpense = action.payload;
    },
  },
});

export const {addExpense, removeExpense, setSelectedExpense, updateExpense} =
  expenseSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.expenseReducer;
