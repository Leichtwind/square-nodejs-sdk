import {object, Schema, lazy} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface ActivateGiftCardResponse {
    giftCardActivity: GiftCardActivity
}

export const activateGiftCardResponseSchema: Schema<ActivateGiftCardResponse> = object(
    {
        giftCardActivity: ['giftcard_activity', lazy(() => giftCardActivitySchema)]
    }
)
