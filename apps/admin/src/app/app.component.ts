import { UiService } from './../../../../libs/ui/src/lib/ui.service';
import { EventBusService } from '@core/services/event-bus.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private eventBus: EventBusService, private uiService: UiService) {
    this.eventBus.on('success').subscribe(success => {
      this.uiService.modal.show.success({ message: success });
    });

    this.eventBus.on('warning').subscribe(warning => {
      this.uiService.modal.show.warning({ message: warning });
    });

    this.eventBus.on('danger').subscribe(danger => {
      this.uiService.modal.show.danger({ message: danger });
    });
  }
}
