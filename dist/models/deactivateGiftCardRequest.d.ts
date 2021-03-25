import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface DeactivateGiftCardRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}
export declare const deactivateGiftCardRequestSchema: Schema<DeactivateGiftCardRequest>;
