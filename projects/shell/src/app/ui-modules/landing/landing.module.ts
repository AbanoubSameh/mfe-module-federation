import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
