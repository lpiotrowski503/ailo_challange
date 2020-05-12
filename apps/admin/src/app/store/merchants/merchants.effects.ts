import { IMerchant } from './../../pages/admin/admin.interface';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AdminService } from './../../pages/admin/admin.service';
import * as MerchantsAction from './merchants.actions';
import { LoadMerchantsSuccess, LoadMerchantsError } from './merchants.actions';

@Injectable({ providedIn: 'root' })
export class MerchantsEffects {
  constructor(private actions$: Actions, private admin: AdminService) {}

  @Effect()
  LOAD_METCHANTS = this.actions$.pipe(
    ofType(MerchantsAction.MerchantsActionTypes.LOAD_METCHANTS),
    switchMap(() =>
      this.admin.getMerchants().pipe(
        map((merchants: IMerchant[]) => new LoadMerchantsSuccess(merchants)),
        catchError((error: any) => of(new LoadMerchantsError(error)))
      )
    )
  );
}
