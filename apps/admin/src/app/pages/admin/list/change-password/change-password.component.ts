import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { patterns } from '@utils/utils';

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

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router: Router
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
      .subscribe(password => {
        console.log(password);
        this.router.navigate(['/']);
      });
  }
}
