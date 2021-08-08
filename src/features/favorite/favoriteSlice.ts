import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { favoriteApi } from '../album/axiosApi';
import { Favorite, NewFavorite } from '../../openApiClient';

export interface FavoriteState {
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FavoriteState = {
  status: 'idle',
};

export const addFavoriteAsync = createAsyncThunk(
  'favorite/addFavorite',
  async (albumId: string) => {
    const response = await favoriteApi.addFavorite({albumId});
    return response.data;
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  'favorite/removeFavorite',
  async (id: string) => {
    const response = await favoriteApi.deleteFavorite(id)
    return response.data;
  }
);

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteAsync.pending, (state) => {
        state.status = 'loading';
      })  
      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(removeFavoriteAsync.pending, (state) => {
        state.status = 'loading';
      })  
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      });
  },
});

export const favoriteStatus = (state: RootState) => {
  const { favorite } = state;
  const { status } = favorite;
  return { status };
  
};
export default favoriteSlice.reducer;
