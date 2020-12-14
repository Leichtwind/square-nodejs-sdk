import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CreateGiftCardRequest, createGiftCardRequestSchema } from '../models/createGiftCardRequest';
import { CreateGiftCardResponse, createGiftCardResponseSchema } from '../models/createGiftCardResponse';
import { GiftCardActivityRequest, giftCardActivityRequestSchema } from '../models/giftCardActivityRequest';
import { GiftCardActivityResponse, giftCardActivityResponseSchema } from '../models/giftCardActivityResponse';
import { ListGiftCardActivityRequest } from '../models/listGiftCardActivityRequest';
import { ListGiftCardActivityResponse, listGiftCardActivityResponseSchema } from '../models/listGiftCardActivityResponse';
import { RetrieveGiftCardFromGanRequest, retrieveGiftCardFromGanRequestSchema } from '../models/retrieveGiftCardFromGanRequest';
import { RetrieveGiftCardFromGanResponse, retrieveGiftCardFromGanResponseSchema } from '../models/retrieveGiftCardFromGanResponse';
import { RetrieveGiftCardFromNonceRequest, retrieveGiftCardFromNonceRequestSchema } from '../models/retrieveGiftCardFromNonceRequest';
import { RetrieveGiftCardFromNonceResponse, retrieveGiftCardFromNonceResponseSchema } from '../models/retrieveGiftCardFromNonceResponse';
import { RetrieveGiftCardResponse, retrieveGiftCardResponseSchema } from '../models/retrieveGiftCardResponse';
import { optional, string } from '../schema';
import { BaseApi } from './baseApi';

export class GiftCardsApi extends BaseApi {
    createGiftCard(body: CreateGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateGiftCardResponse>> {
        const req = this.createRequest('POST', '/v2/giftcards');
        const mapped = req.prepareArgs({ body: [body, createGiftCardRequestSchema] });
        req.json(mapped.body);
        return req.callAsJson(createGiftCardResponseSchema, requestOptions);
    }

    activateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>> {
        return this.giftCardActivityRequest(body, requestOptions);
    }

    deactivateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>> {
        return this.giftCardActivityRequest(body, requestOptions);
    }

    clearGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>> {
        return this.giftCardActivityRequest(body, requestOptions);
    }

    adjustGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>> {
        return this.giftCardActivityRequest(body, requestOptions);
    }

    retrieveGiftCard(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardResponse>> {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath`/v2/giftcards/${mapped.id}`;
        return req.callAsJson(retrieveGiftCardResponseSchema, requestOptions);
    }

    retrieveGiftCardFromGan(body: RetrieveGiftCardFromGanRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromGanResponse>> {
        const req = this.createRequest('POST', '/v2/giftcards/from_gan');
        const mapped = req.prepareArgs({ body: [body, retrieveGiftCardFromGanRequestSchema] });
        req.json(mapped.body);
        return req.callAsJson(retrieveGiftCardFromGanResponseSchema, requestOptions);
    }

    retrieveGiftCardFromNonce(body: RetrieveGiftCardFromNonceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>> {
        const req = this.createRequest('POST', '/v2/giftcards/from_nonce');
        const mapped = req.prepareArgs({ body: [body, retrieveGiftCardFromNonceRequestSchema] });
        req.json(mapped.body);
        return req.callAsJson(retrieveGiftCardFromNonceResponseSchema, requestOptions);
    }

    listGiftCardActivities(body: ListGiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<ListGiftCardActivityResponse>> {
        const req = this.createRequest('GET', '/v2/giftcards/activities');

        const mapped = req.prepareArgs({
            giftCardId: [body.giftCardId, string()],
            type: [body.type, optional(string())],
            locationId: [body.type, optional(string())],
            beginTime: [body.beginTime, optional(string())],
            endTime: [body.endTime, optional(string())],
            cursor: [body.cursor, optional(string())],
            sortOrder: [body.sortOrder, optional(string())],
        });
        req.query('giftcard_id', mapped.giftCardId);
        req.query('type', mapped.type);
        req.query('location_id', mapped.locationId);
        req.query('begin_time', mapped.beginTime);
        req.query('end_time', mapped.endTime);
        req.query('cursor', mapped.cursor);
        req.query('sort_order', mapped.sortOrder || 'ASC');

        return req.callAsJson(listGiftCardActivityResponseSchema, requestOptions);
    }

    private giftCardActivityRequest(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>> {
        const req = this.createRequest('POST', '/v2/giftcards/activity');
        const mapped = req.prepareArgs({ body: [body, giftCardActivityRequestSchema] });
        req.json(mapped.body);
        return req.callAsJson(giftCardActivityResponseSchema, requestOptions);
    }
}
