import { Schema } from '../schema';
/** Provides information about the application used to generate a change. */
export interface SourceApplication {
    /** Indicates the Square product used to generate an inventory change. */
    product?: string;
    /**
     * Read-only Square ID assigned to the application. Only used for
     * [Product](#type-product) type `EXTERNAL_API`.
     */
    applicationId?: string;
    /**
     * Read-only display name assigned to the application
     * (e.g. `"Custom Application"`, `"Square POS 4.74 for Android"`).
     */
    name?: string;
}
export declare const sourceApplicationSchema: Schema<SourceApplication>;
