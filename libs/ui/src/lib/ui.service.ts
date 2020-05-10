import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IUiModalAction {
  display?: boolean;
  type?: string;
  message?: string;
  timeOut?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public action: Subject<IUiModalAction> = new Subject();

  public modal = {
    show: {
      success: (args: IUiModalAction): void => {
        this._prepareShow({ type: 'success', timeOut: 2000, ...args });
      },
      warning: (args: IUiModalAction): void => {
        this._prepareShow({ type: 'warning', ...args });
      },
      info: (args: IUiModalAction): void => {
        this._prepareShow({ type: 'info', ...args });
      },
      danger: (args: IUiModalAction): void => {
        this._prepareShow({ type: 'danger', ...args });
      }
    },
    close: (): void => {
      this.action.next({ display: false });
    }
  };

  constructor() {}

  private _prepareShow(args: IUiModalAction) {
    this.action.next({ display: true, ...args });
  }
}
