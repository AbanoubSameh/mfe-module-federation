import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAMainComponent } from './pages/feature-a-main/feature-a-main.component';
import { FeatureAHomeComponent } from './pages/feature-a-home/feature-a-home.component';
import { FeatureAAboutComponent } from './pages/feature-a-about/feature-a-about.component';


@NgModule({
  declarations: [FeatureAMainComponent, FeatureAHomeComponent, FeatureAAboutComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
