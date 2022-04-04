import { Injectable } from '@angular/core';
import { User, USER_LEVEL } from '@models/user';
import { AlertService } from '@services/alert';
import { PassportApiService } from '@services/passport-api';
import { tap } from 'rxjs';

const PERMISSION_API_PATH = '/permission/userLevel';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(
    private alertService: AlertService,
    private api: PassportApiService
  ) {}

  setUserLevel(user: User, level: USER_LEVEL) {
    const payload = { userId: user.id, level };
    return this.api
      .post({
        path: PERMISSION_API_PATH,
        payload,
      })
      .pipe(
        tap(() => {
          this.alertService.alert({
            title: 'Success!',
            message: `<b>${user.name}</b> level changed to <b>${level}</b>`,
            color: 'success',
          });
        })
      );
  }
}
