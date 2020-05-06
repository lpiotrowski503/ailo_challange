import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IGetUserResponse,
  ICreateMerchantResponse,
  IGetMerchantsResponse,
  IGetMerchantResponse,
  IUpdateMerchantPasswordResponse,
  IUpdateMerchantPasswordPayload
} from './admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public getEndPoint(endPoint: string): string {
    return `${environment.api}${environment[endPoint]}`;
  }

  public getUser(): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(this.getEndPoint('user'));
  }

  public createMerchant(payload: any): Observable<ICreateMerchantResponse> {
    return this.http.post<ICreateMerchantResponse>(
      this.getEndPoint('merchants'),
      payload
    );
  }

  public getMerchants(): Observable<IGetMerchantsResponse> {
    return this.http.get<IGetMerchantsResponse>(this.getEndPoint('merchants'));
  }

  public getMerchant(id: string): Observable<IGetMerchantResponse> {
    return this.http.get<IGetMerchantResponse>(
      `${this.getEndPoint('merchants')}/${id}`
    );
  }

  public updateMerchant(id: string, payload: any): Observable<null> {
    return this.http.put<null>(
      `${this.getEndPoint('merchants')}/${id}`,
      payload
    );
  }

  public updateMerchantPassword(
    id: string,
    payload: IUpdateMerchantPasswordPayload
  ): Observable<IUpdateMerchantPasswordResponse> {
    return this.http.put<IUpdateMerchantPasswordResponse>(
      `${this.getEndPoint('merchants')}/${id}/password`,
      payload
    );
  }

  public deleteMerchant(id: string): Observable<null> {
    return this.http.delete<null>(`${this.getEndPoint('merchants')}/${id}`);
  }
}
