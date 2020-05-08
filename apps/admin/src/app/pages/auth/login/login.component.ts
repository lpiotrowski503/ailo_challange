import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { patterns } from '@utils/utils';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public controls = {
    email: new FormControl('', [
      Validators.pattern(patterns.email),
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.pattern(patterns.password),
      Validators.required
    ])
  };

  public loginForm = new FormGroup(this.controls);

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.getToken()) this.router.navigate(['/']);
  }

  public onLogin(): void {
    this.auth.login(this.loginForm.value).subscribe(response => {
      this.auth.saveTokenToLocaleStore(response.token);
      this.router.navigate(['/']);
    });
  }
}
