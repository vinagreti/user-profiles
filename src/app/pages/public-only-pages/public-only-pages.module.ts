import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicOnlyPagesWrapperModule } from '@components/app-layout';
import { PublicOnlyPagesRoutingModule } from './public-only-pages-routing.module';
import { PublicOnlyPagesComponent } from './public-only-pages.component';

@NgModule({
  declarations: [PublicOnlyPagesComponent],
  imports: [
    CommonModule,
    PublicOnlyPagesRoutingModule,
    PublicOnlyPagesWrapperModule,
  ],
})
export class PublicOnlyPagesModule {}
