import { Schema } from "../schema";
export interface RetrieveGiftCardFromNonceRequest {
    idempotencyKey: string;
    nonce: string;
}
export declare const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest>;
