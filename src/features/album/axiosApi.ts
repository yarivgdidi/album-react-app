import { AlbumApi, FavoriteApi } from '../../openApiClient';
import axios from 'axios'
import { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create();
const albumApi = new AlbumApi(undefined, 'http://localhost:3000/api', axiosInstance )
const favoriteApi = new FavoriteApi(undefined, 'http://localhost:3000/api', axiosInstance )

export {
  albumApi,
  favoriteApi
}