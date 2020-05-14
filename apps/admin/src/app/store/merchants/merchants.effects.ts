import {
  IMerchant,
  ICreateMerchantResponse
} from './../../pages/admin/admin.interface';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AdminService } from './../../pages/admin/admin.service';
import * as MerchantsAction from './merchants.actions';
import {
  LoadMerchantsSuccess,
  LoadMerchantsError,
  AddMerchantSuccess,
  AddMerchantError,
  AddMerchant,
  EditMerchant,
  ChangePassword,
  EditMerchantError,
  EditMerchantSuccess,
  ChangePasswordError,
  ChangePasswordSuccess,
  DeleteMerchant,
  DeleteMerchantSuccess,
  DeleteMerchantError
} from './merchants.actions';
import { EventBusService } from '@core/services/event-bus.service';
import { messages } from '@core/config/messages';

@Injectable({ providedIn: 'root' })
export class MerchantsEffects {
  constructor(
    private actions$: Actions,
    private admin: AdminService,
    private eventBus: EventBusService
  ) {}

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

  @Effect()
  ADD_METCHANT = this.actions$.pipe(
    ofType(MerchantsAction.MerchantsActionTypes.ADD_METCHANT),
    switchMap((action: AddMerchant) =>
      this.admin.createMerchant(action.payload).pipe(
        map((response: ICreateMerchantResponse) => {
          this.eventBus.emit({
            chanel: 'success',
            value: messages.success.add
          });
          this.eventBus.emit({
            chanel: 'update list'
          });
          return new AddMerchantSuccess(response);
        }),
        catchError((error: any) => of(new AddMerchantError(error)))
      )
    )
  );

  @Effect()
  EDIT_METCHANT = this.actions$.pipe(
    ofType(MerchantsAction.MerchantsActionTypes.EDIT_METCHANT),
    switchMap((action: EditMerchant) =>
      this.admin.updateMerchant(action.id, action.payload).pipe(
        map((response: ICreateMerchantResponse) => {
          this.eventBus.emit({
            chanel: 'success',
            value: messages.success.edit
          });
          this.eventBus.emit({
            chanel: 'update list'
          });
          return new EditMerchantSuccess(response);
        }),
        catchError((error: any) => of(new EditMerchantError(error)))
      )
    )
  );

  @Effect()
  CHANGE_PASSWORD_METCHANT = this.actions$.pipe(
    ofType(MerchantsAction.MerchantsActionTypes.CHANGE_PASSWORD_METCHANT),
    switchMap((action: ChangePassword) =>
      this.admin.updateMerchantPassword(action.id, action.payload).pipe(
        map((response: ICreateMerchantResponse) => {
          this.eventBus.emit({
            chanel: 'success',
            value: messages.success.changePassword
          });
          this.eventBus.emit({
            chanel: 'change_page',
            value: '/'
          });
          return new ChangePasswordSuccess(response);
        }),
        catchError((error: any) => of(new ChangePasswordError(error)))
      )
    )
  );

  @Effect()
  DELETE_METCHANT = this.actions$.pipe(
    ofType(MerchantsAction.MerchantsActionTypes.DELETE_METCHANT),
    switchMap((action: DeleteMerchant) =>
      this.admin.deleteMerchant(action.id).pipe(
        map((response: null) => {
          this.eventBus.emit({
            chanel: 'success',
            value: messages.success.delete
          });
          this.eventBus.emit({
            chanel: 'change_page',
            value: '/'
          });
          this.eventBus.emit({
            chanel: 'update list'
          });
          return new DeleteMerchantSuccess(response);
        }),
        catchError((error: any) => of(new DeleteMerchantError(error)))
      )
    )
  );
}
