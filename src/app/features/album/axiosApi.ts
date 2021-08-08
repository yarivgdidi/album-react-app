import { AlbumApi, FavoriteApi } from '../../../openApiClient';
import axios from 'axios'
import { AxiosInstance } from 'axios';
import {BASE_PATH} from '../../../openApiClient/base'

const axiosInstance: AxiosInstance = axios.create();
const albumApi = new AlbumApi(undefined, BASE_PATH, axiosInstance )
const favoriteApi = new FavoriteApi(undefined, BASE_PATH , axiosInstance )

export {
  albumApi,
  favoriteApi
}