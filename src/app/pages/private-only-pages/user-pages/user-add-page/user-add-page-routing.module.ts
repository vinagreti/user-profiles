import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddPageComponent } from './user-add-page.component';

const routes: Routes = [{ path: '', component: UserAddPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAddPageRoutingModule {}
