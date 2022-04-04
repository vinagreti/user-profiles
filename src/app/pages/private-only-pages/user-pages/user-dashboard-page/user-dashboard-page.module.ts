import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavModule } from '@components/nav/nav.module';
import { UserDashboardPageRoutingModule } from './user-dashboard-page-routing.module';
import { UserDashboardPageComponent } from './user-dashboard-page.component';

@NgModule({
  declarations: [UserDashboardPageComponent],
  imports: [CommonModule, UserDashboardPageRoutingModule, NavModule],
})
export class UserDashboardPageModule {}
