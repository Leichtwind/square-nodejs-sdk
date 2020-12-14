import {array, lazy, object, Schema, string} from "../schema";
import {Money, moneySchema} from "./money";
import {optional} from "@apimatic/schema";

// ACTIVATE
export interface GiftCardActivateActivityDetails {
    amountMoney?: Money;
    orderId?: string;
    lineItemId?: string;
    referenceId?: string;
    buyerPaymentInstrumentIds?: string[];
}

export const giftCardActivateActivityDetails: Schema<GiftCardActivateActivityDetails> = object(
    {
        amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
        orderId: ['order_id', optional(string())],
        lineItemId: ['line_item_id', optional(string())],
        referenceId: ['reference_id', optional(string())],
        buyerPaymentInstrumentIds: ['buyer_payment_instrument_ids', optional(array(string()))],
    }
)

// LOAD
export interface GiftCardLoadActivityDetails {
    amountMoney: Money;
    orderId?: string;
    lineItemId?: string;
}

export const giftCardLoadActivityDetails: Schema<GiftCardLoadActivityDetails> = object(
    {
        amountMoney: ['amount_money', lazy(() => moneySchema)],
        orderId: ['order_id', optional(string())],
        lineItemId: ['line_item_id', optional(string())],
    }
)

// CLEAR_BALANCE
export interface GiftCardClearBalanceActivityDetails {
    reason: string;
}

export const giftCardClearBalanceActivityDetails: Schema<GiftCardClearBalanceActivityDetails> = object(
    {
        reason: ['reason', string()],
    }
)

// DEACTIVATE
export interface GiftCardDeactivateActivityDetails {
    reason: string;
}

export const giftCardDeactivateActivityDetails: Schema<GiftCardDeactivateActivityDetails> = object(
    {
        reason: ['reason', string()],
    }
)

// REDEEM
export interface GiftCardRedeemActivityDetails {
    amountMoney: Money;
    referenceId?: string;
    paymentId?: string;
}

export const giftCardRedeemActivityDetails: Schema<GiftCardRedeemActivityDetails> = object(
    {
        amountMoney: ['amount_money', lazy(() => moneySchema)],
        referenceId: ['reference_id', optional(string())],
        paymentId: ['payment_id', optional(string())],
    }
)

// REFUND
export interface GiftCardRefundActivityDetails {
    amountMoney: Money;
    redeemActivityId?: string;
    referenceId?: string;
    paymentId?: string;
}

export const giftCardRefundActivityDetails: Schema<GiftCardRefundActivityDetails> = object(
    {
        amountMoney: ['amount_money', lazy(() => moneySchema)],
        redeemActivityId: ['redeem_activity_id', optional(string())],
        referenceId: ['reference_id', optional(string())],
        paymentId: ['payment_id', optional(string())],
    }
)

// ADJUST_INCREMENT
export interface GiftCardAdjustIncrementActivityDetails {
    amountMoney: Money;
    reason: string;
}

export const giftCardAdjustIncrementActivityDetails: Schema<GiftCardAdjustIncrementActivityDetails> = object(
    {
        amountMoney: ['amount_money', lazy(() => moneySchema)],
        reason: ['reason', string()],
    }
)

// ADJUST_DECREMENT
export interface GiftCardAdjustDecrementActivityDetails {
    amountMoney: Money;
    reason: string;
}

export const giftCardAdjustDecrementActivityDetails: Schema<GiftCardAdjustDecrementActivityDetails> = object(
    {
        amountMoney: ['amount_money', lazy(() => moneySchema)],
        reason: ['reason', string()],
    }
)


// UNLINKED_ACTIVITY
export interface GiftCardUnlinkedActivityDetails {
    referenceId?: string;
    paymentId?: string;
    amountMoney?: Money;
}

export const giftCardUnlinkedActivityDetails: Schema<GiftCardUnlinkedActivityDetails> = object(
    {
        amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
        paymentId: ['payment_id', optional(string())],
        referenceId: ['reference_id', optional(string())],
    }
)

// BLOCK
export interface GiftCardBlockActivityDetails {
    reason: string;
}

export const giftCardBlockActivityDetails: Schema<GiftCardBlockActivityDetails> = object(
    {
        reason: ['reason', string()],
    }
)

// UNBLOCK
export interface GiftCardUnblockActivityDetails {
    reason: string;
}

export const giftCardUnblockActivityDetails: Schema<GiftCardUnblockActivityDetails> = object(
    {
        reason: ['reason', string()],
    }
)

// IMPORT
export interface GiftCardImportActivityDetails {
    amountMoney: Money;
}

export const giftCardImportActivityDetails: Schema<GiftCardImportActivityDetails> = object(
    {
        amountMoney: ['money', lazy(() => moneySchema)],
    }
)

// OTHER
export interface GiftCardOtherActivityDetails {
    amountMoney: Money;
}

export const giftCardOtherActivityDetails: Schema<GiftCardOtherActivityDetails> = object(
    {
        amountMoney: ['money', lazy(() => moneySchema)],
    }
)
