import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxFormComponent } from './rx-form/rx-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RxFormComponent],
  exports: [RxFormComponent]
})
export class RxFormModule {}
