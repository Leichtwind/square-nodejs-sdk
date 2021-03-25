/// <reference types="node" />
import { FileWrapper } from '../fileWrapper';
import { ApiResponse } from '../apiResponse';
import { Schema } from '../schema';
import { HttpContext } from './httpContext';
import { HttpInterceptorInterface } from './httpInterceptor';
import { HttpMethod, HttpRequest, HttpRequestMultipartFormBody, HttpRequestUrlEncodedFormBody } from './httpRequest';
import { HttpResponse } from './httpResponse';
import { PathTemplatePrimitiveTypes, PathTemplateTypes, SkipEncode } from './pathTemplate';
import { prepareArgs } from './validate';
export interface RequestBuilderFactory<BaseUrlParamType, AuthParams> {
    (httpMethod: HttpMethod, path?: string): RequestBuilder<BaseUrlParamType, AuthParams>;
}
declare type QueryValue = string | string[] | number | number[] | bigint | bigint[] | boolean | null | undefined;
export declare function skipEncode<T extends PathTemplatePrimitiveTypes>(value: T): SkipEncode<T>;
/** Optional API call options such as the Abort Signal. */
export interface RequestOptions {
    /**
     * Allows cancelling the API call using an Abort Signal.
     *
     * This must be set to an instance compatible with the
     * [WHATWG AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal). The
     * AbortSignal comes built-in in modern browsers and can be polyfilled for older browser versions
     * and Node.js using the
     * [abort-controller](https://github.com/mysticatea/abort-controller) package.
     */
    abortSignal?: AbortSignal;
}
export interface HttpClientInterface {
    (request: HttpRequest, requestOptions?: RequestOptions): Promise<HttpResponse>;
}
export interface ApiErrorConstructor {
    new (response: HttpContext, message: string): any;
}
export interface AuthenticatorInterface<AuthParams> {
    (authParams?: AuthParams): HttpInterceptorInterface<RequestOptions | undefined>;
}
export interface RequestBuilder<BaseUrlParamType, AuthParams> {
    deprecated(methodName: string, message?: string): void;
    prepareArgs: typeof prepareArgs;
    method(httpMethodName: HttpMethod): void;
    baseUrl(arg: BaseUrlParamType): void;
    authenticate(params: AuthParams): void;
    appendPath(path: string): void;
    appendTemplatePath(strings: TemplateStringsArray, ...args: Array<PathTemplateTypes>): void;
    acceptJson(): void;
    accept(acceptHeaderValue: string): void;
    contentType(contentTypeHeaderValue: string): void;
    header(name: string, value?: string | boolean | number): void;
    headers(headersToMerge: Record<string, string>): void;
    query(name: string, value: QueryValue): void;
    query(parameters?: Record<string, QueryValue> | null): void;
    form(parameters: Record<string, unknown>): void;
    formData(parameters: Record<string, unknown>): void;
    text(body: string): void;
    json(data: unknown): void;
    xml<T>(argName: string, data: T, rootName: string, schema: Schema<T, any>): void;
    stream(file?: FileWrapper): void;
    toRequest(): HttpRequest;
    intercept(interceptor: HttpInterceptorInterface<RequestOptions | undefined>): void;
    interceptRequest(interceptor: (request: HttpRequest) => HttpRequest): void;
    interceptResponse(interceptor: (response: HttpContext) => HttpContext): void;
    defaultToError(apiErrorCtor: ApiErrorConstructor): void;
    validateResponse(validate: boolean): void;
    throwOn<ErrorCtorArgs extends any[]>(statusCode: number | [number, number], errorConstructor: {
        new (response: HttpContext, ...args: ErrorCtorArgs): any;
    }, ...args: ErrorCtorArgs): void;
    call(requestOptions?: RequestOptions): Promise<ApiResponse<void>>;
    callAsJson<T>(schema: Schema<T, any>, requestOptions?: RequestOptions): Promise<ApiResponse<T>>;
    callAsStream(requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>;
    callAsText(requestOptions?: RequestOptions): Promise<ApiResponse<string>>;
    callAsOptionalText(requestOptions?: RequestOptions): Promise<ApiResponse<string | undefined>>;
    callAsXml<T>(rootName: string, schema: Schema<T, any>, requestOptions?: RequestOptions): Promise<ApiResponse<T>>;
    callAsXml<T>(rootName: string, schema: Schema<T, any>, requestOptions?: RequestOptions): Promise<ApiResponse<T>>;
}
export declare class DefaultRequestBuilder<BaseUrlParamType, AuthParams> implements RequestBuilder<BaseUrlParamType, AuthParams> {
    protected _httpClient: HttpClientInterface;
    protected _baseUrlProvider: (arg?: BaseUrlParamType) => string;
    protected _apiErrorFactory: ApiErrorConstructor;
    protected _authenticationProvider: AuthenticatorInterface<AuthParams>;
    protected _httpMethod: HttpMethod;
    protected _path?: string | undefined;
    protected _accept?: string;
    protected _contentType?: string;
    protected _headers: Record<string, string>;
    protected _body?: string;
    protected _stream?: FileWrapper;
    protected _query: string[];
    protected _form?: HttpRequestUrlEncodedFormBody['content'];
    protected _formData?: HttpRequestMultipartFormBody['content'];
    protected _baseUrlArg: BaseUrlParamType | undefined;
    protected _validateResponse: boolean;
    protected _interceptors: HttpInterceptorInterface<RequestOptions | undefined>[];
    protected _authParams?: AuthParams;
    prepareArgs: typeof prepareArgs;
    constructor(_httpClient: HttpClientInterface, _baseUrlProvider: (arg?: BaseUrlParamType) => string, _apiErrorFactory: ApiErrorConstructor, _authenticationProvider: AuthenticatorInterface<AuthParams>, _httpMethod: HttpMethod, _path?: string | undefined);
    authenticate(params: AuthParams): void;
    deprecated(methodName: string, message?: string): void;
    appendTemplatePath(strings: TemplateStringsArray, ...args: Array<PathTemplateTypes>): void;
    method(httpMethodName: HttpMethod): void;
    baseUrl(arg: BaseUrlParamType): void;
    appendPath(path: string): void;
    acceptJson(): void;
    accept(acceptHeaderValue: string): void;
    contentType(contentTypeHeaderValue: string): void;
    header(name: string, value?: string | boolean | number): void;
    headers(headersToMerge: Record<string, string>): void;
    query(name: string, value: QueryValue): void;
    query(parameters?: Record<string, QueryValue> | null): void;
    text(body: string): void;
    json(data: unknown): void;
    xml<T>(argName: string, data: T, rootName: string, schema: Schema<T, any>): void;
    stream(file?: FileWrapper): void;
    form(parameters: Record<string, unknown>): void;
    formData(parameters: Record<string, unknown>): void;
    toRequest(): HttpRequest;
    intercept(interceptor: HttpInterceptorInterface<RequestOptions | undefined>): void;
    interceptRequest(interceptor: (httpRequest: HttpRequest) => HttpRequest): void;
    interceptResponse(interceptor: (response: HttpContext) => HttpContext): void;
    defaultToError(apiErrorCtor: ApiErrorConstructor): void;
    validateResponse(validate: boolean): void;
    throwOn<ErrorCtorArgs extends any[]>(statusCode: number | [number, number], errorConstructor: {
        new (response: HttpContext, ...args: ErrorCtorArgs): any;
    }, ...args: ErrorCtorArgs): void;
    call(requestOptions?: RequestOptions): Promise<ApiResponse<void>>;
    callAsText(requestOptions?: RequestOptions): Promise<ApiResponse<string>>;
    callAsOptionalText(requestOptions?: RequestOptions): Promise<ApiResponse<string | undefined>>;
    callAsStream(requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>;
    callAsJson<T>(schema: Schema<T>, requestOptions?: RequestOptions): Promise<ApiResponse<T>>;
    callAsXml<T>(rootName: string, schema: Schema<T, any>, requestOptions?: RequestOptions): Promise<ApiResponse<T>>;
    private _setContentTypeIfNotSet;
    private _addResponseValidator;
    private _addAuthentication;
}
export declare function createRequestBuilderFactory<BaseUrlParamType, AuthParams>(httpClient: HttpClientInterface, baseUrlProvider: (arg?: BaseUrlParamType) => string, apiErrorFactory: ApiErrorConstructor, authenticationProvider: AuthenticatorInterface<AuthParams>): RequestBuilderFactory<BaseUrlParamType, AuthParams>;
export declare function convertToStream(content: string | Blob | NodeJS.ReadableStream): Blob | NodeJS.ReadableStream;
export {};
