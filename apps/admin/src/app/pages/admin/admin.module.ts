import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

const components = [AdminComponent];

@NgModule({
  declarations: [...components],
  imports: [AdminRoutingModule, CoreModule, SharedModule]
})
export class AdminModule {}
