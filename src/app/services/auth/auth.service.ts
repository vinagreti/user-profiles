import { Injectable } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor() {}

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
}
