import {lazy, object, Schema, string} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface ActivateGiftCardRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}

export const activateGiftCardRequestSchema: Schema<ActivateGiftCardRequest> = object(
    {
        idempotencyKey: ['idempotency_key', string()],
        giftcardActivity: ['gift_card_activity', lazy(() => giftCardActivitySchema)],
    }
);

