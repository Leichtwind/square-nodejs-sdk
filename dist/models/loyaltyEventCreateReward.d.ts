import { Schema } from '../schema';
/** Provides metadata when the event `type` is `CREATE_REWARD`. */
export interface LoyaltyEventCreateReward {
    /** The ID of the [loyalty program](#type-LoyaltyProgram). */
    loyaltyProgramId: string;
    /**
     * The Square-assigned ID of the created [loyalty reward](#type-LoyaltyReward).
     * This field is returned only if the event source is `LOYALTY_API`.
     */
    rewardId?: string;
    /** The loyalty points used to create the reward. */
    points: number;
}
export declare const loyaltyEventCreateRewardSchema: Schema<LoyaltyEventCreateReward>;
