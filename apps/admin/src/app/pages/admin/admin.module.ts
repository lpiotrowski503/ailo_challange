import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddComponent } from './list/add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './list/edit/edit.component';
import { ChangePasswordComponent } from './list/change-password/change-password.component';

const components = [
  AdminComponent,
  AddComponent,
  ListComponent,
  EditComponent,
  ChangePasswordComponent
];

@NgModule({
  declarations: [...components],
  imports: [AdminRoutingModule, CoreModule, SharedModule]
})
export class AdminModule {}
