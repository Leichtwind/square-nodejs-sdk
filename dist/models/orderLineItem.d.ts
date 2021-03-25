import { Schema } from '../schema';
import { Money } from './money';
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount';
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax';
import { OrderLineItemModifier } from './orderLineItemModifier';
import { OrderLineItemPricingBlocklists } from './orderLineItemPricingBlocklists';
import { OrderQuantityUnit } from './orderQuantityUnit';
/**
 * Represents a line item in an order. Each line item describes a different
 * product to purchase, with its own quantity and price details.
 */
export interface OrderLineItem {
    /** Unique ID that identifies the line item only within this order. */
    uid?: string;
    /** The name of the line item. */
    name?: string;
    /**
     * The quantity purchased, formatted as a decimal number.
     * For example: `"3"`.
     * Line items with a quantity of `"0"` will be automatically removed
     * upon paying for or otherwise completing the order.
     * Line items with a `quantity_unit` can have non-integer quantities.
     * For example: `"1.70000"`.
     */
    quantity: string;
    /**
     * Contains the measurement unit for a quantity and a precision which
     * specifies the number of digits after the decimal point for decimal quantities.
     */
    quantityUnit?: OrderQuantityUnit;
    /** The note of the line item. */
    note?: string;
    /** The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item. */
    catalogObjectId?: string;
    /** The name of the variation applied to this line item. */
    variationName?: string;
    /**
     * Application-defined data attached to this line item. Metadata fields are intended
     * to store descriptive references or associations with an entity in another system or store brief
     * information about the object. Square does not process this field; it only stores and returns it
     * in relevant API calls. Do not use metadata to store any sensitive information (personally
     * identifiable information, card details, etc.).
     * Keys written by applications must be 60 characters or less and must be in the character set
     * `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square. These keys are prefixed
     * with a namespace, separated from the key with a ':' character.
     * Values have a max length of 255 characters.
     * An application may have up to 10 entries per metadata field.
     * Entries written by applications are private and can only be read or modified by the same
     * application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: Record<string, string>;
    /** The [CatalogModifier](#type-catalogmodifier)s applied to this line item. */
    modifiers?: OrderLineItemModifier[];
    /**
     * The list of references to taxes applied to this line item. Each
     * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a
     * top-level `OrderLineItemTax` applied to the line item. On reads, the
     * amount applied is populated.
     * An `OrderLineItemAppliedTax` will be automatically created on every line
     * item for all `ORDER` scoped taxes added to the order. `OrderLineItemAppliedTax`
     * records for `LINE_ITEM` scoped taxes must be added in requests for the tax
     * to apply to any line items.
     * To change the amount of a tax, modify the referenced top-level tax.
     */
    appliedTaxes?: OrderLineItemAppliedTax[];
    /**
     * The list of references to discounts applied to this line item. Each
     * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
     * `OrderLineItemDiscounts` applied to the line item. On reads, the amount
     * applied is populated.
     * An `OrderLineItemAppliedDiscount` will be automatically created on every line item for all
     * `ORDER` scoped discounts that are added to the order. `OrderLineItemAppliedDiscount` records
     * for `LINE_ITEM` scoped discounts must be added in requests for the discount to apply to any
     * line items.
     * To change the amount of a discount, modify the referenced top-level discount.
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
    grossSalesMoney?: Money;
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
    /**
     * Describes pricing adjustments that are blocked from manual and
     * automatic application to a line item. For more information, see
     * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
     */
    pricingBlocklists?: OrderLineItemPricingBlocklists;
}
export declare const orderLineItemSchema: Schema<OrderLineItem>;
