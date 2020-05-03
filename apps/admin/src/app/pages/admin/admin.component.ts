import { AdminService } from './admin.service'
import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/auth/auth.service'

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public id: string

  constructor(private admin: AdminService, private auth: AuthService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.onLogout()
    // }, 2000);


    // this.onLogin();

    // setTimeout(() => {
    //   this.getUser();
    // }, 1000);


    // setTimeout(() => {
    //   this.getMerchants();
    // }, 2000);

    // setTimeout(() => {
    //   this.onCreateMerchant();
    // }, 3000);

    // setTimeout(() => {
    //   this.updateMerchant(this.id, {
    //     name: "Some Merchant3",
    //     email: "some-merchant3@example.com",
    //     phone: "111111111"
    //   })
    // }, 4000);

    // setTimeout(() => {
    //   this.updateMerchantPassword(this.id, {
    //     password: 'updated'
    //   }
    //   )
    // }, 5000);

    // setTimeout(() => {
    //   this.onDeleteMerchant(this.id)
    // }, 6000);
  }

  // public onLogin(): void {
  //   this.adminService
  //     .login({
  //       email: 'lpiotrowski503@gmail.com',
  //       password: '6mBMN634hX'
  //     })
  //     .subscribe(response => {
  //       this.adminService.saveTokenToLocaleStore(response.token);
  //     });
  // }

  public getUser(): void {
    this.admin.getUser().subscribe(user => {
      console.log(user);
    });
  }

  public onLogout(): void {
    this.auth.logout();
  }

  public onCreateMerchant(): void {
    this.admin.createMerchant({
      name: "Some Merchant",
      email: "some-merchant@example.com",
      phone: "789123456"
    }).subscribe(user => {
      console.log(user);
      this.getMerchants();
    });
  }

  public getMerchants(): void {
    this.admin.getMerchants().subscribe(users => {
      console.log('getMerchants', users);
      if (users.length) {
        this.id = users[0].id;
      }
    });
  }

  public updateMerchant(id: string, payload: any): void {
    this.admin.updateMerchant(id, payload).subscribe(response => {
      this.getMerchants();
      console.log('updateMerchant', response);
    });
  }

  public updateMerchantPassword(id: string, payload: any): void {
    this.admin.updateMerchantPassword(id, payload).subscribe(response => {
      this.getMerchants();
      console.log('updateMerchantPassword', response);
    });
  }

  public onDeleteMerchant(id: string): void {
    this.admin.deleteMerchant(id).subscribe(response => {
      this.getMerchants();
      console.log('onDeleteMerchant', response);
    });
  }

}
