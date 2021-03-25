import { Schema } from '../schema';
import { Money } from './money';
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount';
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax';
import { OrderQuantityUnit } from './orderQuantityUnit';
import { OrderReturnLineItemModifier } from './orderReturnLineItemModifier';
/** The line item being returned in an Order. */
export interface OrderReturnLineItem {
    /** Unique identifier for this return line item entry. */
    uid?: string;
    /** `uid` of the LineItem in the original sale Order. */
    sourceLineItemUid?: string;
    /** The name of the line item. */
    name?: string;
    /**
     * The quantity returned, formatted as a decimal number.
     * For example: `"3"`.
     * Line items with a `quantity_unit` can have non-integer quantities.
     * For example: `"1.70000"`.
     */
    quantity: string;
    /**
     * Contains the measurement unit for a quantity and a precision which
     * specifies the number of digits after the decimal point for decimal quantities.
     */
    quantityUnit?: OrderQuantityUnit;
    /** The note of the returned line item. */
    note?: string;
    /** The [CatalogItemVariation](#type-catalogitemvariation) id applied to this returned line item. */
    catalogObjectId?: string;
    /** The name of the variation applied to this returned line item. */
    variationName?: string;
    /** The [CatalogModifier](#type-catalogmodifier)s applied to this line item. */
    returnModifiers?: OrderReturnLineItemModifier[];
    /**
     * The list of references to `OrderReturnTax` entities applied to the returned line item. Each
     * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
     * `OrderReturnTax` applied to the returned line item. On reads, the amount applied
     * is populated.
     */
    appliedTaxes?: OrderLineItemAppliedTax[];
    /**
     * The list of references to `OrderReturnDiscount` entities applied to the returned line item. Each
     * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
     * `OrderReturnDiscount` applied to the returned line item. On reads, the amount
     * applied is populated.
     */
    appliedDiscounts?: OrderLineItemAppliedDiscount[];
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    basePriceMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    variationTotalPriceMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    grossReturnMoney?: Money;
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
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalDiscountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
}
export declare const orderReturnLineItemSchema: Schema<OrderReturnLineItem>;