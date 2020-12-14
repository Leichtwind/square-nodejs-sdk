import {lazy, object, Schema} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface DeactivateGiftCardResponse {
    giftCardActivity: GiftCardActivity
}

export const deactivateGiftCardResponseSchema: Schema<DeactivateGiftCardResponse> = object(
    {
        giftCardActivity: ['giftcard_activity', lazy(() => giftCardActivitySchema)]
    }
)
