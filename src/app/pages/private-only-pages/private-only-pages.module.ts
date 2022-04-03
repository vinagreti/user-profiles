import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWrapperModule } from '@components/app-layout/page-wrapper/page-wrapper.module';
import { PrivateOnlyPagesRoutingModule } from './private-only-pages-routing.module';
import { PrivateOnlyPagesComponent } from './private-only-pages.component';

@NgModule({
  declarations: [PrivateOnlyPagesComponent],
  imports: [CommonModule, PrivateOnlyPagesRoutingModule, PageWrapperModule],
})
export class PrivateOnlyPagesModule {}
