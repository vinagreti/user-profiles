import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsCardComponent } from './user-details-card.component';



@NgModule({
  declarations: [
    UserDetailsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDetailsCardComponent
  ]
})
export class UserDetailsCardModule { }
