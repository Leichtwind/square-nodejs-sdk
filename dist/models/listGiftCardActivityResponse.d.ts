import { GiftCardActivity } from "./giftCardActivity";
import { Schema } from "../schema";
export interface ListGiftCardActivityResponse {
    giftcardActivities: GiftCardActivity[];
}
export declare const listGiftCardActivityResponseSchema: Schema<ListGiftCardActivityResponse>;
