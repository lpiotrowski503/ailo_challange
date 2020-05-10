import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUiModalAction } from '../ui.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ui-popup',
  templateUrl: './ui-popup.component.html',
  styleUrls: ['./ui-popup.component.sass']
})
export class UiPopupComponent implements OnInit {
  @Input() public data: IUiModalAction;
  @Output() public event: EventEmitter<{ close: boolean }> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.data.timeOut) {
      setTimeout(() => {
        this.onClose();
      }, this.data.timeOut);
    }
  }

  public onClose(): void {
    this.event.emit({ close: true });
  }
}
