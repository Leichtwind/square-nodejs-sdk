import {lazy, object, optional, Schema, string} from "../schema";
import {
    giftCardActivateActivityDetails,
    GiftCardActivateActivityDetails, giftCardAdjustDecrementActivityDetails, giftCardAdjustIncrementActivityDetails,
    GiftCardAdjustIncrementActivityDetails, giftCardBlockActivityDetails,
    GiftCardBlockActivityDetails, giftCardClearBalanceActivityDetails,
    GiftCardClearBalanceActivityDetails, giftCardDeactivateActivityDetails,
    GiftCardDeactivateActivityDetails, giftCardImportActivityDetails,
    GiftCardImportActivityDetails, giftCardLoadActivityDetails,
    GiftCardLoadActivityDetails, giftCardOtherActivityDetails,
    GiftCardOtherActivityDetails, giftCardRedeemActivityDetails,
    GiftCardRedeemActivityDetails, giftCardRefundActivityDetails,
    GiftCardRefundActivityDetails, giftCardUnblockActivityDetails,
    GiftCardUnblockActivityDetails, giftCardUnlinkedActivityDetails,
    GiftCardUnlinkedActivityDetails
} from "./giftCardActivityDetails";
import {Money, moneySchema} from "./money";

export enum GiftCardActivityTypeEnum {
    ACTIVATE = 'ACTIVATE',
    LOAD = 'LOAD',
    REDEEM = 'REDEEM',
    CLEAR_BALANCE = 'CLEAR_BALANCE',
    DEACTIVATE = 'DEACTIVATE',
    ADJUST_INCREMENT = 'ADJUST_INCREMENT',
    ADJUST_DECREMENT = 'ADJUST_DECREMENT',
}

export interface GiftCardActivity {
    id?: string;
    type: string;
    giftCardId: string;
    giftCardGan?: string;
    locationId: string;
    giftcardBalanceMoney?: Money;
    activateActivityDetails?: GiftCardActivateActivityDetails;
    loadActivityDetails?: GiftCardLoadActivityDetails;
    clearBalanceActivityDetails?: GiftCardClearBalanceActivityDetails;
    deactivateActivityDetails?: GiftCardDeactivateActivityDetails;
    redeemActivityDetails?: GiftCardRedeemActivityDetails;
    refundActivityDetails?: GiftCardRefundActivityDetails;
    unlinkedActivityDetails?: GiftCardUnlinkedActivityDetails;
    adjustIncrementActivityDetails?: GiftCardAdjustIncrementActivityDetails;
    adjustDecrementActivityDetails?: GiftCardAdjustIncrementActivityDetails;
    blockActivityDetails?: GiftCardBlockActivityDetails;
    unblockActivityDetails?: GiftCardUnblockActivityDetails;
    importActivityDetails?: GiftCardImportActivityDetails;
    otherActivityDetails?: GiftCardOtherActivityDetails;
    createdAt?: string;
}

export const giftCardActivitySchema: Schema<GiftCardActivity> = object(
    {
        id: ['id', optional(string())],
        type: ['type', string()],
        giftCardId: ['giftcard_id', string()],
        giftCardGan: ['giftcard_gan', optional(string())],
        locationId: ['location_id', string()],
        giftcardBalanceMoney: ['giftcard_balance_money', optional(lazy(() => moneySchema))],
        activateActivityDetails: ['activate_activity_details', optional(lazy(() => giftCardActivateActivityDetails))],
        loadActivityDetails: ['load_activity_details', optional(lazy(() => giftCardLoadActivityDetails))],
        clearBalanceActivityDetails: ['clear_balance_activity_details', optional(lazy(() => giftCardClearBalanceActivityDetails))],
        deactivateActivityDetails: ['deactivate_activity_details', optional(lazy(() => giftCardDeactivateActivityDetails))],
        redeemActivityDetails: ['redeem_activity_details', optional(lazy(() => giftCardRedeemActivityDetails))],
        refundActivityDetails: ['refund_activity_details', optional(lazy(() => giftCardRefundActivityDetails))],
        unlinkedActivityDetails: ['unlinked_activity_details', optional(lazy(() => giftCardUnlinkedActivityDetails))],
        adjustIncrementActivityDetails: ['adjust_increment_activity_details', optional(lazy(() => giftCardAdjustIncrementActivityDetails))],
        adjustDecrementActivityDetails: ['adjust_decrement_activity_details', optional(lazy(() => giftCardAdjustDecrementActivityDetails))],
        blockActivityDetails: ['block_activity_details', optional(lazy(() => giftCardBlockActivityDetails))],
        unblockActivityDetails: ['unblock_activity_details', optional(lazy(() => giftCardUnblockActivityDetails))],
        importActivityDetails: ['import_activity_details', optional(lazy(() => giftCardImportActivityDetails))],
        otherActivityDetails: ['other_activity_details', optional(lazy(() => giftCardOtherActivityDetails))],
        createdAt: ['created_at', optional(string())],
    }
)
