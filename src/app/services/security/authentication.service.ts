import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl: string = environment.backUrl + 'login'

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): Observable<any> {
    const login = {
      username: username,
      password: password
    }

    return this.http.post<any>(this.resourceUrl, login).pipe(
      catchError( err => {
        return throwError(() => 'Ocurrió un error, Usuario y/o contraseña inválidos');
      }), tap(response => {
        localStorage.setItem(environment.tokenName, response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem(environment.tokenName);
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    const token = this.token;
    return token !== null;
  }

  get token(): string | null {
    return localStorage.getItem(environment.tokenName);
  }
}
