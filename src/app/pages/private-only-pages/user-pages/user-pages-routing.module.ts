import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ACTION } from '@models/permission';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-dashboard-page/user-dashboard-page.module').then(
        (m) => m.UserDashboardPageModule
      ),
    data: { action: APP_ACTION.READ_USER },
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./user-add-page/user-add-page.module').then(
        (m) => m.UserAddPageModule
      ),
    data: { backButton: true, action: APP_ACTION.CREATE_USER },
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./user-details-page/user-details-page.module').then(
        (m) => m.UserDetailsPageModule
      ),
    data: { backButton: true, action: APP_ACTION.READ_USER },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPagesRoutingModule {}
