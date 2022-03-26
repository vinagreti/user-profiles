import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardPageRoutingModule } from './user-dashboard-page-routing.module';
import { UserDashboardPageComponent } from './user-dashboard-page.component';


@NgModule({
  declarations: [
    UserDashboardPageComponent
  ],
  imports: [
    CommonModule,
    UserDashboardPageRoutingModule
  ]
})
export class UserDashboardPageModule { }
