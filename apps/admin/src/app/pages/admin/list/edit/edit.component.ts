import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { EventBusService } from 'src/app/core/services/event-bus.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'nx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
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

  public id: string;

  public editForm: FormGroup = new FormGroup(this.controls);

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.admin.getMerchant(params['id']).subscribe(merchant => {
        this.id = params['id'];
        Object.keys(merchant).forEach(key => {
          if (this.controls[key]) {
            this.controls[key].patchValue(merchant[key]);
          }
        });
      });
    });
  }

  public onEdit(): void {
    this.admin.updateMerchant(this.id, this.editForm.value).subscribe(() => {
      this.eventBus.emit({
        chanel: 'update list'
      });
    });
  }
}
