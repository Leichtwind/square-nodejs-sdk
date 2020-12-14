import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";
import {array, lazy, object, Schema} from "../schema";

export interface ListGiftCardActivityResponse {
    giftcardActivities: GiftCardActivity[]
}

export const listGiftCardActivityResponseSchema: Schema<ListGiftCardActivityResponse> = object({
    giftcardActivities: ['giftcard_activities', array(lazy(() => giftCardActivitySchema))]
})
