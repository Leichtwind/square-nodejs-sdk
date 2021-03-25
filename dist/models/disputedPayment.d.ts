import { Schema } from '../schema';
/** The payment the cardholder disputed. */
export interface DisputedPayment {
    /** Square-generated unique ID of the payment being disputed. */
    paymentId?: string;
}
export declare const disputedPaymentSchema: Schema<DisputedPayment>;
