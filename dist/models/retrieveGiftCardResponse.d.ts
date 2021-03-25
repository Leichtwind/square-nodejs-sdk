import { Schema } from '../schema';
import { Error } from './error';
import { GiftCard } from './giftCard';
export interface RetrieveGiftCardResponse {
    errors?: Error[];
    giftCard?: GiftCard;
}
export declare const retrieveGiftCardResponseSchema: Schema<RetrieveGiftCardResponse>;
