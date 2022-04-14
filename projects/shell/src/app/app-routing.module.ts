import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui-modules/core/pages/layout/layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import('./ui-modules/landing/landing.module').then(m => m.LandingModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
