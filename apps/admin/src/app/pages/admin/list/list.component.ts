import { AdminService } from './../admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '@core/services/event-bus.service';
import { Router } from '@angular/router';
import { IGetMerchantsResponse } from '../admin.interface';
import { messages } from '@core/config/messages';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { LoadMerchants } from 'src/app/store/merchants/merchants.actions';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public merchants$: Observable<IGetMerchantsResponse>;
  private _messages = messages;

  constructor(
    private admin: AdminService,
    private router: Router,
    private eventBus: EventBusService,
    private store: Store<AppState>
  ) {
    this.merchants$ = this.store.select('merchants');
    this.eventBus.on('update list').subscribe(() => {
      this.store.dispatch(new LoadMerchants());
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}

  public onRemove(id: string): void {
    this.admin.deleteMerchant(id).subscribe(() => {
      this.eventBus.emit({
        chanel: 'success',
        value: this._messages.success.delete
      });
      setTimeout(() => {
        this.store.dispatch(new LoadMerchants());
        this.router.navigate(['/']);
      }, 2000);
    });
  }
}
