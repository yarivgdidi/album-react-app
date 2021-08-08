import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { listAlbumsAsync, selectAlbums } from './albumSlice';
import styles from './Album.module.css';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { removeFavoriteAsync, addFavoriteAsync } from '../favorite/favoriteSlice';


export function Album() {
  const  { albums, pagination } = useAppSelector(selectAlbums);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState('');

  useEffect( () => { 
    loadAlbumTable();
    // const options = filter && filter !== '' ? { pagination, filter } : { pagination }
    // dispatch(listAlbumsAsync(options)) 
  }, [] );

  const handleTableChange = (pagination = {}) => {
    loadAlbumTable(pagination)
    // const options = filter && filter !== '' ? { pagination, filter } : { pagination }
    // dispatch(listAlbumsAsync(options))
  }

  const loadAlbumTable = ( newPagination? : any) => {
    const options: any = {};
    if (filter && filter !== '') {
      options.filter = filter
    }
    if (newPagination) {
      options.pagination = newPagination;
    }
    else {
      options.pagination = pagination;
    }
    dispatch(listAlbumsAsync(options))
  }

  const handleFavoriteButtonClicked = async (record:any )=> {
    if (record.favorite) {
      const response = await dispatch(removeFavoriteAsync(record.favorite))
      loadAlbumTable()
    } else {
      const response = await dispatch(addFavoriteAsync(record._id))
      loadAlbumTable()
    }
  }

  const columns = [
    { title: 'Title', dataIndex: 'title', key:'title', width: '70%' },
    { title: '', width: '30%', 
      render: (text:string, record:any, index:number) => 
        <div>
           < button onClick = {(e:any) => {handleFavoriteButtonClicked(record)} } > {record.favorite ? 'Remove'  : 'Add'} </button> 
        </div>
    }

  ]

  const loading = false;
 

  const { Search } = Input;
  const onSearch = (value: string) => {
    setFilter(value)
    const options = value && value !== '' ? { pagination, filter: value } : { pagination }
    dispatch(listAlbumsAsync(options))
  }; 

  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <Table
        columns={columns}
        rowKey={album => album._id}
        dataSource={albums}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
}
