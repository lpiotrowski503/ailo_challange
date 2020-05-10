import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFlexRowComponent } from './ui-flex-row/ui-flex-row.component';
import { UiFlexColComponent } from './ui-flex-col/ui-flex-col.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiPopupComponent } from './ui-popup/ui-popup.component';

const components = [UiFlexRowComponent, UiFlexColComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components, UiModalComponent, UiPopupComponent],
  exports: [...components, UiModalComponent, UiPopupComponent]
})
export class UiModule {}
