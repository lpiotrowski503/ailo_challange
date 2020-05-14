import {
  IMerchant,
  ICreateMerchantPayload,
  ICreateMerchantResponse,
  IUpdateMerchantPayload,
  IUpdateMerchantPasswordPayload
} from './../../pages/admin/admin.interface';
import { Action } from '@ngrx/store';

export enum MerchantsActionTypes {
  LOAD_METCHANTS = '[METCHANTS] load',
  LOAD_METCHANTS_SUCCESS = '[METCHANTS] load success',
  LOAD_METCHANTS_ERROR = '[METCHANTS] load error',

  ADD_METCHANT = '[METCHANTS] add',
  ADD_METCHANT_SUCCESS = '[METCHANTS] add success',
  ADD_METCHANT_ERROR = '[METCHANTS] add error',

  EDIT_METCHANT = '[METCHANTS] edit',
  EDIT_METCHANT_SUCCESS = '[METCHANTS] edit success',
  EDIT_METCHANT_ERROR = '[METCHANTS] edit error',

  CHANGE_PASSWORD_METCHANT = '[METCHANTS] change password',
  CHANGE_PASSWORD_METCHANT_SUCCESS = '[METCHANTS] change password success',
  CHANGE_PASSWORD_METCHANT_ERROR = '[METCHANTS] change password error',

  DELETE_METCHANT = '[METCHANTS] delete',
  DELETE_METCHANT_SUCCESS = '[METCHANTS] delete success',
  DELETE_METCHANT_ERROR = '[METCHANTS] delete error'
}

export class LoadMerchants implements Action {
  readonly type = MerchantsActionTypes.LOAD_METCHANTS;
  constructor() {}
}

export class LoadMerchantsSuccess implements Action {
  readonly type = MerchantsActionTypes.LOAD_METCHANTS_SUCCESS;
  constructor(public merchants: IMerchant[]) {}
}

export class LoadMerchantsError implements Action {
  readonly type = MerchantsActionTypes.LOAD_METCHANTS_ERROR;
  constructor(public error: any) {}
}

export class AddMerchant implements Action {
  readonly type = MerchantsActionTypes.ADD_METCHANT;
  constructor(public payload: ICreateMerchantPayload) {}
}

export class AddMerchantSuccess implements Action {
  readonly type = MerchantsActionTypes.ADD_METCHANT_SUCCESS;
  constructor(public response: ICreateMerchantResponse) {}
}

export class AddMerchantError implements Action {
  readonly type = MerchantsActionTypes.ADD_METCHANT_ERROR;
  constructor(public error: any) {}
}

export class EditMerchant implements Action {
  readonly type = MerchantsActionTypes.EDIT_METCHANT;
  constructor(public id: string, public payload: IUpdateMerchantPayload) {}
}

export class EditMerchantSuccess implements Action {
  readonly type = MerchantsActionTypes.EDIT_METCHANT_SUCCESS;
  constructor(public response: ICreateMerchantResponse) {}
}

export class EditMerchantError implements Action {
  readonly type = MerchantsActionTypes.EDIT_METCHANT_ERROR;
  constructor(public error: any) {}
}

export class ChangePassword implements Action {
  readonly type = MerchantsActionTypes.CHANGE_PASSWORD_METCHANT;
  constructor(
    public id: string,
    public payload: IUpdateMerchantPasswordPayload
  ) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = MerchantsActionTypes.CHANGE_PASSWORD_METCHANT_SUCCESS;
  constructor(public response: ICreateMerchantResponse) {}
}

export class ChangePasswordError implements Action {
  readonly type = MerchantsActionTypes.CHANGE_PASSWORD_METCHANT_ERROR;
  constructor(public error: any) {}
}

export class DeleteMerchant implements Action {
  readonly type = MerchantsActionTypes.DELETE_METCHANT;
  constructor(public id: string) {}
}

export class DeleteMerchantSuccess implements Action {
  readonly type = MerchantsActionTypes.DELETE_METCHANT_SUCCESS;
  constructor(public response: null) {}
}

export class DeleteMerchantError implements Action {
  readonly type = MerchantsActionTypes.DELETE_METCHANT_ERROR;
  constructor(public error: any) {}
}

export type Actions =
  | LoadMerchants
  | LoadMerchantsSuccess
  | LoadMerchantsError
  | AddMerchant
  | AddMerchantSuccess
  | AddMerchantError
  | EditMerchant
  | EditMerchantSuccess
  | EditMerchantError
  | ChangePassword
  | ChangePasswordSuccess
  | ChangePasswordError
  | DeleteMerchant
  | DeleteMerchantSuccess
  | DeleteMerchantError;
