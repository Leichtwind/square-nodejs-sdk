import {object, Schema, string} from "../schema";

export interface RetrieveGiftCardFromNonceRequest {
    idempotencyKey: string;
    nonce: string;
}

export const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest> = object(
    {
        idempotencyKey: ['idempotency_key', string()],
        nonce: ['nonce', string()],
    }
);
