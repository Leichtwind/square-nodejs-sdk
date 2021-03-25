import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface ClearGiftCardBalanceResponse {
    giftCardActivity: GiftCardActivity;
}
export declare const clearGiftCardBalanceResponseSchema: Schema<ClearGiftCardBalanceResponse>;
