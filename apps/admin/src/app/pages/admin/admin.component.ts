import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.onLogin();
  }

  public onLogin(): void {
    this.adminService
      .login({
        email: 'lpiotrowski503@gmail.com',
        password: '6mBMN634hX'
      })
      .subscribe(response => {
        this.adminService.saveTokenToLocaleStore(response.token);
        this.getUser();
      });
  }

  public getUser(): void {
    this.adminService.getUser().subscribe(user => {
      console.log(user);
    });
  }

  public onLogout(): void {
    this.adminService.logout();
  }
}
