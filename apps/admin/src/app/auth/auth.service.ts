import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../pages/admin/admin.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _endPoints = {
    login: '/user/tokens'
  };

  constructor(private http: HttpClient, private router: Router) {}

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
    return localStorage.getItem('token') ? true : false;
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
