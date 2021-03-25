import { GiftCardTypeEnum } from "./giftCard";
import { Schema } from "../schema";
export interface CreateGiftCardRequest {
    idempotencyKey: string;
    locationId: string;
    giftCard: {
        type: GiftCardTypeEnum;
    };
}
export declare const createGiftCardRequestSchema: Schema<CreateGiftCardRequest>;
