import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { PassportApiService } from '@services/passport-api/passport-api.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(private passportApi: PassportApiService) {}

  async login() {
    const user: User = {
      id: 'string',
      name: 'string',
      email: 'string',
    };
    this.user$.next(user);
    return user;
  }

  async logout() {
    this.user$.next(undefined);
    return true;
  }

  private async detectInitialAuthStatus() {
    const call = this.passportApi.get<User>({
      url: '//localhost:3000/users/current',
    });
    const user = await lastValueFrom<User>(call).then(
      (a) => a,
      () => undefined
    );
    this.user$.next(user);
    return user;
  }
}
