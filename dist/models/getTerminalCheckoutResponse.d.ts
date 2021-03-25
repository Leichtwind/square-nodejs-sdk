import { Schema } from '../schema';
import { Error } from './error';
import { TerminalCheckout } from './terminalCheckout';
export interface GetTerminalCheckoutResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    checkout?: TerminalCheckout;
}
export declare const getTerminalCheckoutResponseSchema: Schema<GetTerminalCheckoutResponse>;
