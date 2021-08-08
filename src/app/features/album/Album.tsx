import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { listAlbumsAsync, selectAlbums, selectFavoritesAlbums, listFavoritesAlbumsAsync } from './albumSlice';
import styled from 'styled-components';
import { Table, Input, Space, Button  } from 'antd';
import { StarOutlined, StarFilled ,CloseOutlined} from '@ant-design/icons';

import { removeFavoriteAsync, addFavoriteAsync } from '../favorite/favoriteSlice';

const { Search } = Input;
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

export function Album(props?:any) {
  const  { albums, pagination } = useAppSelector(selectAlbums);
  const  { favoritesAlbums, favoritesPagination } = useAppSelector(selectFavoritesAlbums);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState('');
  const { isFavorites } = props;

  useEffect (()=> {
    console.log('isFavorites in Use effect', isFavorites);
  }) 

  useEffect( () => { 
    isFavorites ? loadFavoritesAlbumTable(pagination): loadAlbumTable(pagination)
  }, [] );

  useEffect( () => { 
    isFavorites ? loadFavoritesAlbumTable(pagination): loadAlbumTable(pagination)
    console.log('isFavorites in Use effect isFavorites', isFavorites);
  }, [isFavorites] );

  const handleTableChange = (pagination = {}) => {
    isFavorites ? loadFavoritesAlbumTable(pagination): loadAlbumTable(pagination)
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

  const loadFavoritesAlbumTable = ( newPagination? : any) => {
    const options: any = {};
    if (filter && filter !== '') {
      options.filter = filter
    }
    if (newPagination) {
      options.pagination = newPagination;
    }
    else {
      options.pagination = favoritesPagination ;
    }
    dispatch(listFavoritesAlbumsAsync(options))
  }

  const handleFavoriteButtonClicked = async (record:any )=> {
    if (record.favorite) {
      const response = await dispatch(removeFavoriteAsync(record.favorite))
      loadAlbumTable()
      loadFavoritesAlbumTable()
    } else {
      const response = await dispatch(addFavoriteAsync(record._id))
      loadAlbumTable()
      loadFavoritesAlbumTable()
    }
  }

  const columns = [
    { title: 'Title', dataIndex: 'title', key:'title',fixed: true, width: '90%'},
    { title: '', fixed: true, width: '10%',
      render: (text:string, record:any, index:number) => 
        <div>
           <Button type="text" shape="circle" icon={
             record.favorite ? isFavorites ? <CloseOutlined />: <StarFilled /> :  <StarOutlined /> 
             } onClick = {(e:any) => {handleFavoriteButtonClicked(record)} } > </Button> 
        </div>
    }

  ]

  const loading = false;
  
  const onSearch = (value: string) => {
    setFilter(value)
    if (isFavorites) {
      const options = value && value !== '' ? { pagination:favoritesPagination, filter: value.trim() } : { pagination:favoritesPagination }
      dispatch(listFavoritesAlbumsAsync(options))
    } else {
      const options = value && value !== '' ? { pagination, filter: value.trim() } : { pagination }
      dispatch(listAlbumsAsync(options))
    }
   
  }; 
 

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
          dataSource={isFavorites ? favoritesAlbums : albums}
          pagination={isFavorites? favoritesPagination : pagination}
          loading={loading}
          onChange={handleTableChange}
        />
     </Space>
      
    </Space>
  );
}
