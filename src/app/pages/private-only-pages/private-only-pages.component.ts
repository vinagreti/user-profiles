import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@pages/routes';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-private-only-pages',
  templateUrl: './private-only-pages.component.html',
  styleUrls: ['./private-only-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateOnlyPagesComponent {
  APP_ROUTES = APP_ROUTES;

  constructor(private authService: AuthService, private router: Router) {}

  async logout() {
    await this.authService.logout();
    this.router.navigate([APP_ROUTES.publicOnly.login]);
  }
}
