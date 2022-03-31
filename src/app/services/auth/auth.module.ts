import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PassportApiModule } from '@services/passport-api/passport-api.module';
import { AuthService } from './auth.service';

function authAppInitializer(auth: AuthService) {
  return () => {
    return (auth as any).detectInitialAuthStatus();
  };
}

@NgModule({
  declarations: [],
  imports: [CommonModule, PassportApiModule],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: authAppInitializer,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AuthModule {}
