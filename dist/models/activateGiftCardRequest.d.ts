import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface ActivateGiftCardRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}
export declare const activateGiftCardRequestSchema: Schema<ActivateGiftCardRequest>;
