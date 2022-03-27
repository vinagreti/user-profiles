import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@services/auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule],
})
export class CoreModule {}
