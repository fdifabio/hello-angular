import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {AuthenticationService} from "../../services/security/authentication.service";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.status === 401) {
            console.log(error);
            errorMessage = error.status + " Error";
            this.authenticationService.logout();
          }
          return throwError(() => errorMessage);
        })
      );
  }
}
