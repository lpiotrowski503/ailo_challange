import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

const components = [LoginComponent];

@NgModule({
  declarations: [...components],
  imports: [AuthRoutingModule, CoreModule, SharedModule]
})
export class AuthModule { }
