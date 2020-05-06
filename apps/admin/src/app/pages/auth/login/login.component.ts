import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  private _patterns = {
    email: /^([a-z\d.-_]+)@([a-z\d-_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^\w{6,72}$/
  };

  public controls = {
    email: new FormControl('', [
      Validators.pattern(this._patterns.email),
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.pattern(this._patterns.password),
      Validators.required
    ])
  };

  public loginForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.getToken()) {
      this.router.navigate(['/']);
    }

    this.loginForm = new FormGroup(this.controls);
  }

  public onLogin(): void {
    this.auth.login(this.loginForm.value).subscribe(response => {
      this.auth.saveTokenToLocaleStore(response.token);
      this.router.navigate(['/']);
    });
  }
}
