import {Schema} from '../schema';
import {CreateGiftCardResponse, createGiftCardResponseSchema} from "./createGiftCardResponse";

export interface RetrieveGiftCardFromNonceResponse extends CreateGiftCardResponse {
}

export const retrieveGiftCardFromNonceResponseSchema: Schema<RetrieveGiftCardFromNonceResponse> = createGiftCardResponseSchema;
