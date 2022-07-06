export class NotFoundError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError);
    }
}

export class NoContentError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, NoContentError);
    }
}

export enum ServiceCallOutcome {
    /** Timeout or unable to connect */
    NoResponseFromServer = "No Response From Server",

    /** HTTP non-succeess raised by the web server, typically 404 / 500.  No ApiResponse will be available. */
    WebServerError = "Web Server Error",

    /** HTTP non-success raised by the web API. 500 but wrapped in an ApiResponse{T} */
    ApplicationError = "Application Error",

    /** HTTP 200-209. will be wrapped in an Apiresponse{T} */
    Success = "Success",
}

/** HTTP Status Code and Text. available from any HTTP request that completes (i.e. not timeout) */
export interface HttpStatus {
    Code: number;
    Text: string;
}

/** Api Response. This has the key fields from th api */
export interface ApiStatus {
    Message: string;
}

export interface NetworkFailResult {
    outcome: ServiceCallOutcome.NoResponseFromServer;
    isSuccess: false;

    /** True for timeout, false for unable to connect (we presume) */
    isTimeout: boolean;
}

export interface WebServerErrorResult {
    outcome: ServiceCallOutcome.WebServerError;
    isSuccess: false;
    httpStatus: HttpStatus;
}

export interface ApplicationErrorResult {
    outcome: ServiceCallOutcome.ApplicationError;
    isSuccess: false;
    httpStatus: HttpStatus;
    apiStatus: ApiStatus;
}

export type APIError =
    | NetworkFailResult
    | WebServerErrorResult
    | ApplicationErrorResult;
