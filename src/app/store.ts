import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import albumReducer from '../features/album/albumSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
export const store = configureStore({
  reducer: {
    album: albumReducer,
    favorite: favoriteReducer,
    counter: counterReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
