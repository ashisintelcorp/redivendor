import { failure, RemoteData, success, } from "@devexperts/remote-data-ts/lib/remote-data";
import { apiURL } from "app-config";
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { store } from "state/store";
import { GetAuthorizationHeader } from "./auth.util";
import { APIError, ApiStatus, ApplicationErrorResult, HttpStatus, NetworkFailResult, ServiceCallOutcome, WebServerErrorResult } from "./errors";
// const { AbortController } = require("node-abort-controller");

export enum RequestMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

export type TApiClient = {
  readonly RequestMethod: typeof RequestMethod;
  readonly error: APIError;
  readonly request: <R = never>(
    request: AxiosRequestConfig
  ) => Promise<RemoteData<APIError, R>>;
};

type TQueryParam = {
  key: string;
  value: string | string[] | boolean | number | Date | undefined | null;
};
type TGetQueryParam = { [index: string]: string | string[] | boolean | number | Date | undefined | null; }

export const createApiClient = (baseHref: string, extraheaders?: object): TApiClient => {
  // const controller = new AbortController();
  const request = async <Response = never>(
    requestConfig: AxiosRequestConfig
  ): Promise<RemoteData<APIError, Response>> => {
    //const url = `${baseHref}${request.url}`;

    let config: AxiosRequestConfig = {
      baseURL: baseHref,
      ...requestConfig,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        ...extraheaders,
        ...requestConfig.headers,
      },
    };

    // if token is available, add it to the headers
    const token = store.getState().user.token?.accessToken || '';
    // console.log(token);
    if (token) {
      config = await GetAuthorizationHeader(config);
    }
    // console.log(config)

    return axios
      .request(config)
      .then((res) => success(res.data))
      .catch((error) => {
        // console.log(`axios error:`, error);
        return failure(FailedRequestError(error));
      });
  };
  // controller.abort();
  return {
    RequestMethod,
    error: {
      isSuccess: false,
      outcome: ServiceCallOutcome.NoResponseFromServer,
      isTimeout: false,
    },
    request,
  };
  // return { request };
};

export function FailedRequestError(ex: unknown): APIError {
  const error = ex as AxiosError;

  // no response: network error
  if (!error.response) {
    const networkFail: NetworkFailResult = {
      isSuccess: false,
      outcome: ServiceCallOutcome.NoResponseFromServer,
      isTimeout: error.code === "ECONNABORTED", // from axios documentation
    };
    return networkFail;
  }

  // otherwise, we will at east get an http status
  const http: HttpStatus = {
    Code: error.response.status,
    Text: error.response.statusText,
  };

  // if the status is not success, we will have an api response
  const errorData = error.response.data;
  const tryAsApiError = errorData as { message: string; successful: boolean };

  if (tryAsApiError.successful === false) {
    const api: ApiStatus = {
      Message: tryAsApiError.message,
    };

    const applicationError: ApplicationErrorResult = {
      isSuccess: false,
      outcome: ServiceCallOutcome.ApplicationError,
      httpStatus: http,
      apiStatus: api,
    };

    return applicationError;
  }

  // generic http error from the web server
  const webServerError: WebServerErrorResult = {
    isSuccess: false,
    outcome: ServiceCallOutcome.WebServerError,
    httpStatus: http,
  };

  return webServerError;
}

// const baseClient = createApiClient("http://ncaishapi.rocketflyer.in");
// publicRuntimeConfig.apiUrl
const baseClient = createApiClient(apiURL, {
  "client-id": "51319df20e758179899441",
});


export const ApiClient = baseClient;

const apiClientRequest = {
  post: async (path: string, body = {}, customHeaders: AxiosRequestHeaders = {}): Promise<RemoteData<APIError, string | string[] | boolean | number | Date | undefined | null | any>> => {
    const allQueryParams: TQueryParam[] = [];
    const queryParams = allQueryParams.map((param: TQueryParam) => `${param.key}=${param.value}`).join("&");

    const apiUrl = queryParams === "" ? path : path.concat(`?${queryParams}`);
    let headers = customHeaders;
    const axiosRequestConfig = {
      url: apiUrl,
      method: "POST",
      data: body,
      headers: { ...headers },
    };

    return await ApiClient.request(axiosRequestConfig);
  },
  put: async (path: string, body = {}, customHeaders: AxiosRequestHeaders = {}): Promise<RemoteData<APIError, string | string[] | boolean | number | Date | undefined | null | any>> => {
    const allQueryParams: TQueryParam[] = [];
    const queryParams = allQueryParams.map((param: TQueryParam) => `${param.key}=${param.value}`).join("&");

    const apiUrl = queryParams === "" ? path : path.concat(`?${queryParams}`);
    let headers = customHeaders;
    const axiosRequestConfig = {
      url: apiUrl,
      method: "PUT",
      data: body,
      headers: { ...headers },
    };

    return await ApiClient.request(axiosRequestConfig);
  },
  get: async (path: string, params: TGetQueryParam = {}, customHeaders: AxiosRequestHeaders = {}): Promise<RemoteData<APIError, string | string[] | boolean | number | Date | undefined | null | any>> => {
    let queryParams = ''
    if (Object.keys(params).length > 0) {
      queryParams = Object.keys(params)
        .map((key: string) => `${key}=${params[key] || ''}`)
        .join("&");
    }
    const apiUrl = queryParams === "" ? path : path.concat(`?${queryParams}`);
    let headers = customHeaders;
    const axiosRequestConfig = {
      url: apiUrl,
      method: "GET",
      headers: { ...headers },
    };

    return await ApiClient.request(axiosRequestConfig);
  },
};
// apiClientRequest.post()

export default apiClientRequest