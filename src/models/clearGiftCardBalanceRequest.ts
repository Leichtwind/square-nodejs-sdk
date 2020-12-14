import {lazy, object, Schema, string} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface ClearGiftCardBalanceRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}

export const clearGiftCardBalanceRequestSchema: Schema<ClearGiftCardBalanceRequest> = object(
    {
        idempotencyKey: ['idempotency_key', string()],
        giftcardActivity: ['giftcard_activity', lazy(() => giftCardActivitySchema)],
    }
);

