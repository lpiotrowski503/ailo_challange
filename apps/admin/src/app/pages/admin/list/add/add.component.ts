import { RoutingService } from './../../../../core/services/routing.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { EventBusService } from '@core/services/event-bus.service';
import { patterns } from '@utils/utils';
import { messages } from '@core/config/messages';
import { slideRight } from '@core/animations/slide-right.animations';

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
  private _messages = messages;
  public display = true;

  constructor(
    private admin: AdminService,
    private eventBus: EventBusService,
    private routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.routing.changePage.subscribe(state => (this.display = !state));
  }

  public onAdd(): void {
    this.admin.createMerchant(this.addForm.value).subscribe(() => {
      this.display = false;
      this.eventBus.emit({
        chanel: 'success',
        value: this._messages.success.add
      });
      this.eventBus.emit({
        chanel: 'update list'
      });
    });
  }
}
