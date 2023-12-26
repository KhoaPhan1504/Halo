/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Group } from "../models";
// @ts-ignore
import { GroupList } from "../models";
/**
 * StorageHaloRunV1alpha1GroupApi - axios parameter creator
 * @export
 */
export const StorageHaloRunV1alpha1GroupApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create storage.halo.run/v1alpha1/Group
     * @param {Group} [group] Fresh group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Group: async (
      group?: Group,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/groups`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        group,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Group: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletestorageHaloRunV1alpha1Group", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/groups/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Group: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getstorageHaloRunV1alpha1Group", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/groups/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List storage.halo.run/v1alpha1/Group
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Group: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/groups`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      if (sort) {
        localVarQueryParameter["sort"] = Array.from(sort);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {Group} [group] Updated group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Group: async (
      name: string,
      group?: Group,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatestorageHaloRunV1alpha1Group", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/groups/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        group,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * StorageHaloRunV1alpha1GroupApi - functional programming interface
 * @export
 */
export const StorageHaloRunV1alpha1GroupApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    StorageHaloRunV1alpha1GroupApiAxiosParamCreator(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/Group
     * @param {Group} [group] Fresh group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createstorageHaloRunV1alpha1Group(
      group?: Group,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createstorageHaloRunV1alpha1Group(
          group,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletestorageHaloRunV1alpha1Group(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletestorageHaloRunV1alpha1Group(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getstorageHaloRunV1alpha1Group(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getstorageHaloRunV1alpha1Group(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List storage.halo.run/v1alpha1/Group
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async liststorageHaloRunV1alpha1Group(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.liststorageHaloRunV1alpha1Group(
          fieldSelector,
          labelSelector,
          page,
          size,
          sort,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update storage.halo.run/v1alpha1/Group
     * @param {string} name Name of group
     * @param {Group} [group] Updated group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatestorageHaloRunV1alpha1Group(
      name: string,
      group?: Group,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatestorageHaloRunV1alpha1Group(
          name,
          group,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * StorageHaloRunV1alpha1GroupApi - factory interface
 * @export
 */
export const StorageHaloRunV1alpha1GroupApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = StorageHaloRunV1alpha1GroupApiFp(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/Group
     * @param {StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Group(
      requestParameters: StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Group> {
      return localVarFp
        .createstorageHaloRunV1alpha1Group(requestParameters.group, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete storage.halo.run/v1alpha1/Group
     * @param {StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Group(
      requestParameters: StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletestorageHaloRunV1alpha1Group(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get storage.halo.run/v1alpha1/Group
     * @param {StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Group(
      requestParameters: StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Group> {
      return localVarFp
        .getstorageHaloRunV1alpha1Group(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List storage.halo.run/v1alpha1/Group
     * @param {StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Group(
      requestParameters: StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<GroupList> {
      return localVarFp
        .liststorageHaloRunV1alpha1Group(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          requestParameters.sort,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update storage.halo.run/v1alpha1/Group
     * @param {StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Group(
      requestParameters: StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Group> {
      return localVarFp
        .updatestorageHaloRunV1alpha1Group(
          requestParameters.name,
          requestParameters.group,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createstorageHaloRunV1alpha1Group operation in StorageHaloRunV1alpha1GroupApi.
 * @export
 * @interface StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest
 */
export interface StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest {
  /**
   * Fresh group
   * @type {Group}
   * @memberof StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1Group
   */
  readonly group?: Group;
}

/**
 * Request parameters for deletestorageHaloRunV1alpha1Group operation in StorageHaloRunV1alpha1GroupApi.
 * @export
 * @interface StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest
 */
export interface StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest {
  /**
   * Name of group
   * @type {string}
   * @memberof StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1Group
   */
  readonly name: string;
}

/**
 * Request parameters for getstorageHaloRunV1alpha1Group operation in StorageHaloRunV1alpha1GroupApi.
 * @export
 * @interface StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest
 */
export interface StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest {
  /**
   * Name of group
   * @type {string}
   * @memberof StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1Group
   */
  readonly name: string;
}

/**
 * Request parameters for liststorageHaloRunV1alpha1Group operation in StorageHaloRunV1alpha1GroupApi.
 * @export
 * @interface StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest
 */
export interface StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1Group
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1Group
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1Group
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1Group
   */
  readonly size?: number;

  /**
   * Sort property and direction of the list result. Support sorting based on attribute name path.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1Group
   */
  readonly sort?: Array<string>;
}

/**
 * Request parameters for updatestorageHaloRunV1alpha1Group operation in StorageHaloRunV1alpha1GroupApi.
 * @export
 * @interface StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest
 */
export interface StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest {
  /**
   * Name of group
   * @type {string}
   * @memberof StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1Group
   */
  readonly name: string;

  /**
   * Updated group
   * @type {Group}
   * @memberof StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1Group
   */
  readonly group?: Group;
}

/**
 * StorageHaloRunV1alpha1GroupApi - object-oriented interface
 * @export
 * @class StorageHaloRunV1alpha1GroupApi
 * @extends {BaseAPI}
 */
export class StorageHaloRunV1alpha1GroupApi extends BaseAPI {
  /**
   * Create storage.halo.run/v1alpha1/Group
   * @param {StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1GroupApi
   */
  public createstorageHaloRunV1alpha1Group(
    requestParameters: StorageHaloRunV1alpha1GroupApiCreatestorageHaloRunV1alpha1GroupRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1GroupApiFp(this.configuration)
      .createstorageHaloRunV1alpha1Group(requestParameters.group, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete storage.halo.run/v1alpha1/Group
   * @param {StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1GroupApi
   */
  public deletestorageHaloRunV1alpha1Group(
    requestParameters: StorageHaloRunV1alpha1GroupApiDeletestorageHaloRunV1alpha1GroupRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1GroupApiFp(this.configuration)
      .deletestorageHaloRunV1alpha1Group(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get storage.halo.run/v1alpha1/Group
   * @param {StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1GroupApi
   */
  public getstorageHaloRunV1alpha1Group(
    requestParameters: StorageHaloRunV1alpha1GroupApiGetstorageHaloRunV1alpha1GroupRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1GroupApiFp(this.configuration)
      .getstorageHaloRunV1alpha1Group(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List storage.halo.run/v1alpha1/Group
   * @param {StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1GroupApi
   */
  public liststorageHaloRunV1alpha1Group(
    requestParameters: StorageHaloRunV1alpha1GroupApiListstorageHaloRunV1alpha1GroupRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1GroupApiFp(this.configuration)
      .liststorageHaloRunV1alpha1Group(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        requestParameters.sort,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update storage.halo.run/v1alpha1/Group
   * @param {StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1GroupApi
   */
  public updatestorageHaloRunV1alpha1Group(
    requestParameters: StorageHaloRunV1alpha1GroupApiUpdatestorageHaloRunV1alpha1GroupRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1GroupApiFp(this.configuration)
      .updatestorageHaloRunV1alpha1Group(
        requestParameters.name,
        requestParameters.group,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
