import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { listAlbumsAsync, selectAlbums } from './albumSlice';
import styles from './Album.module.css';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { string } from 'yargs';


export function Album() {
  const  { albums, pagination } = useAppSelector(selectAlbums);
  const dispatch = useAppDispatch();

  useEffect( () => { dispatch(listAlbumsAsync({})) }, [] )

  const columns = [
    { title: 'Title', dataIndex: 'title', sorter: true, width: '70%' }
  ]

  const loading = false;
  const handleTableChange = (pagination = {}) => {
    dispatch(listAlbumsAsync({pagination}))
  }

  const { Search } = Input;
  const onSearch = (value: string) => console.log(value); 

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
