import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { PassportApiService } from '@services/passport-api/passport-api.service';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<User | undefined>;

  constructor(private passportApi: PassportApiService) {
    this.connectToUserStream();
  }

  login(email: string, password: string) {
    return this.passportApi.login(email, password);
  }

  logout() {
    return lastValueFrom(this.passportApi.logout());
  }

  private connectToUserStream() {
    this.user$ = this.passportApi.user$;
  }

  private detectInitialAuthStatus() {
    return lastValueFrom(this.passportApi.refreshUser());
  }
}
