import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWrapperModule } from '../page-wrapper/page-wrapper.module';
import { PublicOnlyPagesWrapperComponent } from './public-only-pages-wrapper.component';

@NgModule({
  declarations: [PublicOnlyPagesWrapperComponent],
  imports: [CommonModule, PageWrapperModule],
  exports: [PublicOnlyPagesWrapperComponent],
})
export class PublicOnlyPagesWrapperModule {}
