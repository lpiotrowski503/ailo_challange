import { UiService, IUiModalAction } from './../ui.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.sass']
})
export class UiModalComponent implements OnInit {
  public modal$: Observable<IUiModalAction>;

  constructor(private uiService: UiService) {
    this.modal$ = this.uiService.action;
    this.modal$.subscribe(data => {
      this._blueStrategy(data.display);
    });
  }

  ngOnInit() {}

  public onPopup(event: any): void {
    this.uiService.modal.close();
  }

  private _blueStrategy(state: boolean): void {
    state ? this._addBlur() : this._removeBlur();
  }

  private _addBlur() {
    const body = document.querySelector('body');
    body.classList.add('blur');
  }

  private _removeBlur() {
    const body = document.querySelector('body');
    body.classList.remove('blur');
  }
}
