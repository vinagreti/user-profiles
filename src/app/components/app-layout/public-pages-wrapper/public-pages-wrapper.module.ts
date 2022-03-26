import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWrapperModule } from '../page-wrapper/page-wrapper.module';
import { PublicPagesWrapperComponent } from './public-pages-wrapper.component';

@NgModule({
  declarations: [PublicPagesWrapperComponent],
  imports: [CommonModule, PageWrapperModule],
  exports: [PublicPagesWrapperComponent],
})
export class PublicPagesWrapperModule {}
