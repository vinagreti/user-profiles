import { NgModule } from '@angular/core';
import { UserServiceTestingModule } from '@services/user';
import { PageWrapperModule } from './page-wrapper.module';

@NgModule({
  imports: [PageWrapperModule, UserServiceTestingModule],
})
export class PageWrapperTestingModule {}
