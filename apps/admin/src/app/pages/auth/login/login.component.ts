import { messages } from '@core/config/messages';
import { EventBusService } from '@core/services/event-bus.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { patterns } from '@utils/utils';
import { RoutingService } from '@core/services/routing.service';
import { opacity } from '@core/animations/opacity.animations';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [opacity]
})
export class LoginComponent implements OnInit {
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
  private _messages = messages;
  public display = true;

  constructor(
    private auth: AuthService,
    private eventBus: EventBusService,
    private routing: RoutingService
  ) {
    if (this.auth.getToken()) {
      this.eventBus.emit({
        chanel: 'change_page',
        value: '/'
      });
    }
  }

  ngOnInit() {
    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onLogin(): void {
    this.auth.login(this.loginForm.value).subscribe(response => {
      this.auth.saveTokenToLocaleStore(response.token);
      this.eventBus.emit({
        chanel: 'success',
        value: this._messages.success.login
      });
      this.eventBus.emit({
        chanel: 'change_page',
        value: '/'
      });
    });
  }
}
