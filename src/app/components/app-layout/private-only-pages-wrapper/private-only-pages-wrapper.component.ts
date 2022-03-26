import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@pages/routes';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-private-only-pages-wrapper',
  templateUrl: './private-only-pages-wrapper.component.html',
  styleUrls: ['./private-only-pages-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateOnlyPagesWrapperComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async logout() {
    await this.auth.logout();
    this.router.navigate([APP_ROUTES.publicOnly.login]);
  }
}
