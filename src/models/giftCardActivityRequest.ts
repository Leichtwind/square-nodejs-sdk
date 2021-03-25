import {lazy, object, Schema, string} from "../schema";
import {GiftCardActivity, giftCardActivitySchema} from "./giftCardActivity";

export interface GiftCardActivityRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}

export const giftCardActivityRequestSchema: Schema<GiftCardActivityRequest> = object(
    {
        idempotencyKey: ['idempotency_key', string()],
        giftcardActivity: ['gift_card_activity', lazy(() => giftCardActivitySchema)],
    }
);

