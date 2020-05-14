import { RoutingService } from '@core/services/routing.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { patterns } from '@utils/utils';
import { messages } from '@core/config/messages';
import { slideRight } from '@core/animations/slide-right.animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AddMerchant } from 'src/app/store/merchants/merchants.actions';

@Component({
  selector: 'nx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
  animations: [slideRight]
})
export class AddComponent implements OnInit {
  public controls = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(patterns.email),
      Validators.required
    ]),
    phone: new FormControl('', [Validators.required])
  };
  public addForm: FormGroup = new FormGroup(this.controls);
  public display = true;

  constructor(
    private routing: RoutingService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onAdd(): void {
    this.store.dispatch(new AddMerchant(this.addForm.value));
  }
}
