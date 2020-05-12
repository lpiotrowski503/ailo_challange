import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { merchantsReducer } from './merchants/merchants.reducer';
import { MerchantsEffects } from './merchants/merchants.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgRxStoreModule.forRoot({
      merchants: merchantsReducer
    }),
    EffectsModule.forRoot([MerchantsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class StoreModule {}
