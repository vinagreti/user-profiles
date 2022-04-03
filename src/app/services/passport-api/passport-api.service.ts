import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthResponse } from '@models/auth';
import { User } from '@models/user';
import { BehaviorSubject, catchError, of, shareReplay, tap } from 'rxjs';
import { PassportApiServiceOptions } from './passport-api.service.models';

const AUTH_TOKEN_KEY = '42';

const AUTH_PATHS = {
  login: '/auth/login',
  logout: '/auth/logout',
  current: '/auth/current',
};

@Injectable({
  providedIn: 'root',
})
export class PassportApiService<CT = any> {
  private innerUser$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.innerUser$.asObservable();

  token?: string;

  constructor(private http: HttpClient) {
    this.loadAuthToken();
  }

  get<T = CT>({ path }: PassportApiServiceOptions) {
    const headers = this.createHeaders();
    const url = `${environment.apiUrl}${path}`;
    return this.http.get<T>(url, { headers }).pipe(shareReplay());
  }

  post<T = CT>({ path, payload }: PassportApiServiceOptions) {
    const headers = this.createHeaders();
    const url = `${environment.apiUrl}${path}`;
    return this.http.post<T>(url, payload, { headers }).pipe(shareReplay());
  }

  login(email: string, password: string) {
    const path = AUTH_PATHS.login;
    const payload = { email, password };
    return this.post<AuthResponse>({ path, payload }).pipe(
      tap((authData) => this.handleLoginSuccess(authData))
    );
  }

  logout() {
    const url = `${environment.apiUrl}${AUTH_PATHS.logout}`;
    this.persistAuthState(undefined);
    return this.http.get(url);
  }

  refreshUser() {
    return this.get<User>({ path: AUTH_PATHS.current }).pipe(
      tap((user) => {
        this.innerUser$.next(user);
      }),
      catchError(() => {
        this.innerUser$.next(undefined);
        return of(undefined);
      })
    );
  }

  private createHeaders(customHeaders: { [key: string]: string } = {}) {
    return new HttpHeaders({
      // AUTHORIZATION TOKEN
      Authorization: this.token!,
      // CACHE PREFLIGHT REQUESTS
      AccessControlMaxAge: '7200',
      // CUSTOM HEADERS
      ...customHeaders,
    });
  }

  private loadAuthToken() {
    this.token = this.getLocalToken();
  }

  private handleLoginSuccess(authData?: AuthResponse) {
    this.persistAuthState(authData);
  }

  private persistAuthState(authData?: AuthResponse) {
    this.token = authData?.token;
    this.setLocalToken(this.token);
    this.innerUser$.next(authData?.user);
  }

  private setLocalToken(token: string = '') {
    return localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  private getLocalToken() {
    return localStorage[AUTH_TOKEN_KEY];
  }
}
