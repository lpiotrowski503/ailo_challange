import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse, ILogin } from './admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _endPoints = {
    login: '/user/tokens',
    user: '/user/current'
  };

  constructor(private http: HttpClient) {}

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

  public userIsLogged() {}

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.getEndPoint(this._endPoints.user), {
      headers: new HttpHeaders({ Authorization: 'Token ' + this.getToken() })
    });
  }
}
