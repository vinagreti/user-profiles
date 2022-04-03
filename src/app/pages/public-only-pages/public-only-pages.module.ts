import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWrapperModule } from '@components/app-layout/page-wrapper/page-wrapper.module';
import { PublicOnlyPagesRoutingModule } from './public-only-pages-routing.module';
import { PublicOnlyPagesComponent } from './public-only-pages.component';

@NgModule({
  declarations: [PublicOnlyPagesComponent],
  imports: [CommonModule, PublicOnlyPagesRoutingModule, PageWrapperModule],
})
export class PublicOnlyPagesModule {}
