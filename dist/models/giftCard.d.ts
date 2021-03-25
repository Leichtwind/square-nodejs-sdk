import { Schema } from "../schema";
import { Money } from "./money";
export declare enum GiftCardTypeEnum {
    DIGITAL = "DIGITAL",
    PHYSICAL = "PHYSICAL"
}
export declare enum GiftCardGANSourceEnum {
    SQUARE = "SQUARE",
    OTHER = "OTHER"
}
export declare enum GiftCardStateEnum {
    NOT_ACTIVATED = "NOT_ACTIVATED",
    ACTIVATED = "ACTIVATED",
    DISABLED = "DISABLED"
}
export declare enum GiftCardDeactivateReasonEnum {
    SUSPICIOUS_ACTIVITY = "SUSPICIOUS_ACTIVITY"
}
export declare enum GiftCardAdjustDecrementReasonEnum {
    SUSPICIOUS_ACTIVITY = "SUSPICIOUS_ACTIVITY",
    BALANCE_ACCIDENTALLY_INCREASED = "BALANCE_ACCIDENTALLY_INCREASED",
    SUPPORT_ISSUE = "SUPPORT_ISSUE"
}
export declare enum GiftCardAdjustIncrementReasonEnum {
    COMPLIMENTARY = "COMPLIMENTARY",
    SUPPORT_ISSUE = "SUPPORT_ISSUE",
    REFUND_ISSUED = "REFUND_ISSUED",
    TRANSACTION_VOIDED = "TRANSACTION_VOIDED"
}
export declare enum GiftCardClearBalanceReasonEnum {
    SUSPICIOUS_ACTIVITY = "SUSPICIOUS_ACTIVITY",
    REUSE_GIFTCARD = "REUSE_GIFTCARD"
}
export interface GiftCard {
    id?: string;
    gan?: string;
    type: GiftCardTypeEnum;
    state?: string;
    ganSource?: GiftCardGANSourceEnum;
    balanceMoney?: Money;
}
export declare const giftCardSchema: Schema<GiftCard>;
