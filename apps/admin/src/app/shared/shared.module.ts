import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@libs/ui/src/lib/ui.module';

const modules = [CommonModule, UiModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
