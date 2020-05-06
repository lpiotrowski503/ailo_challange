import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (this.auth.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
