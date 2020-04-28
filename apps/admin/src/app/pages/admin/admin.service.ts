import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse, ILogin, IGetUserResponse, ICreateMerchantResponse, IGetMerchantsResponse, IGetMerchantResponse, IUpdateMerchantPasswordResponse, IUpdateMerchantPasswordPayload } from './admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _endPoints = {
    login: '/user/tokens',
    user: '/user/current',
    merchants: '/manager/merchants'
  };

  constructor(private http: HttpClient) { }

  public tokenHeader() {
    return {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.getToken()}` })
    }
  }

  public getEndPoint(endPoint: any): string {
    return `${environment.api}${endPoint}`;
  }

  public login(payload: ILogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      this.getEndPoint(this._endPoints.login),
      payload
    );
  }

  public saveTokenToLocaleStore(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  public userIsLogged(): boolean {
    return localStorage.getItem('token') ? true : false
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(this.getEndPoint(this._endPoints.user), this.tokenHeader());
  }

  public createMerchant(payload: any): Observable<ICreateMerchantResponse> {
    return this.http.post<ICreateMerchantResponse>(this.getEndPoint(this._endPoints.merchants), payload, this.tokenHeader())
  }

  public getMerchants(): Observable<IGetMerchantsResponse> {
    return this.http.get<IGetMerchantsResponse>(this.getEndPoint(this._endPoints.merchants), this.tokenHeader())
  }

  public getMerchant(id: string): Observable<IGetMerchantResponse> {
    return this.http.get<IGetMerchantResponse>(`${this.getEndPoint(this._endPoints.merchants)}/${id}`, this.tokenHeader())
  }

  public updateMerchant(id: string, payload: any): Observable<null> {
    return this.http.put<null>(`${this.getEndPoint(this._endPoints.merchants)}/${id}`, payload, this.tokenHeader())
  }

  public updateMerchantPassword(id: string, payload: IUpdateMerchantPasswordPayload): Observable<IUpdateMerchantPasswordResponse> {
    return this.http.put<IUpdateMerchantPasswordResponse>(`${this.getEndPoint(this._endPoints.merchants)}/${id}/password`, payload, this.tokenHeader())
  }

  public deleteMerchant(id: string): Observable<null> {
    return this.http.delete<null>(`${this.getEndPoint(this._endPoints.merchants)}/${id}`, this.tokenHeader())
  }
}
