import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
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

  /*To remove error: A non-serializable value was detected in an action, in the path:
  `register`. Value: [Function register] Take a look at the logic that dispatched this action: {"register": [Function register],
   "rehydrate": [Function rehydrate], "type": "persist/PERSIST"} */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
