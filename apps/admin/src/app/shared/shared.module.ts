import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@libs/ui/src/lib/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RxFormModule } from '@libs/rx-form/src/lib/rx-form.module';

const modules = [CommonModule, ReactiveFormsModule, UiModule, RxFormModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
