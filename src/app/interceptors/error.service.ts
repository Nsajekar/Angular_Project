import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let errorMessage = '';
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            errorMessage = error.error;
          } else if (error.status === 304) {
            errorMessage = error.error;
          } else if (error.status === 400) {
            errorMessage = error.error;
          } else if (error.status === 409) {
            errorMessage = error.error;
          } else if (error.status === 500) {
            errorMessage = error.error;
          } else {
            errorMessage = `Server error: ${error.statusText} (${error.status})`;
          }
        } else {
          errorMessage = 'Network error occurred! Please try again.';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
