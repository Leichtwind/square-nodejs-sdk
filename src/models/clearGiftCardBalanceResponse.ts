import { object, Schema, lazy } from '../schema';
import { GiftCardActivity, giftCardActivitySchema } from './giftCardActivity';

export interface ClearGiftCardBalanceResponse {
  giftCardActivity: GiftCardActivity;
}

export const clearGiftCardBalanceResponseSchema: Schema<ClearGiftCardBalanceResponse> = object(
  {
    giftCardActivity: [
      'gift_card_activity',
      lazy(() => giftCardActivitySchema),
    ],
  }
);
