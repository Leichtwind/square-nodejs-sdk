import { Schema } from '../schema';
/** Filter by current Order `state`. */
export interface SearchOrdersStateFilter {
    /**
     * States to filter for.
     * See [OrderState](#type-orderstate) for possible values
     */
    states: string[];
}
export declare const searchOrdersStateFilterSchema: Schema<SearchOrdersStateFilter>;
