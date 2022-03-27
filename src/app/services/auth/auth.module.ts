import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthService } from './auth.service';

function authAppInitializer(auth: AuthService) {
  return () => {
    return (auth as any).detectInitialAuthStatus();
  };
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
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
