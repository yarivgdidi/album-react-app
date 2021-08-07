

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  listAlbumsAsync,
  selectAlbums
} from './albumSlice';
import styles from './Album.module.css';

export function Album() {
  const  albums = useAppSelector(selectAlbums);
  const dispatch = useAppDispatch();

  const getTitle = () => {
    console.log(albums);
    return albums.map(album => (<div key={album._id}>{album.title}</div>))
  }
  return (
    <div>
  
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(listAlbumsAsync({}))}
        >
          Get Albums
        </button>
        
    
      <div>
    
        { getTitle() }
      </div>
    </div>
  );
}
