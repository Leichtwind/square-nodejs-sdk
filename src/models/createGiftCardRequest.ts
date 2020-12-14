import {giftCardSchema, GiftCardTypeEnum} from "./giftCard";
import {lazy, object, Schema, string} from "../schema";

export interface CreateGiftCardRequest {
    idempotencyKey: string;
    locationId: string;
    giftCard: {
        type: GiftCardTypeEnum;
    };
}

export const createGiftCardRequestSchema: Schema<CreateGiftCardRequest> = object(
    {
        giftCard: ['giftcard', lazy(() => giftCardSchema)],
        locationId: ['location_id', string()],
        idempotencyKey: ['idempotency_key', string()],
    }
);
