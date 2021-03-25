import { Schema } from "../schema";
import { Error } from './error';
import { GiftCard } from "./giftCard";
export interface CreateGiftCardResponse {
    errors?: Error[];
    giftCard?: GiftCard;
}
export declare const createGiftCardResponseSchema: Schema<CreateGiftCardResponse>;
