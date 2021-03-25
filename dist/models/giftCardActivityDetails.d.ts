import { Schema } from "../schema";
import { Money } from "./money";
export interface GiftCardActivateActivityDetails {
    amountMoney?: Money;
    orderId?: string;
    lineItemId?: string;
    referenceId?: string;
    buyerPaymentInstrumentIds?: string[];
}
export declare const giftCardActivateActivityDetails: Schema<GiftCardActivateActivityDetails>;
export interface GiftCardLoadActivityDetails {
    amountMoney: Money;
    orderId?: string;
    lineItemId?: string;
}
export declare const giftCardLoadActivityDetails: Schema<GiftCardLoadActivityDetails>;
export interface GiftCardClearBalanceActivityDetails {
    reason: string;
}
export declare const giftCardClearBalanceActivityDetails: Schema<GiftCardClearBalanceActivityDetails>;
export interface GiftCardDeactivateActivityDetails {
    reason: string;
}
export declare const giftCardDeactivateActivityDetails: Schema<GiftCardDeactivateActivityDetails>;
export interface GiftCardRedeemActivityDetails {
    amountMoney: Money;
    referenceId?: string;
    paymentId?: string;
}
export declare const giftCardRedeemActivityDetails: Schema<GiftCardRedeemActivityDetails>;
export interface GiftCardRefundActivityDetails {
    amountMoney: Money;
    redeemActivityId?: string;
    referenceId?: string;
    paymentId?: string;
}
export declare const giftCardRefundActivityDetails: Schema<GiftCardRefundActivityDetails>;
export interface GiftCardAdjustIncrementActivityDetails {
    amountMoney: Money;
    reason: string;
}
export declare const giftCardAdjustIncrementActivityDetails: Schema<GiftCardAdjustIncrementActivityDetails>;
export interface GiftCardAdjustDecrementActivityDetails {
    amountMoney: Money;
    reason: string;
}
export declare const giftCardAdjustDecrementActivityDetails: Schema<GiftCardAdjustDecrementActivityDetails>;
export interface GiftCardUnlinkedActivityDetails {
    referenceId?: string;
    paymentId?: string;
    amountMoney?: Money;
}
export declare const giftCardUnlinkedActivityDetails: Schema<GiftCardUnlinkedActivityDetails>;
export interface GiftCardBlockActivityDetails {
    reason: string;
}
export declare const giftCardBlockActivityDetails: Schema<GiftCardBlockActivityDetails>;
export interface GiftCardUnblockActivityDetails {
    reason: string;
}
export declare const giftCardUnblockActivityDetails: Schema<GiftCardUnblockActivityDetails>;
export interface GiftCardImportActivityDetails {
    amountMoney: Money;
}
export declare const giftCardImportActivityDetails: Schema<GiftCardImportActivityDetails>;
export interface GiftCardOtherActivityDetails {
    amountMoney: Money;
}
export declare const giftCardOtherActivityDetails: Schema<GiftCardOtherActivityDetails>;
