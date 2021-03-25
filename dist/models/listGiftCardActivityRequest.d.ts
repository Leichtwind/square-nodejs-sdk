export interface ListGiftCardActivityRequest {
    giftCardId: string;
    type?: string;
    locationId?: string;
    beginTime?: string;
    endTime?: string;
    cursor?: string;
    sortOrder?: 'ASC' | 'DESC';
}
