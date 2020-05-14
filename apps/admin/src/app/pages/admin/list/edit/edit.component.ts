import { EditMerchant } from './../../../../store/merchants/merchants.actions';
import { AppState } from './../../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { EventBusService } from '@core/services/event-bus.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { patterns } from '@utils/utils';
import { RoutingService } from '@core/services/routing.service';
import { slideRight } from '@core/animations/slide-right.animations';
import { Store } from '@ngrx/store';

@Component({
  selector: 'nx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
  animations: [slideRight]
})
export class EditComponent implements OnInit {
  public controls = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(patterns.email),
      Validators.required
    ]),
    phone: new FormControl('', [Validators.required])
  };
  public id: string;
  public editForm: FormGroup = new FormGroup(this.controls);
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
        Object.keys(merchant).forEach(key => {
          if (this.controls[key]) {
            this.controls[key].patchValue(merchant[key]);
          }
        });
      });
    });
    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onEdit(): void {
    this.store.dispatch(new EditMerchant(this.id, this.editForm.value));
  }
}
