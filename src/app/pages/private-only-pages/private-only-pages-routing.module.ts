import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateOnlyPagesComponent } from './private-only-pages.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateOnlyPagesComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./user-pages/user-pages.module').then(
            (m) => m.UserPagesModule
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
