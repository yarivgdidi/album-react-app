/* tslint:disable */
/* eslint-disable */
/**
 * Open Api album example
 * Well B home exercise  OpenAPI 3.0 specification
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Album
 */
export interface Album {
    /**
     * 
     * @type {number}
     * @memberof Album
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    favorite?: string;
}
/**
 * 
 * @export
 * @interface AlbumAllOf
 */
export interface AlbumAllOf {
    /**
     * 
     * @type {string}
     * @memberof AlbumAllOf
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof AlbumAllOf
     */
    favorite?: string;
}
/**
 * 
 * @export
 * @interface Favorite
 */
export interface Favorite {
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    albumId: string;
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    _id: string;
}
/**
 * 
 * @export
 * @interface FavoriteAllOf
 */
export interface FavoriteAllOf {
    /**
     * 
     * @type {string}
     * @memberof FavoriteAllOf
     */
    _id: string;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface NewAlbum
 */
export interface NewAlbum {
    /**
     * 
     * @type {number}
     * @memberof NewAlbum
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof NewAlbum
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NewAlbum
     */
    id: string;
}
/**
 * 
 * @export
 * @interface NewFavorite
 */
export interface NewFavorite {
    /**
     * 
     * @type {string}
     * @memberof NewFavorite
     */
    albumId: string;
}

/**
 * AlbumApi - axios parameter creator
 * @export
 */
export const AlbumApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Album in the store
         * @summary Create album
         * @param {NewAlbum} newAlbum Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAlbum: async (newAlbum: NewAlbum, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAlbum' is not null or undefined
            assertParamExists('addAlbum', 'newAlbum', newAlbum)
            const localVarPath = `/album`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newAlbum, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * deletes a single album based on the ID supplied
         * @summary Delete an album
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAlbum: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteAlbum', 'id', id)
            const localVarPath = `/album/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an album based on a single ID,
         * @summary Get album by ID
         * @param {string} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAlbumById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findAlbumById', 'id', id)
            const localVarPath = `/album/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all albums with user access
         * @summary List albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAlbums: async (limit?: number, offset?: number, filter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/album`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all albums with user access
         * @summary List favorites albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFavoritesAlbums: async (limit?: number, offset?: number, filter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/album/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates album by ID 
         * @summary Update album
         * @param {string} id ID of album that needs to be updated
         * @param {Album} album Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAlbum: async (id: string, album: Album, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateAlbum', 'id', id)
            // verify required parameter 'album' is not null or undefined
            assertParamExists('updateAlbum', 'album', album)
            const localVarPath = `/album/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(album, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AlbumApi - functional programming interface
 * @export
 */
export const AlbumApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AlbumApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Album in the store
         * @summary Create album
         * @param {NewAlbum} newAlbum Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addAlbum(newAlbum: NewAlbum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Album>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addAlbum(newAlbum, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * deletes a single album based on the ID supplied
         * @summary Delete an album
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAlbum(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAlbum(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns an album based on a single ID,
         * @summary Get album by ID
         * @param {string} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAlbumById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Album>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAlbumById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all albums with user access
         * @summary List albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAlbums(limit?: number, offset?: number, filter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Album>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAlbums(limit, offset, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all albums with user access
         * @summary List favorites albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFavoritesAlbums(limit?: number, offset?: number, filter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Album>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFavoritesAlbums(limit, offset, filter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates album by ID 
         * @summary Update album
         * @param {string} id ID of album that needs to be updated
         * @param {Album} album Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAlbum(id: string, album: Album, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAlbum(id, album, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AlbumApi - factory interface
 * @export
 */
export const AlbumApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AlbumApiFp(configuration)
    return {
        /**
         * Creates a new Album in the store
         * @summary Create album
         * @param {NewAlbum} newAlbum Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAlbum(newAlbum: NewAlbum, options?: any): AxiosPromise<Album> {
            return localVarFp.addAlbum(newAlbum, options).then((request) => request(axios, basePath));
        },
        /**
         * deletes a single album based on the ID supplied
         * @summary Delete an album
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAlbum(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteAlbum(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an album based on a single ID,
         * @summary Get album by ID
         * @param {string} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAlbumById(id: string, options?: any): AxiosPromise<Album> {
            return localVarFp.findAlbumById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all albums with user access
         * @summary List albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAlbums(limit?: number, offset?: number, filter?: string, options?: any): AxiosPromise<Array<Album>> {
            return localVarFp.listAlbums(limit, offset, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * List all albums with user access
         * @summary List favorites albums
         * @param {number} [limit] maximum number of results to return
         * @param {number} [offset] offset from beginning of list (for pagination)
         * @param {string} [filter] search filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFavoritesAlbums(limit?: number, offset?: number, filter?: string, options?: any): AxiosPromise<Array<Album>> {
            return localVarFp.listFavoritesAlbums(limit, offset, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates album by ID 
         * @summary Update album
         * @param {string} id ID of album that needs to be updated
         * @param {Album} album Albums to add to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAlbum(id: string, album: Album, options?: any): AxiosPromise<void> {
            return localVarFp.updateAlbum(id, album, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AlbumApi - object-oriented interface
 * @export
 * @class AlbumApi
 * @extends {BaseAPI}
 */
export class AlbumApi extends BaseAPI {
    /**
     * Creates a new Album in the store
     * @summary Create album
     * @param {NewAlbum} newAlbum Albums to add to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public addAlbum(newAlbum: NewAlbum, options?: any) {
        return AlbumApiFp(this.configuration).addAlbum(newAlbum, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * deletes a single album based on the ID supplied
     * @summary Delete an album
     * @param {string} id ID of pet to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public deleteAlbum(id: string, options?: any) {
        return AlbumApiFp(this.configuration).deleteAlbum(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an album based on a single ID,
     * @summary Get album by ID
     * @param {string} id ID of pet to fetch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public findAlbumById(id: string, options?: any) {
        return AlbumApiFp(this.configuration).findAlbumById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all albums with user access
     * @summary List albums
     * @param {number} [limit] maximum number of results to return
     * @param {number} [offset] offset from beginning of list (for pagination)
     * @param {string} [filter] search filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public listAlbums(limit?: number, offset?: number, filter?: string, options?: any) {
        return AlbumApiFp(this.configuration).listAlbums(limit, offset, filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all albums with user access
     * @summary List favorites albums
     * @param {number} [limit] maximum number of results to return
     * @param {number} [offset] offset from beginning of list (for pagination)
     * @param {string} [filter] search filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public listFavoritesAlbums(limit?: number, offset?: number, filter?: string, options?: any) {
        return AlbumApiFp(this.configuration).listFavoritesAlbums(limit, offset, filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates album by ID 
     * @summary Update album
     * @param {string} id ID of album that needs to be updated
     * @param {Album} album Albums to add to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlbumApi
     */
    public updateAlbum(id: string, album: Album, options?: any) {
        return AlbumApiFp(this.configuration).updateAlbum(id, album, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FavoriteApi - axios parameter creator
 * @export
 */
export const FavoriteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Album in the store
         * @param {NewFavorite} newFavorite Add Favorite album
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite: async (newFavorite: NewFavorite, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newFavorite' is not null or undefined
            assertParamExists('addFavorite', 'newFavorite', newFavorite)
            const localVarPath = `/favorite`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newFavorite, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * deletes a favorite based on the ID supplied
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFavorite: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFavorite', 'id', id)
            const localVarPath = `/favorite/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all favorites relations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFavorites: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorite`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FavoriteApi - functional programming interface
 * @export
 */
export const FavoriteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FavoriteApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Album in the store
         * @param {NewFavorite} newFavorite Add Favorite album
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFavorite(newFavorite: NewFavorite, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Favorite>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavorite(newFavorite, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * deletes a favorite based on the ID supplied
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFavorite(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFavorite(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all favorites relations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFavorites(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Favorite>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFavorites(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FavoriteApi - factory interface
 * @export
 */
export const FavoriteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FavoriteApiFp(configuration)
    return {
        /**
         * Creates a new Album in the store
         * @param {NewFavorite} newFavorite Add Favorite album
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite(newFavorite: NewFavorite, options?: any): AxiosPromise<Favorite> {
            return localVarFp.addFavorite(newFavorite, options).then((request) => request(axios, basePath));
        },
        /**
         * deletes a favorite based on the ID supplied
         * @param {string} id ID of pet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFavorite(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFavorite(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all favorites relations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFavorites(options?: any): AxiosPromise<Array<Favorite>> {
            return localVarFp.listFavorites(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FavoriteApi - object-oriented interface
 * @export
 * @class FavoriteApi
 * @extends {BaseAPI}
 */
export class FavoriteApi extends BaseAPI {
    /**
     * Creates a new Album in the store
     * @param {NewFavorite} newFavorite Add Favorite album
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteApi
     */
    public addFavorite(newFavorite: NewFavorite, options?: any) {
        return FavoriteApiFp(this.configuration).addFavorite(newFavorite, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * deletes a favorite based on the ID supplied
     * @param {string} id ID of pet to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteApi
     */
    public deleteFavorite(id: string, options?: any) {
        return FavoriteApiFp(this.configuration).deleteFavorite(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all favorites relations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteApi
     */
    public listFavorites(options?: any) {
        return FavoriteApiFp(this.configuration).listFavorites(options).then((request) => request(this.axios, this.basePath));
    }
}


