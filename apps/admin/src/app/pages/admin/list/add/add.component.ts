import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  private _patterns = {
    email: /^([a-z\d.-_]+)@([a-z\d-_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  };

  public controls = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(this._patterns.email),
      Validators.required
    ]),
    phone: new FormControl('', [Validators.required])
  };

  public addForm: FormGroup = new FormGroup(this.controls);

  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit(): void {}

  public onAdd(): void {
    this.admin.createMerchant(this.addForm.value).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
