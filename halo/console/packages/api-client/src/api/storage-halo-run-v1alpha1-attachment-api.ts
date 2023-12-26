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
import { Attachment } from "../models";
// @ts-ignore
import { AttachmentList } from "../models";
/**
 * StorageHaloRunV1alpha1AttachmentApi - axios parameter creator
 * @export
 */
export const StorageHaloRunV1alpha1AttachmentApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create storage.halo.run/v1alpha1/Attachment
     * @param {Attachment} [attachment] Fresh attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Attachment: async (
      attachment?: Attachment,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/attachments`;
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
        attachment,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Attachment: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletestorageHaloRunV1alpha1Attachment", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/attachments/{name}`.replace(
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
     * Get storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Attachment: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getstorageHaloRunV1alpha1Attachment", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/attachments/{name}`.replace(
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
     * List storage.halo.run/v1alpha1/Attachment
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Attachment: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/attachments`;
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
     * Update storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {Attachment} [attachment] Updated attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Attachment: async (
      name: string,
      attachment?: Attachment,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatestorageHaloRunV1alpha1Attachment", "name", name);
      const localVarPath =
        `/apis/storage.halo.run/v1alpha1/attachments/{name}`.replace(
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
        attachment,
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
 * StorageHaloRunV1alpha1AttachmentApi - functional programming interface
 * @export
 */
export const StorageHaloRunV1alpha1AttachmentApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    StorageHaloRunV1alpha1AttachmentApiAxiosParamCreator(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/Attachment
     * @param {Attachment} [attachment] Fresh attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createstorageHaloRunV1alpha1Attachment(
      attachment?: Attachment,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createstorageHaloRunV1alpha1Attachment(
          attachment,
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
     * Delete storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletestorageHaloRunV1alpha1Attachment(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletestorageHaloRunV1alpha1Attachment(
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
     * Get storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getstorageHaloRunV1alpha1Attachment(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getstorageHaloRunV1alpha1Attachment(
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
     * List storage.halo.run/v1alpha1/Attachment
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async liststorageHaloRunV1alpha1Attachment(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.liststorageHaloRunV1alpha1Attachment(
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
     * Update storage.halo.run/v1alpha1/Attachment
     * @param {string} name Name of attachment
     * @param {Attachment} [attachment] Updated attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatestorageHaloRunV1alpha1Attachment(
      name: string,
      attachment?: Attachment,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatestorageHaloRunV1alpha1Attachment(
          name,
          attachment,
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
 * StorageHaloRunV1alpha1AttachmentApi - factory interface
 * @export
 */
export const StorageHaloRunV1alpha1AttachmentApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = StorageHaloRunV1alpha1AttachmentApiFp(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/Attachment
     * @param {StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Attachment(
      requestParameters: StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Attachment> {
      return localVarFp
        .createstorageHaloRunV1alpha1Attachment(
          requestParameters.attachment,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete storage.halo.run/v1alpha1/Attachment
     * @param {StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Attachment(
      requestParameters: StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletestorageHaloRunV1alpha1Attachment(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get storage.halo.run/v1alpha1/Attachment
     * @param {StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Attachment(
      requestParameters: StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Attachment> {
      return localVarFp
        .getstorageHaloRunV1alpha1Attachment(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List storage.halo.run/v1alpha1/Attachment
     * @param {StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Attachment(
      requestParameters: StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<AttachmentList> {
      return localVarFp
        .liststorageHaloRunV1alpha1Attachment(
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
     * Update storage.halo.run/v1alpha1/Attachment
     * @param {StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Attachment(
      requestParameters: StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Attachment> {
      return localVarFp
        .updatestorageHaloRunV1alpha1Attachment(
          requestParameters.name,
          requestParameters.attachment,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createstorageHaloRunV1alpha1Attachment operation in StorageHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest
 */
export interface StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest {
  /**
   * Fresh attachment
   * @type {Attachment}
   * @memberof StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1Attachment
   */
  readonly attachment?: Attachment;
}

/**
 * Request parameters for deletestorageHaloRunV1alpha1Attachment operation in StorageHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest
 */
export interface StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest {
  /**
   * Name of attachment
   * @type {string}
   * @memberof StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1Attachment
   */
  readonly name: string;
}

/**
 * Request parameters for getstorageHaloRunV1alpha1Attachment operation in StorageHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest
 */
export interface StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest {
  /**
   * Name of attachment
   * @type {string}
   * @memberof StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1Attachment
   */
  readonly name: string;
}

/**
 * Request parameters for liststorageHaloRunV1alpha1Attachment operation in StorageHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest
 */
export interface StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1Attachment
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1Attachment
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1Attachment
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1Attachment
   */
  readonly size?: number;

  /**
   * Sort property and direction of the list result. Support sorting based on attribute name path.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1Attachment
   */
  readonly sort?: Array<string>;
}

/**
 * Request parameters for updatestorageHaloRunV1alpha1Attachment operation in StorageHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest
 */
export interface StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest {
  /**
   * Name of attachment
   * @type {string}
   * @memberof StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1Attachment
   */
  readonly name: string;

  /**
   * Updated attachment
   * @type {Attachment}
   * @memberof StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1Attachment
   */
  readonly attachment?: Attachment;
}

/**
 * StorageHaloRunV1alpha1AttachmentApi - object-oriented interface
 * @export
 * @class StorageHaloRunV1alpha1AttachmentApi
 * @extends {BaseAPI}
 */
export class StorageHaloRunV1alpha1AttachmentApi extends BaseAPI {
  /**
   * Create storage.halo.run/v1alpha1/Attachment
   * @param {StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1AttachmentApi
   */
  public createstorageHaloRunV1alpha1Attachment(
    requestParameters: StorageHaloRunV1alpha1AttachmentApiCreatestorageHaloRunV1alpha1AttachmentRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .createstorageHaloRunV1alpha1Attachment(
        requestParameters.attachment,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete storage.halo.run/v1alpha1/Attachment
   * @param {StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1AttachmentApi
   */
  public deletestorageHaloRunV1alpha1Attachment(
    requestParameters: StorageHaloRunV1alpha1AttachmentApiDeletestorageHaloRunV1alpha1AttachmentRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .deletestorageHaloRunV1alpha1Attachment(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get storage.halo.run/v1alpha1/Attachment
   * @param {StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1AttachmentApi
   */
  public getstorageHaloRunV1alpha1Attachment(
    requestParameters: StorageHaloRunV1alpha1AttachmentApiGetstorageHaloRunV1alpha1AttachmentRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .getstorageHaloRunV1alpha1Attachment(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List storage.halo.run/v1alpha1/Attachment
   * @param {StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1AttachmentApi
   */
  public liststorageHaloRunV1alpha1Attachment(
    requestParameters: StorageHaloRunV1alpha1AttachmentApiListstorageHaloRunV1alpha1AttachmentRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .liststorageHaloRunV1alpha1Attachment(
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
   * Update storage.halo.run/v1alpha1/Attachment
   * @param {StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1AttachmentApi
   */
  public updatestorageHaloRunV1alpha1Attachment(
    requestParameters: StorageHaloRunV1alpha1AttachmentApiUpdatestorageHaloRunV1alpha1AttachmentRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .updatestorageHaloRunV1alpha1Attachment(
        requestParameters.name,
        requestParameters.attachment,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
