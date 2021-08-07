import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { albumApi } from './albumAPI';
import { Album } from '../../openApiClient';

export interface AlbumState {
  albums: Album[];
  status: 'idle' | 'loading' | 'failed';
}
const initialState: AlbumState = {
  albums: [],
  status: 'idle',
};

export const listAlbumsAsync = createAsyncThunk(
  'album/listAlbums',
  async (payload: any) => {
    const { limit, offset, options } = payload
    const response = await albumApi.listAlbums(limit, offset, options);
    return response.data;
  }
);

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(listAlbumsAsync.pending, (state) => {
        state.status = 'loading';
      })  
      .addCase(listAlbumsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const  { albums = []}  = { ...action.payload };
        state.albums = albums
      });
  },
});

export const selectAlbums = (state: RootState) => state.album.albums;
export default albumSlice.reducer;
