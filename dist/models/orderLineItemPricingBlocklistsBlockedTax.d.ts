import { Schema } from '../schema';
/**
 * A tax to block from applying to a line item. The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
export interface OrderLineItemPricingBlocklistsBlockedTax {
    /** Unique ID of the `BlockedTax` within the order. */
    uid?: string;
    /**
     * The `uid` of the tax that should be blocked. Use this field to block
     * ad-hoc taxes. For catalog taxes use the `tax_catalog_object_id` field.
     */
    taxUid?: string;
    /**
     * The `catalog_object_id` of the tax that should be blocked.
     * Use this field to block catalog taxes. For ad-hoc taxes use the
     * `tax_uid` field.
     */
    taxCatalogObjectId?: string;
}
export declare const orderLineItemPricingBlocklistsBlockedTaxSchema: Schema<OrderLineItemPricingBlocklistsBlockedTax>;
