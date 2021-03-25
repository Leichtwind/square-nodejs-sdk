import { Schema } from '../schema';
import { Error } from './error';
import { Payment } from './payment';
/** Defines the response returned by [ListPayments](#endpoint-payments-listpayments). */
export interface ListPaymentsResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** The requested list of payments. */
    payments?: Payment[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
}
export declare const listPaymentsResponseSchema: Schema<ListPaymentsResponse>;
