import { ApiError } from './errors/apiError';
import { Error } from './models/error';

export interface IProxyClientOptions {
  maxRetries: number;
}

const retryableErrors: ReadonlyArray<string> = [
  'API_ERROR',
  'RATE_LIMITED',
  'REQUEST_TIMEOUT',
  'GATEWAY_TIMEOUT',
  'SERVICE_UNAVAILABLE',
  'INTERNAL_SERVER_ERROR',
];

type NetworkError = Error & {
  code: string;
  response: unknown;
  isAxiosError?: boolean;
};
export type AcceptedError = ApiError | Error;

export const isApiError = (error: AcceptedError): error is ApiError => {
  return error instanceof ApiError;
};

export const isAxiosError = (error: AcceptedError): error is NetworkError => {
  return !!(error as NetworkError).isAxiosError;
};

const isRetryableRequest = (error: Error): boolean => {
  if (isAxiosError(error)) {
    const { response, code } = error;

    return !response || ['ECONNREFUSED'].includes(code);
  }

  if (isApiError(error)) {
    const isRetryableResponseCode: boolean =
      429 === error.statusCode ||
      (error.statusCode >= 500 && 501 !== error.statusCode);
    const isIdempotentRequest: boolean = [
      'GET',
      'HEAD',
      'OPTIONS',
      'PUT',
      'DELETE',
    ].includes(error.request.method.toUpperCase() || '');

    return (
      isRetryableResponseCode &&
      (isIdempotentRequest || retryableErrors.includes(error.errors![0].code))
    );
  }

  return false;
};

export type RetryEvents = 'failure' | 'retry';

export class RetryableClient {
  private readonly callbacks: Map<
    RetryEvents,
    (...args: any[]) => unknown
  > = new Map();

  constructor(
    private readonly config: IProxyClientOptions = { maxRetries: 10 }
  ) {}

  on(event: RetryEvents, callback: (...args: any[]) => unknown): this {
    this.callbacks.set(event, callback);

    return this;
  }

  from<T extends Record<string, any>>(
    client: T,
    ignoreMethods: string[] = []
  ): T {
    const handler: ProxyHandler<T> = {
      get: (target: T, method: string): any => {
        if (ignoreMethods.includes(method)) {
          return target[method];
        }

        return async (...args: any[]): Promise<any> => {
          return this.retryable(target[method].bind(target, ...args));
        };
      },
    };

    return new Proxy<T>(client, handler);
  }

  async retryable(
    action: (...args: any[]) => Promise<any>,
    retries: number = 0
  ): Promise<any> {
    try {
      return await action();
    } catch (error) {
      if (isRetryableRequest(error) && retries < this.config.maxRetries) {
        const delay: number = Math.round(1500 * Math.log(++retries + 1));
        this.callbacks.get('retry')?.call(this, retries, delay, error);

        new Promise(resolve => void setTimeout(resolve, delay));

        return this.retryable(action, retries);
      }

      this.callbacks.get('failure')?.call(this, error);
      throw error;
    }
  }
}
