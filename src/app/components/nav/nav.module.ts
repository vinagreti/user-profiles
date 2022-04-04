import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavDirective } from './nav.directive';

@NgModule({
  declarations: [NavDirective],
  imports: [CommonModule],
  exports: [NavDirective],
})
export class NavModule {}
