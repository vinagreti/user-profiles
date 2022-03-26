import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicOnlyPagesComponent } from './public-only-pages.component';

const routes: Routes = [
  {
    path: '',
    component: PublicOnlyPagesComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicOnlyPagesRoutingModule {}
