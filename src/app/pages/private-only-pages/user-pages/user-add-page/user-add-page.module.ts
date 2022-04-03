import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserFormModule } from '@components/user/user-form/user-form.module';
import { UserAddPageRoutingModule } from './user-add-page-routing.module';
import { UserAddPageComponent } from './user-add-page.component';

@NgModule({
  declarations: [UserAddPageComponent],
  imports: [CommonModule, UserAddPageRoutingModule, UserFormModule],
})
export class UserAddPageModule {}
