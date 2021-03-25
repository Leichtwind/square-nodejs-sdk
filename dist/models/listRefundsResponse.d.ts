import { Schema } from '../schema';
import { Error } from './error';
import { Refund } from './refund';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
 * One of `errors` or `refunds` is present in a given response (never both).
 */
export interface ListRefundsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** An array of refunds that match your query. */
    refunds?: Refund[];
    /**
     * A pagination cursor for retrieving the next set of results,
     * if any remain. Provide this value as the `cursor` parameter in a subsequent
     * request to this endpoint.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}
export declare const listRefundsResponseSchema: Schema<ListRefundsResponse>;
