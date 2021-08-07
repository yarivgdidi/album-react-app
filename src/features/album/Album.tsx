import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { listAlbumsAsync, selectAlbums } from './albumSlice';
import styles from './Album.module.css';
import { Table } from 'antd';
import { Input, Space } from 'antd';


export function Album() {
  const  { albums, pagination } = useAppSelector(selectAlbums);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState('');

  useEffect( () => { dispatch(listAlbumsAsync({pagination})) }, [] )

  const columns = [
    { title: 'Title', dataIndex: 'title', key:'title', width: '70%' }
  ]

  const loading = false;
  const handleTableChange = (pagination = {}) => {
    dispatch(listAlbumsAsync({pagination, filter}))
  }

  const { Search } = Input;
  const onSearch = (value: string) => {
    setFilter(value)
    dispatch(listAlbumsAsync({pagination, filter}))
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
