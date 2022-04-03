import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-dashboard-page/user-dashboard-page.module').then(
        (m) => m.UserDashboardPageModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./user-add-page/user-add-page.module').then(
        (m) => m.UserAddPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPagesRoutingModule {}
