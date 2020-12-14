import {object, Schema, string} from "../schema";

export interface RetrieveGiftCardFromGanRequest {
    gan: string;
}

export const retrieveGiftCardFromGanRequestSchema: Schema<RetrieveGiftCardFromGanRequest> = object(
    {
        gan: ['gan', string()],
    }
);
