import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CreateGiftCardRequest } from '../models/createGiftCardRequest';
import { CreateGiftCardResponse } from '../models/createGiftCardResponse';
import { GiftCardActivityRequest } from '../models/giftCardActivityRequest';
import { GiftCardActivityResponse } from '../models/giftCardActivityResponse';
import { ListGiftCardActivityRequest } from '../models/listGiftCardActivityRequest';
import { ListGiftCardActivityResponse } from '../models/listGiftCardActivityResponse';
import { RetrieveGiftCardFromGanRequest } from '../models/retrieveGiftCardFromGanRequest';
import { RetrieveGiftCardFromGanResponse } from '../models/retrieveGiftCardFromGanResponse';
import { RetrieveGiftCardFromNonceRequest } from '../models/retrieveGiftCardFromNonceRequest';
import { RetrieveGiftCardFromNonceResponse } from '../models/retrieveGiftCardFromNonceResponse';
import { RetrieveGiftCardResponse } from '../models/retrieveGiftCardResponse';
import { BaseApi } from './baseApi';
export declare class GiftCardsApi extends BaseApi {
    createGiftCard(body: CreateGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateGiftCardResponse>>;
    activateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    deactivateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    clearGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    adjustGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    retrieveGiftCard(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardResponse>>;
    retrieveGiftCardFromGan(body: RetrieveGiftCardFromGanRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromGanResponse>>;
    retrieveGiftCardFromNonce(body: RetrieveGiftCardFromNonceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>>;
    listGiftCardActivities(body: ListGiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<ListGiftCardActivityResponse>>;
    private giftCardActivityRequest;
}
