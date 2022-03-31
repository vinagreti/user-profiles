import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDashboardPageRoutingModule } from './user-dashboard-page-routing.module';
import { UserDashboardPageComponent } from './user-dashboard-page.component';

@NgModule({
  declarations: [UserDashboardPageComponent],
  imports: [CommonModule, UserDashboardPageRoutingModule, FormsModule],
})
export class UserDashboardPageModule {}
