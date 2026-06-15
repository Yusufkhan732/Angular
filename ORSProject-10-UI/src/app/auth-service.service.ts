import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  token: any

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token')) {

      this.token = localStorage.getItem('token');

      req = req.clone({
        setHeaders: {
          "withCredntails" : "true",
          "name" : "yusuf",
          Authorization: this.token
        }
      });
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: error.error},
          });
        }

        if (error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: 'Token is expired... plz login again..!!' },
          });
        }

          if (error.status === 503) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: error.error.result.message}
          });
        }
        return throwError(error);
      })
    );


  }

}
