import { Injectable } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { PassportApiService } from '@services/passport-api';

const PERMISSION_SERVICE = '/permission';

@Injectable({
  providedIn: 'root',
})
export class PermisisonService {
  constructor(private api: PassportApiService) {}

  setUserLevel(user: User, level: USER_LEVEL) {
    const payload = { user: user.id, level };
    return this.api.post({
      path: PERMISSION_SERVICE,
      payload,
    });
  }
}
