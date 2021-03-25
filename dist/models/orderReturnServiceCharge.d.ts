import { Schema } from '../schema';
import { Money } from './money';
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax';
/** Represents the service charge applied to the original order. */
export interface OrderReturnServiceCharge {
    /** Unique ID that identifies the return service charge only within this order. */
    uid?: string;
    /**
     * `uid` of the Service Charge from the Order containing the original
     * charge of the service charge. `source_service_charge_uid` is `null` for
     * unlinked returns.
     */
    sourceServiceChargeUid?: string;
    /** The name of the service charge. */
    name?: string;
    /** The catalog object ID of the associated [CatalogServiceCharge](#type-catalogservicecharge). */
    catalogObjectId?: string;
    /**
     * The percentage of the service charge, as a string representation of
     * a decimal number. For example, a value of `"7.25"` corresponds to a
     * percentage of 7.25%.
     * Exactly one of `percentage` or `amount_money` should be set.
     */
    percentage?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appliedMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalTaxMoney?: Money;
    /**
     * Represents a phase in the process of calculating order totals.
     * Service charges are applied __after__ the indicated phase.
     * [Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
     */
    calculationPhase?: string;
    /**
     * Indicates whether the surcharge can be taxed. Service charges
     * calculated in the `TOTAL_PHASE` cannot be marked as taxable.
     */
    taxable?: boolean;
    /**
     * The list of references to `OrderReturnTax` entities applied to the
     * `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid`
     * that references the `uid` of a top-level `OrderReturnTax` that is being
     * applied to the `OrderReturnServiceCharge`. On reads, the amount applied is
     * populated.
     */
    appliedTaxes?: OrderLineItemAppliedTax[];
}
export declare const orderReturnServiceChargeSchema: Schema<OrderReturnServiceCharge>;
