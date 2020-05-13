import { LoadMerchants } from './../../store/merchants/merchants.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IGetUserResponse } from './admin.interface';
import { messages } from '@core/config/messages';
import { EventBusService } from '@core/services/event-bus.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { opacity } from '@core/animations/opacity.animations';
import { RoutingService } from '@core/services/routing.service';

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  animations: [opacity]
})
export class AdminComponent implements OnInit {
  public user$: Observable<IGetUserResponse>;
  private _messages = messages;
  public display = true;

  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private router: Router,
    private eventBus: EventBusService,
    private store: Store<AppState>,
    private routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.user$ = this.admin.getUser();
    this.store.dispatch(new LoadMerchants());
    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onLogout(): void {
    this.eventBus.emit({
      chanel: 'success',
      value: this._messages.success.logout
    });
    this.auth.logout();
    this.eventBus.emit({
      chanel: 'change_page',
      value: '/login'
    });
  }

  public canShowBackIcon(): boolean {
    return this.router.url !== '/';
  }

  public onBack(): void {
    this.eventBus.emit({
      chanel: 'change_page',
      value: '/'
    });
  }
}
