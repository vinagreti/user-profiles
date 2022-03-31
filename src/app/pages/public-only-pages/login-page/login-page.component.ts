import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@pages/routes';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login('admin@admin.com', 'admin').subscribe((res) => {
      this.router.navigate([APP_ROUTES.privateOnly.dashboard]);
    });
  }
}
