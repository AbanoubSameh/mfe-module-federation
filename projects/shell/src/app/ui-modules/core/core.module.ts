import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
