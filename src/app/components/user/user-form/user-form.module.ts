import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserFormComponent],
})
export class UserFormModule {}
