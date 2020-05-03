import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public test = {
    email: 'lpiotrowski503@gmail.com',
    password: '6mBMN634hX'
  }

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.getToken()) {
      this.router.navigate(['/'])
    }

    // setTimeout(() => {
    //   this.onLogin({
    //     email: 'lpiotrowski503@gmail.com',
    //     password: '6mBMN634hX'
    //   })
    // }, 2000);
  }

  public onLogin(payload: any): void {


    this.auth
      .login(payload)
      .subscribe(response => {
        this.auth.saveTokenToLocaleStore(response.token)
        this.router.navigate(['/'])
      }
      );
  }
}
