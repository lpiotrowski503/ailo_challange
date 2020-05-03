import { AuthService } from './../../auth/auth.service';
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
  private _endPoints = {
    user: '/user/current',
    merchants: '/manager/merchants'
  };

  constructor(private http: HttpClient, private auth: AuthService) {}

  public getEndPoint(endPoint: any): string {
    return `${environment.api}${endPoint}`;
  }

  public getUser(): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(
      this.getEndPoint(this._endPoints.user)
    );
  }

  public createMerchant(payload: any): Observable<ICreateMerchantResponse> {
    return this.http.post<ICreateMerchantResponse>(
      this.getEndPoint(this._endPoints.merchants),
      payload
    );
  }

  public getMerchants(): Observable<IGetMerchantsResponse> {
    return this.http.get<IGetMerchantsResponse>(
      this.getEndPoint(this._endPoints.merchants)
    );
  }

  public getMerchant(id: string): Observable<IGetMerchantResponse> {
    return this.http.get<IGetMerchantResponse>(
      `${this.getEndPoint(this._endPoints.merchants)}/${id}`
    );
  }

  public updateMerchant(id: string, payload: any): Observable<null> {
    return this.http.put<null>(
      `${this.getEndPoint(this._endPoints.merchants)}/${id}`,
      payload
    );
  }

  public updateMerchantPassword(
    id: string,
    payload: IUpdateMerchantPasswordPayload
  ): Observable<IUpdateMerchantPasswordResponse> {
    return this.http.put<IUpdateMerchantPasswordResponse>(
      `${this.getEndPoint(this._endPoints.merchants)}/${id}/password`,
      payload
    );
  }

  public deleteMerchant(id: string): Observable<null> {
    return this.http.delete<null>(
      `${this.getEndPoint(this._endPoints.merchants)}/${id}`
    );
  }
}
