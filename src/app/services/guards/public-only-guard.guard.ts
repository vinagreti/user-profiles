import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { APP_ROUTES } from '@pages/routes';
import { AuthService } from '@services/auth/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicOnlyGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          return true;
        } else {
          return this.router.createUrlTree([
            APP_ROUTES.privateOnly.user.dashboard,
          ]);
        }
      })
    );
  }
}
