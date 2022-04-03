import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateOnlyGuardGuard, PublicOnlyGuardGuard } from '@services/guards';
import { APP_ROUTES } from './routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.publicOnly.login, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./private-only-pages/private-only-pages.module').then(
        (m) => m.PrivateOnlyPagesModule
      ),
    canActivate: [PrivateOnlyGuardGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./public-only-pages/public-only-pages.module').then(
        (m) => m.PublicOnlyPagesModule
      ),
    canActivate: [PublicOnlyGuardGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./public-pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
