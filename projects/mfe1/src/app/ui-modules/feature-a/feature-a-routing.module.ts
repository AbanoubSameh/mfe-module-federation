import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAAboutComponent } from './pages/feature-a-about/feature-a-about.component';
import { FeatureAHomeComponent } from './pages/feature-a-home/feature-a-home.component';
import { FeatureAMainComponent } from './pages/feature-a-main/feature-a-main.component';

const routes: Routes = [
  {
    path: '', component: FeatureAMainComponent, children: [
      { path: 'home', component: FeatureAHomeComponent },
      { path: 'about', component: FeatureAAboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
