import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { listAlbumsAsync, selectAlbums } from './albumSlice';
import styled from 'styled-components';
import { Table, Input, Space, Button  } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

import { removeFavoriteAsync, addFavoriteAsync } from '../favorite/favoriteSlice';


export function Album() {
  const  { albums, pagination } = useAppSelector(selectAlbums);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState('');

  useEffect( () => { 
    loadAlbumTable();
  }, [] );

  const handleTableChange = (pagination = {}) => {
    loadAlbumTable(pagination)
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
    { title: 'Title', dataIndex: 'title', key:'title',fixed: true, width: '90%'},
    { title: '', fixed: true, width: '10%',
      render: (text:string, record:any, index:number) => 
        <div>
           <Button type="text" shape="circle" icon={record.favorite ? <StarFilled /> : <StarOutlined /> } onClick = {(e:any) => {handleFavoriteButtonClicked(record)} } > </Button> 
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
  const RoundedSearch = styled(Search)`
  .ant-input {
    border-radius: 20px;
    height: 40px;
  }
  .ant-input-group-addon .ant-btn.ant-btn-icon-only.ant-input-search-button {
    border-radius: 0 20px 20px 0;
    height: 40px
  }
`;

const RoundedTable = styled(Table)`
  .ant-table {
    width: 100vw;
    max-width: 600px; 
    border: 1px solid #EEE;
    border-radius: 20px;
  }
  .ant-table .ant-table-content {
    height: calc( 100vh - 235px);
    overflow: scroll;
  }
  .ant-table tr {
    height: 40px;
    background: none;
  }
  .ant-table tr td {
    padding 0 16px;
    background: none;
  }
`;

  return (
    <Space align='start' direction='vertical' size={[10,10]}>
      <Space align='start' direction='vertical' >
        <RoundedSearch placeholder="input search text" onSearch={onSearch} style={{ width:200 }} />
      </Space>
      <Space >
        <RoundedTable
       
          showHeader={false}
          columns={columns}
          rowKey={(album:any) => album._id}
          dataSource={albums}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
     </Space>
      
    </Space>
  );
}
