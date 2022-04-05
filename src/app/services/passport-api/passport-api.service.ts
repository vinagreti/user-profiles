import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthResponse } from '@models/auth';
import { API_CODES, API_CODE_MESSAGES } from '@models/error';
import { User } from '@models/user';
import { AlertColor, AlertConfig, AlertService } from '@services/alert';
import {
  BehaviorSubject,
  catchError,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
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

  constructor(private alertService: AlertService, private http: HttpClient) {
    this.loadAuthToken();
  }

  get<T = CT>({
    path,
    httpHeaders,
    errorMessage,
    successMessage,
  }: PassportApiServiceOptions) {
    const headers = this.createHeaders(httpHeaders);
    const url = `${environment.apiUrl}${path}`;
    return this.http.get<T>(url, { headers }).pipe(
      shareReplay(),
      catchError((err) => this.handleError(err, errorMessage)),
      switchMap((response) =>
        this.handleSuccess({ response, successMessage, errorMessage })
      )
    );
  }

  post<T = CT>({
    path,
    payload,
    httpHeaders,
    errorMessage,
    successMessage,
  }: PassportApiServiceOptions) {
    const headers = this.createHeaders(httpHeaders);
    const url = `${environment.apiUrl}${path}`;
    return this.http.post<T>(url, payload, { headers }).pipe(
      shareReplay(),
      catchError((err) => this.handleError(err, errorMessage)),
      switchMap((response) =>
        this.handleSuccess({ response, successMessage, errorMessage })
      )
    );
  }

  login(email: string, password: string) {
    const path = AUTH_PATHS.login;
    const errorMessage = 'Error during login';
    const payload = { email, password, errorMessage };
    return this.post<AuthResponse>({ path, payload }).pipe(
      tap((authData) => this.handleLoginSuccess(authData))
    );
  }

  logout() {
    const path = AUTH_PATHS.logout;
    const errorMessage = 'Error during login';
    return this.get({ path, errorMessage }).pipe(
      tap(() => this.persistAuthState(undefined))
    );
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

  private showMessage(color: AlertColor, message?: string, title?: string) {
    if (message) {
      const alertConfig: AlertConfig = {
        color,
        message,
        title,
      };
      this.alertService.alert(alertConfig);
    }
  }

  private handleSuccess({
    response,
    successMessage,
    errorMessage,
  }: {
    response: any;
    successMessage?: string;
    errorMessage?: string;
  }) {
    if (response.error) {
      return this.handleError(response, errorMessage);
    } else {
      this.showMessage('success', successMessage);
      return of(response);
    }
  }

  private handleError(errorResponse: any, message?: string, title?: string) {
    if (message) {
      this.showMessage('warn', message, title);
    } else if (errorResponse?.code) {
      const error: API_CODES = errorResponse.code;
      const errorMessage = API_CODE_MESSAGES[error];
      if (errorMessage) {
        this.showMessage('warn', errorMessage, title);
      } else {
        this.showMessage('warn', JSON.stringify(message ?? ''), title);
      }
    }
    return throwError(() => errorResponse);
  }

  private createHeaders(customHeaders: { [key: string]: string } = {}) {
    return new HttpHeaders({
      // AUTHORIZATION TOKEN
      Authorization: this.token ?? '',
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
    this.token = authData?.token ?? '';
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
