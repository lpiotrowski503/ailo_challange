import { RoutingService } from './core/services/routing.service';
import { Router } from '@angular/router';
import { UiService } from '@libs/ui/src/lib/ui.service';
import { EventBusService } from '@core/services/event-bus.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    private eventBus: EventBusService,
    private uiService: UiService,
    private router: Router,
    private routing: RoutingService
  ) {
    this.eventBus.on('success').subscribe(success => {
      this.uiService.modal.show.success({ message: success });
    });

    this.eventBus.on('warning').subscribe(warning => {
      this.uiService.modal.show.warning({ message: warning });
    });

    this.eventBus.on('danger').subscribe(danger => {
      this.uiService.modal.show.danger({ message: danger });
    });

    this.eventBus.on('change_page').subscribe(url => {
      this.routing.changePage.next(true);
      setTimeout(() => {
        this.router.navigate([url]);
        this.routing.changePage.next(false);
      }, 300);
    });
  }
}
