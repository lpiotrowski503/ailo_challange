import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@libs/ui/src/lib/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [CommonModule, ReactiveFormsModule, UiModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
