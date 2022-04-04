import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDetailsCardModule } from '@components/user/user-details-card/user-details-card.module';
import { UserDetailsPageRoutingModule } from './user-details-page-routing.module';
import { UserDetailsPageComponent } from './user-details-page.component';

@NgModule({
  declarations: [UserDetailsPageComponent],
  imports: [CommonModule, UserDetailsPageRoutingModule, UserDetailsCardModule],
})
export class UserDetailsPageModule {}
