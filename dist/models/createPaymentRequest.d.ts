import { Schema } from '../schema';
import { Address } from './address';
import { CashPaymentDetails } from './cashPaymentDetails';
import { ExternalPaymentDetails } from './externalPaymentDetails';
import { Money } from './money';
/**
 * Describes a request to create a payment using
 * [CreatePayment](#endpoint-payments-createpayment).
 */
export interface CreatePaymentRequest {
    /**
     * The ID for the source of funds for this payment. This can be a payment token
     * (card nonce) generated by the Square payment form or a card on file made with the
     * Customers API. If recording a payment that the seller
     * received outside of Square, specify either "CASH" or "EXTERNAL".
     * For more information, see
     * [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
     */
    sourceId: string;
    /**
     * A unique string that identifies this `CreatePayment` request. Keys can be any valid string
     * but must be unique for every `CreatePayment` request.
     * Max: 45 characters
     * Note: The number of allowed characters might be less than the stated maximum, if multi-byte
     * characters are used.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    tipMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appFeeMoney?: Money;
    /**
     * The duration of time after the payment's creation when Square automatically cancels the
     * payment. This automatic cancellation applies only to payments that do not reach a terminal state
     * (COMPLETED, CANCELED, or FAILED) before the `delay_duration` time period.
     * This parameter should be specified as a time duration, in RFC 3339 format, with a minimum value
     * of 1 minute.
     * Note: This feature is only supported for card payments. This parameter can only be set for a delayed
     * capture payment (`autocomplete=false`).
     * Default:
     * - Card-present payments: "PT36H" (36 hours) from the creation time.
     * - Card-not-present payments: "P7D" (7 days) from the creation time.
     */
    delayDuration?: string;
    /**
     * If set to `true`, this payment will be completed when possible. If
     * set to `false`, this payment is held in an approved state until either
     * explicitly completed (captured) or canceled (voided). For more information, see
     * [Delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).
     * Default: true
     */
    autocomplete?: boolean;
    /** Associates a previously created order with this payment. */
    orderId?: string;
    /**
     * The [Customer](#type-customer) ID of the customer associated with the payment.
     * This is required if the `source_id` refers to a card on file created using the Customers API.
     */
    customerId?: string;
    /**
     * The location ID to associate with the payment. If not specified, the default location is
     * used.
     */
    locationId?: string;
    /**
     * A user-defined ID to associate with the payment.
     * You can use this field to associate the payment to an entity in an external system
     * (for example, you might specify an order ID that is generated by a third-party shopping cart).
     * Limit 40 characters.
     */
    referenceId?: string;
    /**
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`.
     * Verification tokens encapsulate customer device information and 3-D Secure
     * challenge results to indicate that Square has verified the buyer identity.
     * For more information, see [SCA Overview](https://developer.squareup.com/docs/sca-overview).
     */
    verificationToken?: string;
    /**
     * If set to `true` and charging a Square Gift Card, a payment might be returned with
     * `amount_money` equal to less than what was requested. For example, a request for $20 when charging
     * a Square Gift Card with a balance of $5 results in an APPROVED payment of $5. You might choose
     * to prompt the buyer for an additional payment to cover the remainder or cancel the Gift Card
     * payment. This field cannot be `true` when `autocomplete = true`.
     * For more information, see
     * [Partial amount with Square Gift Cards](https://developer.squareup.com/docs/payments-api/take-payments#partial-payment-gift-card).
     * Default: false
     */
    acceptPartialAuthorization?: boolean;
    /** The buyer's email address. */
    buyerEmailAddress?: string;
    /** Represents a physical address. */
    billingAddress?: Address;
    /** Represents a physical address. */
    shippingAddress?: Address;
    /**
     * An optional note to be entered by the developer when creating a payment.
     * Limit 500 characters.
     */
    note?: string;
    /**
     * Optional additional payment information to include on the customer's card statement
     * as part of the statement description. This can be, for example, an invoice number, ticket number,
     * or short description that uniquely identifies the purchase.
     * Note that the `statement_description_identifier` might get truncated on the statement description
     * to fit the required information including the Square identifier (SQ *) and name of the
     * seller taking the payment.
     */
    statementDescriptionIdentifier?: string;
    /**
     * Stores details about a cash payment. Contains only non-confidential information. For more information, see
     * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
     */
    cashDetails?: CashPaymentDetails;
    /**
     * Stores details about an external payment. Contains only non-confidential information.
     * For more information, see
     * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
     */
    externalDetails?: ExternalPaymentDetails;
}
export declare const createPaymentRequestSchema: Schema<CreatePaymentRequest>;