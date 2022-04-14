import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureBAboutComponent } from './pages/feature-b-about/feature-b-about.component';
import { FeatureBHomeComponent } from './pages/feature-b-home/feature-b-home.component';
import { FeatureBMainComponent } from './pages/feature-b-main/feature-b-main.component';

const routes: Routes = [
  {
    path: '', component: FeatureBMainComponent, children: [
      { path: 'home', component: FeatureBHomeComponent },
      { path: 'about', component: FeatureBAboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBRoutingModule { }
