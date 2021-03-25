import { Schema } from '../schema';
/** Describes a `CancelInvoice` request. */
export interface CancelInvoiceRequest {
    /**
     * The version of the [invoice](#type-invoice) to cancel.
     * If you do not know the version, you can call
     * [GetInvoice](#endpoint-Invoices-GetInvoice) or [ListInvoices](#endpoint-Invoices-ListInvoices).
     */
    version: number;
}
export declare const cancelInvoiceRequestSchema: Schema<CancelInvoiceRequest>;
