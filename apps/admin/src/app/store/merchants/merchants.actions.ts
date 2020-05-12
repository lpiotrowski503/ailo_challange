import {
  IGetMerchantsResponse,
  IMerchant
} from './../../pages/admin/admin.interface';
import { Action } from '@ngrx/store';

export enum MerchantsActionTypes {
  LOAD_METCHANTS = '[METCHANTS] load',
  LOAD_METCHANTS_SUCCESS = '[METCHANTS] load success',
  LOAD_METCHANTS_ERROR = '[METCHANTS] load error'
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

export type Actions = LoadMerchants | LoadMerchantsSuccess | LoadMerchantsError;
