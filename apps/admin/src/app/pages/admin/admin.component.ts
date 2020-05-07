import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public user$: Observable<any>;

  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.admin.getUser();
  }

  public onLogout(): void {
    this.auth.logout();
  }

  public canShowBackIcon(): boolean {
    return this.router.url !== '/';
  }
}
