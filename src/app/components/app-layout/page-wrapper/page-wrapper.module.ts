import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavModule } from '@components/nav/nav.module';
import { PageWrapperComponent } from './page-wrapper.component';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, RouterModule, NavModule],
  exports: [PageWrapperComponent, NavModule],
})
export class PageWrapperModule {}
