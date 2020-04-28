export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IGetUserResponse {
  id: string,
  email: string,
  manager: {
    id: string,
    organization: string
  }
}

export interface ICreateMerchantResponse {
  id: string,
  password: string
}

export interface IMerchant {
  id: string,
  name: string,
  phone: string,
  email: string
}

export interface IGetMerchantsResponse {
  [index: number]: IMerchant;
  length: number;
}

export interface IGetMerchantResponse {
  id: string,
  name: string,
  phone: string,
  user: {
    id: string,
    email: string

  }
}

export interface IUpdateMerchantPasswordPayload {
  password: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IUpdateMerchantPasswordResponse extends IUpdateMerchantPasswordPayload {
}