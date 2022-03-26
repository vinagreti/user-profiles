import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateOnlyPagesWrapperModule } from '@components/app-layout';
import { PrivateOnlyPagesRoutingModule } from './private-only-pages-routing.module';
import { PrivateOnlyPagesComponent } from './private-only-pages.component';

@NgModule({
  declarations: [PrivateOnlyPagesComponent],
  imports: [
    CommonModule,
    PrivateOnlyPagesRoutingModule,
    PrivateOnlyPagesWrapperModule,
  ],
})
export class PrivateOnlyPagesModule {}
