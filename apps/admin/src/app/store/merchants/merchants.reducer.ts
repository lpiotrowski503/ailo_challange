import {
  IGetMerchantsResponse,
  IMerchant
} from './../../pages/admin/admin.interface';
import * as MerchantsAction from './merchants.actions';

const initialState: IMerchant[] = [];

export function merchantsReducer(
  state: IMerchant[] = initialState,
  action: MerchantsAction.Actions
): IMerchant[] {
  switch (action.type) {
    case MerchantsAction.MerchantsActionTypes.LOAD_METCHANTS_SUCCESS:
      state = [...action.merchants];
      return state;

    default:
      return state;
  }
}
