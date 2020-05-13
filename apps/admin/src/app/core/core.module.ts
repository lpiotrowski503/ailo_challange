import { NgModule } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { ContentComponent } from './layouts/content/content.component';

const components = [HeaderComponent, ContentComponent];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
