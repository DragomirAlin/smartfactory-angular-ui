/**
 * Smart Factory IoT
 * Smart Factory IoT
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Created } from '../model/created';
import { Data } from '../model/data';
import { Message } from '../model/message';
import { Response } from '../model/response';
import { Validation } from '../model/validation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

import {environment} from "../../../../environments/environment";

@Injectable()
export class AcquisitionService {

    protected basePath = environment.api;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * get all data
     * return a list of all data from db
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getData(observe?: 'body', reportProgress?: boolean): Observable<Array<Data>>;
    public getData(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Data>>>;
    public getData(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Data>>>;
    public getData(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Data>>('get',`${this.basePath}/acquisition/mqtt/data`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get all data by topic
     * return a list of all data by topic from db
     * @param topic
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataByTopic(topic: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Data>>;
    public getDataByTopic(topic: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Data>>>;
    public getDataByTopic(topic: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Data>>>;
    public getDataByTopic(topic: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (topic === null || topic === undefined) {
            throw new Error('Required parameter topic was null or undefined when calling getDataByTopic.');
        }

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Data>>('get',`${this.basePath}/acquisition/mqtt/data/${encodeURIComponent(String(topic))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * publish a message
     * publish a message
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publish(body: Message, observe?: 'body', reportProgress?: boolean): Observable<Created>;
    public publish(body: Message, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Created>>;
    public publish(body: Message, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Created>>;
    public publish(body: Message, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling publish.');
        }

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Created>('post',`${this.basePath}/acquisition/mqtt/publish`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * subscribe to a topic
     * subscribe topic
     * @param topic
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public subscribe(topic: string, observe?: 'body', reportProgress?: boolean): Observable<Created>;
    public subscribe(topic: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Created>>;
    public subscribe(topic: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Created>>;
    public subscribe(topic: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (topic === null || topic === undefined) {
            throw new Error('Required parameter topic was null or undefined when calling subscribe.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (topic !== undefined && topic !== null) {
            queryParameters = queryParameters.set('topic', <any>topic);
        }

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Created>('post',`${this.basePath}/acquisition/mqtt/subscribe`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * test endpoint
     * test endpoint
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAcquisition(observe?: 'body', reportProgress?: boolean): Observable<Response>;
    public testAcquisition(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Response>>;
    public testAcquisition(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Response>>;
    public testAcquisition(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Response>('get',`${this.basePath}/acquisition/mqtt/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * unsubscribe to a topic
     * unubscribe topic
     * @param topic
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unsubscribe(topic: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unsubscribe(topic: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unsubscribe(topic: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unsubscribe(topic: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (topic === null || topic === undefined) {
            throw new Error('Required parameter topic was null or undefined when calling unsubscribe.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (topic !== undefined && topic !== null) {
            queryParameters = queryParameters.set('topic', <any>topic);
        }

        let headers = this.defaultHeaders;

        // authentication (oAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/acquisition/mqtt/unsubscribe`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
