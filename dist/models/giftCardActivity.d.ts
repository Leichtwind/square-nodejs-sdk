import { Schema } from "../schema";
import { GiftCardActivateActivityDetails, GiftCardAdjustIncrementActivityDetails, GiftCardBlockActivityDetails, GiftCardClearBalanceActivityDetails, GiftCardDeactivateActivityDetails, GiftCardImportActivityDetails, GiftCardLoadActivityDetails, GiftCardOtherActivityDetails, GiftCardRedeemActivityDetails, GiftCardRefundActivityDetails, GiftCardUnblockActivityDetails, GiftCardUnlinkedActivityDetails } from "./giftCardActivityDetails";
import { Money } from "./money";
export declare enum GiftCardActivityTypeEnum {
    ACTIVATE = "ACTIVATE",
    LOAD = "LOAD",
    REDEEM = "REDEEM",
    CLEAR_BALANCE = "CLEAR_BALANCE",
    DEACTIVATE = "DEACTIVATE",
    ADJUST_INCREMENT = "ADJUST_INCREMENT",
    ADJUST_DECREMENT = "ADJUST_DECREMENT"
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
export declare const giftCardActivitySchema: Schema<GiftCardActivity>;
