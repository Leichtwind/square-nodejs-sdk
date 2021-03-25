import { Schema } from '../schema';
/** Options to control how to override the default behavior of the specified modifier. */
export interface CatalogModifierOverride {
    /** The ID of the `CatalogModifier` whose default behavior is being overridden. */
    modifierId: string;
    /** If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`. */
    onByDefault?: boolean;
}
export declare const catalogModifierOverrideSchema: Schema<CatalogModifierOverride>;
