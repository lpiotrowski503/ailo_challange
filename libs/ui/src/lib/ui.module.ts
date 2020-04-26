import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFlexRowComponent } from './ui-flex-row/ui-flex-row.component';
import { UiFlexColComponent } from './ui-flex-col/ui-flex-col.component';

const components = [UiFlexRowComponent, UiFlexColComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components]
})
export class UiModule {}
