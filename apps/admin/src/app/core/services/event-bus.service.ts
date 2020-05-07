import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface IEmitEvent {
  chanel: string;
  value?: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public subject = new Subject<any>();

  constructor() {}

  on(event: string): Observable<any> {
    return this.subject.pipe(
      filter((e: IEmitEvent) => e.chanel === event),
      map((e: IEmitEvent) => e.value)
    );
  }

  emit(event: IEmitEvent): void {
    this.subject.next(event);
  }
}
