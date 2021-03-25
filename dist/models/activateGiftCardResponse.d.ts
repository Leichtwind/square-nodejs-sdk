import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface ActivateGiftCardResponse {
    giftCardActivity: GiftCardActivity;
}
export declare const activateGiftCardResponseSchema: Schema<ActivateGiftCardResponse>;
