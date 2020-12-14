import {array, lazy, object, optional, Schema} from "../schema";
import {Error, errorSchema} from './error';
import {GiftCard, giftCardSchema} from "./giftCard";

export interface CreateGiftCardResponse {
    errors?: Error[];
    giftCard?: GiftCard;
}

export const createGiftCardResponseSchema: Schema<CreateGiftCardResponse> = object(
    {
        errors: ['errors', optional(array(lazy(() => errorSchema)))],
        giftCard: ['giftcard', optional(lazy(() => giftCardSchema))],
    }
);
