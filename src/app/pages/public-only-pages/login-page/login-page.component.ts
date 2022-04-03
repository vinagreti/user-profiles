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
  loginData = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onFormSubmitted(email: string, password: string) {
    this.login(email, password);
  }

  private login(email: string, password: string) {
    this.authService.login(email, password).subscribe((res) => {
      this.router.navigate([APP_ROUTES.privateOnly.user.dashboard]);
    });
  }
}
