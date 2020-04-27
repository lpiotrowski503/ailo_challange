import { NgModule } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ContentComponent } from './layouts/content/content.component';

const components = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  ContentComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
