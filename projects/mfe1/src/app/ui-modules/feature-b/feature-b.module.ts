import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBMainComponent } from './pages/feature-b-main/feature-b-main.component';
import { FeatureBHomeComponent } from './pages/feature-b-home/feature-b-home.component';
import { FeatureBAboutComponent } from './pages/feature-b-about/feature-b-about.component';


@NgModule({
  declarations: [FeatureBMainComponent, FeatureBHomeComponent, FeatureBAboutComponent],
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
