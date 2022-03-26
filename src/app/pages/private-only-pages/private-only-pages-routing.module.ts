import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateOnlyPagesComponent } from './private-only-pages.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateOnlyPagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./user-dashboard-page/user-dashboard-page.module').then(
            (m) => m.UserDashboardPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateOnlyPagesRoutingModule {}
