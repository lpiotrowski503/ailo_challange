import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public id: string



  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.onLogin();

    setTimeout(() => {
      this.getUser();
    }, 1000);


    setTimeout(() => {
      this.getMerchants();
    }, 2000);

    setTimeout(() => {
      this.onCreateMerchant();
    }, 3000);

    setTimeout(() => {
      this.updateMerchant(this.id, {
        name: "Some Merchant3",
        email: "some-merchant3@example.com",
        phone: "111111111"
      })
    }, 4000);

    setTimeout(() => {
      this.updateMerchantPassword(this.id, {
        password: 'updated'
      }
      )
    }, 5000);

    setTimeout(() => {
      this.onDeleteMerchant(this.id)
    }, 6000);
  }

  public onLogin(): void {
    this.adminService
      .login({
        email: 'lpiotrowski503@gmail.com',
        password: '6mBMN634hX'
      })
      .subscribe(response => {
        this.adminService.saveTokenToLocaleStore(response.token);
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

  public onCreateMerchant(): void {
    this.adminService.createMerchant({
      name: "Some Merchant",
      email: "some-merchant@example.com",
      phone: "789123456"
    }).subscribe(user => {
      console.log(user);
      this.getMerchants();
    });
  }

  public getMerchants(): void {
    this.adminService.getMerchants().subscribe(users => {
      console.log('getMerchants', users);
      if (users.length) {
        this.id = users[0].id;
      }
    });
  }

  public updateMerchant(id: string, payload: any): void {
    this.adminService.updateMerchant(id, payload).subscribe(response => {
      this.getMerchants();
      console.log('updateMerchant', response);
    });
  }

  public updateMerchantPassword(id: string, payload: any): void {
    this.adminService.updateMerchantPassword(id, payload).subscribe(response => {
      this.getMerchants();
      console.log('updateMerchantPassword', response);
    });
  }

  public onDeleteMerchant(id: string): void {
    this.adminService.deleteMerchant(id).subscribe(response => {
      this.getMerchants();
      console.log('onDeleteMerchant', response);
    });
  }

}
