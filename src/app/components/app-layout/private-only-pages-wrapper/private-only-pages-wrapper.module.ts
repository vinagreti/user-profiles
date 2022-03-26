import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWrapperModule } from '../page-wrapper/page-wrapper.module';
import { PrivateOnlyPagesWrapperComponent } from './private-only-pages-wrapper.component';

@NgModule({
  declarations: [PrivateOnlyPagesWrapperComponent],
  imports: [CommonModule, PageWrapperModule],
  exports: [PrivateOnlyPagesWrapperComponent],
})
export class PrivateOnlyPagesWrapperModule {}
