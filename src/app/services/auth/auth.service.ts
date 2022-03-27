import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) {}

  async login() {
    const user: User = {
      id: 'string',
      name: 'string',
      age: 'string',
      level: USER_LEVEL.ADMIN,
    };
    this.user$.next(user);
    return user;
  }

  async logout() {
    this.user$.next(undefined);
    return true;
  }

  private async detectInitialAuthStatus() {
    const call = this.http.get<User>('//localhost:3000/user');
    const user = await lastValueFrom<User>(call);
    this.user$.next(user);
    return user;
  }
}
