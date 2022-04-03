import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsPageRoutingModule } from './user-details-page-routing.module';
import { UserDetailsPageComponent } from './user-details-page.component';


@NgModule({
  declarations: [
    UserDetailsPageComponent
  ],
  imports: [
    CommonModule,
    UserDetailsPageRoutingModule
  ]
})
export class UserDetailsPageModule { }
