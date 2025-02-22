import { DeleteMerchant } from './../../../store/merchants/merchants.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '@core/services/event-bus.service';
import { IGetMerchantsResponse } from '../admin.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { LoadMerchants } from 'src/app/store/merchants/merchants.actions';
import { opacity } from '@core/animations/opacity.animations';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  animations: [opacity]
})
export class ListComponent implements OnInit {
  public merchants$: Observable<IGetMerchantsResponse>;

  constructor(
    private eventBus: EventBusService,
    private store: Store<AppState>
  ) {
    this.merchants$ = this.store.select('merchants');
    this.eventBus.on('update list').subscribe(() => {
      this.store.dispatch(new LoadMerchants());
      this.eventBus.emit({
        chanel: 'change_page',
        value: '/'
      });
    });
  }

  ngOnInit(): void {}

  public onChangePassword(id: string) {
    this.eventBus.emit({
      chanel: 'change_page',
      value: '/change-password/' + id
    });
  }

  public onEdit(id: string) {
    this.eventBus.emit({
      chanel: 'change_page',
      value: '/edit/' + id
    });
  }

  public onRemove(id: string): void {
    this.store.dispatch(new DeleteMerchant(id));
  }
}
