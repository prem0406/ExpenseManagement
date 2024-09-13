import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {expenseSlice} from './src/redux/app.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ...

const persistConfig = {
  key: expenseSlice.name,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  [expenseSlice.name]: expenseSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
