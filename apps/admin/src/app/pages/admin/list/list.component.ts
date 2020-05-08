import { AdminService } from './../admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '@core/services/event-bus.service';
import { Router } from '@angular/router';
import { IGetMerchantsResponse } from '../admin.interface';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public merchants$: Observable<IGetMerchantsResponse>;

  constructor(
    private admin: AdminService,
    private router: Router,
    private eventBus: EventBusService
  ) {
    this.merchants$ = this.admin.getMerchants();
    this.eventBus.on('update list').subscribe(() => {
      this.merchants$ = this.admin.getMerchants();
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}

  public onRemove(id: string): void {
    this.admin.deleteMerchant(id).subscribe(() => {
      this.merchants$ = this.admin.getMerchants();
      this.router.navigate(['/']);
    });
  }
}
