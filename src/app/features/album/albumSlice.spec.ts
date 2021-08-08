import albumReducer, {
  AlbumState,
  

} from './albumSlice';

describe('album reducer', () => {
  const initialState: AlbumState = {
    albums: [],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(albumReducer(undefined, { type: 'unknown' })).toEqual({
      albums: [],
      status: 'idle',
    });
  });
});
