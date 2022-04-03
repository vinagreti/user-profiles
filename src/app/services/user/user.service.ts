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
    return this.api.post<User>({ path: API_URL, payload: user });
  }

  list() {
    return this.api.get<User[]>({ path: API_URL });
  }

  get(userId: string) {
    const path = `${API_URL}/${userId}`;
    return this.api.get<User>({ path });
  }

  private connectToCurrentUserStream() {
    this.current$ = this.api.user$;
  }
}
