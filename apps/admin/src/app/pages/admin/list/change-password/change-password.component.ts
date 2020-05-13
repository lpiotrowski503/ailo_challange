import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { patterns } from '@utils/utils';
import { EventBusService } from '@core/services/event-bus.service';
import { messages } from '@core/config/messages';
import { slideRight } from '@core/animations/slide-right.animations';
import { RoutingService } from '@core/services/routing.service';

@Component({
  selector: 'nx-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass'],
  animations: [slideRight]
})
export class ChangePasswordComponent implements OnInit {
  public controls = {
    password: new FormControl('', [
      Validators.pattern(patterns.password),
      Validators.required
    ])
  };
  public id: string;
  public changePasswordForm: FormGroup = new FormGroup(this.controls);
  private _messages = messages;
  public display = true;

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private eventBus: EventBusService,
    private routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.admin.getMerchant(params['id']).subscribe(merchant => {
        this.id = params['id'];
      });
    });

    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onChangePassword(): void {
    this.admin
      .updateMerchantPassword(this.id, this.changePasswordForm.value)
      .subscribe(() => {
        this.display = false;
        this.eventBus.emit({
          chanel: 'success',
          value: this._messages.success.changePassword
        });
        this.eventBus.emit({
          chanel: 'change_page',
          value: '/'
        });
      });
  }
}
