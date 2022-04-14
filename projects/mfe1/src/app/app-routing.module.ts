import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui-modules/core/pages/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'feature-a',
        loadChildren: () => import('./ui-modules/feature-a/feature-a.module').then(m => m.FeatureAModule),
      },
      {
        path: 'feature-b',
        loadChildren: () => import('./ui-modules/feature-b/feature-b.module').then(m => m.FeatureBModule),
      },
      { path: '', redirectTo: 'feature-a', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
