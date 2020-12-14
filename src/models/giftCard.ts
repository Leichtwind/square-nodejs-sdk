import {object, optional, Schema, string} from "../schema";
import {lazy, stringEnum} from "@apimatic/schema";
import {Money, moneySchema} from "./money";

export enum GiftCardTypeEnum {
    DIGITAL = 'DIGITAL',
    PHYSICAL = 'PHYSICAL',
}

export enum GiftCardGANSourceEnum {
    SQUARE = 'SQUARE',
    OTHER = 'OTHER',
}

export enum GiftCardStateEnum {
    NOT_ACTIVATED = 'NOT_ACTIVATED',
    ACTIVATED = 'ACTIVATED',
    DISABLED = 'DISABLED',
}

export enum GiftCardDeactivateReasonEnum {
    SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
}

export enum GiftCardAdjustDecrementReasonEnum {
    SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
    BALANCE_ACCIDENTALLY_INCREASED = 'BALANCE_ACCIDENTALLY_INCREASED',
    SUPPORT_ISSUE = 'SUPPORT_ISSUE',
}

export enum GiftCardAdjustIncrementReasonEnum {
    COMPLIMENTARY = 'COMPLIMENTARY',
    SUPPORT_ISSUE = 'SUPPORT_ISSUE',
    REFUND_ISSUED = 'REFUND_ISSUED',
    TRANSACTION_VOIDED = 'TRANSACTION_VOIDED',
}

export enum GiftCardClearBalanceReasonEnum {
    SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
    REUSE_GIFTCARD = 'REUSE_GIFTCARD',
}

export interface GiftCard {
    id?: string;
    gan?: string;
    type: GiftCardTypeEnum;
    state?: string;
    ganSource?: GiftCardGANSourceEnum;
    balanceMoney?: Money;
}

export const giftCardSchema: Schema<GiftCard> = object({
    id: ['id', optional(string())],
    gan: ['gan', optional(string())],
    type: ['type', stringEnum(GiftCardTypeEnum)],
    state: ['state', optional(string())],
    ganSource: ['gan_source', optional(stringEnum(GiftCardGANSourceEnum))],
    balanceMoney: ['balance_money', optional(lazy(() => moneySchema))],
});
