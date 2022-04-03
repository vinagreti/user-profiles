import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageWrapperComponent } from './page-wrapper.component';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageWrapperComponent],
})
export class PageWrapperModule {}
