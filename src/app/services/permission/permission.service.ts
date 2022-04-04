import { Injectable } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { PassportApiService } from '@services/passport-api';

const PERMISSION_API_PATH = '/permission/userLevel';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private api: PassportApiService) {}

  setUserLevel(user: User, level: USER_LEVEL) {
    const successMessage = `<b>${user.name}</b> level changed to <b>${level}</b>`;
    const errorMessage = `Problems changing user <b>${user.name}</b> level to <b>${level}</b>`;
    const payload = { userId: user.id, level };
    return this.api.post({
      path: PERMISSION_API_PATH,
      payload,
      successMessage,
      errorMessage,
    });
  }
}
