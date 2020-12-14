import {lazy, object, Schema, string} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface DeactivateGiftCardRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}

export const deactivateGiftCardRequestSchema: Schema<DeactivateGiftCardRequest> = object(
    {
        idempotencyKey: ['idempotency_key', string()],
        giftcardActivity: ['giftcard_activity', lazy(() => giftCardActivitySchema)],
    }
);

