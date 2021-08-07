import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { albumApi } from './albumAPI';
import { Album } from '../../openApiClient';
import { TablePaginationConfig } from 'antd';

export interface AlbumState {
  albums: Album[];
  status: 'idle' | 'loading' | 'failed';
  pagination: TablePaginationConfig,
}

const initialState: AlbumState = {
  albums: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  status: 'idle',
};

export const listAlbumsAsync = createAsyncThunk(
  'album/listAlbums',
  async (payload: any) => {
    const {pagination, filter } = payload
    const { pageSize: limit, current } = pagination;
    const options = { filter };
    const offset = ( current-1 ) * limit;
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
        const  { albums = [], total = 0, limit = 10, offset = 0}  = { ...action.payload };
        const current = offset/limit + 1;
        state.pagination =  {pageSize: limit, current, total};
        state.albums = albums;
        state.status = 'idle';
      });
  },
});

export const selectAlbums = (state: RootState) => {
  const { album } = state
  const { pagination, albums } = album
  return { albums, pagination};
  
};
export default albumSlice.reducer;
