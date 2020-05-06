import { EditComponent } from './list/edit/edit.component';
import { AddComponent } from './list/add/add.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        children: [
          {
            path: 'add',
            component: AddComponent
          },
          {
            path: 'edit/:id',
            component: EditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
