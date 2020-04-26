import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ContentComponent } from './layouts/content/content.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent, FooterComponent, NavbarComponent, ContentComponent],
  imports: [CoreRoutingModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, NavbarComponent, ContentComponent]
})
export class CoreModule {}
