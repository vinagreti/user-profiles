import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { PassportApiService } from '@services/passport-api';
import { Observable } from 'rxjs';

const API_URL = '/user';

export interface CreateUserPayload extends Omit<User, 'id'> {
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  current$!: Observable<User | undefined>;

  constructor(private api: PassportApiService) {
    this.connectToCurrentUserStream();
  }

  create(user: CreateUserPayload) {
    const errorTitle = `Problems creating User`;
    return this.api.post<User>({ path: API_URL, payload: user, errorTitle });
  }

  list() {
    const errorTitle = `Problems loading Users`;
    return this.api.get<User[]>({ path: API_URL, errorTitle });
  }

  get(userId: string) {
    const errorTitle = `Problems loading User`;
    const path = `${API_URL}/${userId}`;
    return this.api.get<User>({ path, errorTitle });
  }

  private connectToCurrentUserStream() {
    this.current$ = this.api.user$;
  }
}
