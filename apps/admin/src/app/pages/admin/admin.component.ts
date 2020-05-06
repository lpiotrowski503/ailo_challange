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
  public id: string;

  public user$: Observable<any>;

  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.admin.getUser();
    // this.user$.subscribe(data => console.log(data));
    this.getMerchants();

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

  // public getUser(): void {
  //   return this.admin.getUser().subscribe(user => {
  //     console.log(user);
  //   });
  // }

  public onLogout(): void {
    this.auth.logout();
  }

  public canShowBackIcon(): boolean {
    // console.log(this.router.url);
    return this.router.url !== '/';
    // return false;
  }

  public onCreateMerchant(): void {
    this.admin
      .createMerchant({
        name: 'Some Merchant',
        email: 'some-merchant@example.com',
        phone: '789123456'
      })
      .subscribe(user => {
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
