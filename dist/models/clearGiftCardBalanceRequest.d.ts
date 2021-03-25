import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface ClearGiftCardBalanceRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}
export declare const clearGiftCardBalanceRequestSchema: Schema<ClearGiftCardBalanceRequest>;
