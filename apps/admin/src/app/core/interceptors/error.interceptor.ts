import { EventBusService } from '@core/services/event-bus.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { errors } from '@core/config/errors';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private _errors = errors;

  constructor(private auth: AuthService, private eventBus: EventBusService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            //
            // ──────────────────────────────────────────────────────────── I ──────────
            //   :::::: F O R M   E R R O R : :  :   :    :     :        :          :
            // ──────────────────────────────────────────────────────────────────────
            //
            if (
              error.status === 400 &&
              error.error.status === 'body_validation_error'
            ) {
              this.eventBus.emit({
                chanel: 'warning',
                value: error.error.message
              });
            }
            //
            // ────────────────────────────────────────────────────────────── II ──────────
            //   :::::: M O D A L   E R R O R : :  :   :    :     :        :          :
            // ────────────────────────────────────────────────────────────────────────
            //
            if (
              error.status === 422 ||
              error.status === 409 ||
              error.status === 404
            ) {
              if (this._errors[error.error.status]) {
                this.eventBus.emit({
                  chanel: 'danger',
                  value: this._errors[error.error.status]
                });
              }
            }
            //
            // ────────────────────────────────────────────────────────────────── III ──────────
            //   :::::: T O K E N   E X P I R E D : :  :   :    :     :        :          :
            // ────────────────────────────────────────────────────────────────────────────
            //
            if (error.status === 401) {
              this.auth.logout();
            }
          }
        }
      )
    );
  }
}
