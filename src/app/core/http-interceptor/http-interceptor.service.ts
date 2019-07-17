import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { throttle } from 'src/app/core/utils/functions';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers })).pipe(
        finalize(() => {
        }),
        catchError(error => {
          this.handleAuthError(error);
          throw error;
        })
      );
    } else {
      request = request.clone({});
      return next.handle(request).pipe(
        finalize(() => {

        }),
        catchError(error => {
          this.handleAuthError(error);
          return of(error).pipe(
            finalize(() => {
            })
          );
        })
      );
    }
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    // handle auth error
    if (err.status === 401) {
      // handling multiple 401 errors.
      throttle(() => {
        // this.globalService.logout();
      });
      return of(err);
    }
    throw err;
  }
}
