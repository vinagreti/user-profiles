import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginPageRoutingModule, FormsModule],
})
export class LoginPageModule {}
