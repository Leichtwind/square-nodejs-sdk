import { ApiError } from './errors/apiError';
import { Error } from './models/error';
export interface IProxyClientOptions {
    maxRetries: number;
}
declare type NetworkError = Error & {
    code: string;
    response: unknown;
    isAxiosError?: boolean;
};
declare type AcceptedError = ApiError | Error;
export declare const isApiError: (error: AcceptedError) => error is ApiError<{}>;
export declare const isAxiosError: (error: AcceptedError) => error is NetworkError;
export declare type RetryEvents = 'failure' | 'retry';
export declare class RetryableClient {
    private readonly config;
    private readonly callbacks;
    constructor(config?: IProxyClientOptions);
    on(event: RetryEvents, callback: (...args: any[]) => unknown): this;
    from<T extends Record<string, any>>(client: T, ignoreMethods?: string[]): T;
    retryable(action: (...args: any[]) => Promise<any>, retries?: number): Promise<any>;
}
export {};
