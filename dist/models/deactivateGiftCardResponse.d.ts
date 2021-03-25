import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface DeactivateGiftCardResponse {
    giftCardActivity: GiftCardActivity;
}
export declare const deactivateGiftCardResponseSchema: Schema<DeactivateGiftCardResponse>;
