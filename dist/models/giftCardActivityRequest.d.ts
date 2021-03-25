import { Schema } from "../schema";
import { GiftCardActivity } from "./giftCardActivity";
export interface GiftCardActivityRequest {
    idempotencyKey: string;
    giftcardActivity: GiftCardActivity;
}
export declare const giftCardActivityRequestSchema: Schema<GiftCardActivityRequest>;
