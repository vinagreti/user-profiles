import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAddPageRoutingModule } from './user-add-page-routing.module';
import { UserAddPageComponent } from './user-add-page.component';


@NgModule({
  declarations: [
    UserAddPageComponent
  ],
  imports: [
    CommonModule,
    UserAddPageRoutingModule
  ]
})
export class UserAddPageModule { }
