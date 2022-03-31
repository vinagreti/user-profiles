import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { PassportApiService } from '@services/passport-api';
import { Observable } from 'rxjs';

const API_URL = '/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  current$!: Observable<User | undefined>;

  constructor(private api: PassportApiService) {
    this.connectToCurrentUserStream();
  }

  list() {
    return this.api.get<User[]>({ path: API_URL });
  }

  private connectToCurrentUserStream() {
    this.current$ = this.api.user$;
  }
}
