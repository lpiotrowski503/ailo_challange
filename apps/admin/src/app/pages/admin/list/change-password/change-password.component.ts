import { ChangePassword } from './../../../../store/merchants/merchants.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { patterns } from '@utils/utils';
import { slideRight } from '@core/animations/slide-right.animations';
import { RoutingService } from '@core/services/routing.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

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
  public display = true;

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private routing: RoutingService,
    private store: Store<AppState>
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
    this.store.dispatch(
      new ChangePassword(this.id, this.changePasswordForm.value)
    );
  }
}
