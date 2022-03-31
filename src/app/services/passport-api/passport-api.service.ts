import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassportApiServiceOptions } from './passport-api.service.models';

@Injectable({
  providedIn: 'root',
})
export class PassportApiService<CT = any> {
  constructor(private http: HttpClient) {}

  get<T = CT>({ url }: PassportApiServiceOptions) {
    return this.http.get<T>(url);
  }

  private getLocalToken() {
    return localStorage.getItem('token');
  }
}
