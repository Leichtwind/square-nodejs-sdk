import {Schema} from '../schema';
import {CreateGiftCardResponse, createGiftCardResponseSchema} from "./createGiftCardResponse";

export interface RetrieveGiftCardFromGanResponse extends CreateGiftCardResponse {
}

export const retrieveGiftCardFromGanResponseSchema: Schema<RetrieveGiftCardFromGanResponse> = createGiftCardResponseSchema;
