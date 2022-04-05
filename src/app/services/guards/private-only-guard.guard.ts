import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { APP_PERMISSIONS } from '@models/permission';
import { APP_ROUTES } from '@pages/routes';
import { AuthService } from '@services/auth/auth.service';
import { map, Observable } from 'rxjs';
import { getRouteChildrenData } from 'src/app/helpers/router';

@Injectable({
  providedIn: 'root',
})
export class PrivateOnlyGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const data = getRouteChildrenData(route);
    const action = data.action;

    return this.authService.user$.pipe(
      map((user) => {
        if (user) {
          if (action) {
            const userActions = APP_PERMISSIONS[user.level];
            const userHasPermissoinToThisAction = userActions.includes(action);
            if (userHasPermissoinToThisAction) {
              return true;
            } else {
              const returnUrl = state.url;
              return this.router.createUrlTree([APP_ROUTES.publicOnly.login], {
                queryParams: { returnUrl },
              });
            }
          } else {
            return true;
          }
        } else {
          const returnUrl = state.url;
          return this.router.createUrlTree([APP_ROUTES.publicOnly.login], {
            queryParams: { returnUrl },
          });
        }
      })
    );
  }
}
