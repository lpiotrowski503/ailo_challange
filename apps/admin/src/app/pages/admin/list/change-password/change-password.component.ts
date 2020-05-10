import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { patterns } from '@utils/utils';
import { EventBusService } from '@core/services/event-bus.service';
import { messages } from '@core/config/messages';

@Component({
  selector: 'nx-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
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

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router: Router,
    private eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.admin.getMerchant(params['id']).subscribe(merchant => {
        this.id = params['id'];
      });
    });
  }

  public onChangePassword(): void {
    this.admin
      .updateMerchantPassword(this.id, this.changePasswordForm.value)
      .subscribe(() => {
        this.eventBus.emit({
          chanel: 'success',
          value: this._messages.success.changePassword
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      });
  }
}
