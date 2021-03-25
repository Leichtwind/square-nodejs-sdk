import {object, Schema, lazy} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface GiftCardActivityResponse {
    giftCardActivity: GiftCardActivity
}

export const giftCardActivityResponseSchema: Schema<GiftCardActivityResponse> = object(
    {
        giftCardActivity: ['gift_card_activity', lazy(() => giftCardActivitySchema)]
    }
)
