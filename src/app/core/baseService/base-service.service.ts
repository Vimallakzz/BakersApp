import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface IRequestOptions {
  url: string;
  body?: any;
  options?: IOptions;
  prependBaseUrl?: boolean;
  isNotify?: boolean;
  queryParams?: { [param: string]: any };
}

interface IOptions {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  observe?: 'body' | 'response' | 'events';
  params?: HttpParams | {
      [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
  withCredentials?: boolean;
}

interface ServiceRequest {
  get(options: IRequestOptions): Observable<any>;
  post(options: IRequestOptions): Observable<any>;
  put(options: IRequestOptions): Observable<any>;
  delete(options: IRequestOptions): Observable<any>;
}

/**
 * Base Service is the generic service class for all the API service classes.
 *
 * @author Ideas2it Team
 */
@Injectable()
export class BaseService implements ServiceRequest {
  private baseURL = environment.apiUrl;
  private defautHeaders = { 'Content-Type': 'application/json' };
  private defautOptions = { withCredentials: true };

  constructor(public http: HttpClient) {}

    setHttpHeader(httpheaders: HttpHeaders | {[header: string]: string | string[]} ) {
      let headers = new HttpHeaders({...this.defautHeaders, ...httpheaders});
      const token = sessionStorage.getItem('token');
      if (token) {
        headers =  headers.set('Authorization', token);
      }
      return headers;
    }

    public get({ url, queryParams, options = {}, isNotify = false, prependBaseUrl = true}: IRequestOptions): Observable<any> {
      if (prependBaseUrl) {
        url = `${this.baseURL}${url}`;
      }
      let params = new HttpParams();
      if (queryParams) {
        for(let key in queryParams) {
          params = params.set(key, queryParams[key]);
        }
      }
      options.headers = this.setHttpHeader(options.headers || {});
      options.headers['isNotify'] = isNotify;

      return this.http.get(url, {
        ...this.defautOptions,
        ...options,
        params: params,
        observe: options.observe as 'body',
        responseType: options.responseType as 'json',
      });
    }

    public post({ url, body,  queryParams, options = {}, isNotify = false, prependBaseUrl = true}: IRequestOptions): Observable<any>  {
      if (prependBaseUrl) {
        url = `${this.baseURL}${url}`;
      }
      let params = new HttpParams();
      if (queryParams) {
        for(let key in queryParams) {
          params = params.set(key, queryParams[key]);
        }
      }
      options.headers = this.setHttpHeader(options.headers || {});
      options.headers['isNotify'] = isNotify;

      return this.http.post(url, body, {
        ...this.defautOptions,
        ...options,
        params: params,
        observe: options.observe as 'body',
        responseType: options.responseType as 'json',
      });
    }


    protected upload({url, body}: IRequestOptions): Observable<Object> {
      url = `${this.baseURL}${url}`;
      return this.http.post(url, body, {
        withCredentials: true
      });
    }

    public put({ url, body, queryParams, options = {}, isNotify = false, prependBaseUrl = true}: IRequestOptions): Observable<any>  {
      if (prependBaseUrl) {
        url = `${this.baseURL}${url}`;
      }
      let params = new HttpParams();
      if (queryParams) {
        for(let key in queryParams) {
          params = params.set(key, queryParams[key]);
        }
      }
      options.headers = this.setHttpHeader(options.headers || {});
      options.headers['isNotify'] = isNotify;

      return this.http.put(url, body, {
        ...this.defautOptions,
        ...options,
        params: params,
        observe: options.observe as 'body',
        responseType: options.responseType as 'json',
      });
    }

    public delete({ url, body, queryParams, options = {}, isNotify = false, prependBaseUrl = true}: IRequestOptions): Observable<any>  {
      if (prependBaseUrl) {
        url = `${this.baseURL}${url}`;
      }
      let params = new HttpParams();
      if (queryParams) {
        for(let key in queryParams) {
          params = params.set(key, queryParams[key]);
        }
      }
      options.headers = this.setHttpHeader(options.headers || {});
      options.headers['isNotify'] = isNotify;

      return this.http.delete(url, {
        ...this.defautOptions,
        ...options,
        observe: options.observe as 'body',
        responseType: options.responseType as 'json',
      });
    }
}

