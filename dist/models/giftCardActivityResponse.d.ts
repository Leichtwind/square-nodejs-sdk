import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface GiftCardActivityResponse {
    giftCardActivity: GiftCardActivity;
}
export declare const giftCardActivityResponseSchema: Schema<GiftCardActivityResponse>;
