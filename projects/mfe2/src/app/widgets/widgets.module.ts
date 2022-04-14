import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionWidgetComponent } from './production-widget/production-widget.component';
import { CapacityWidgetComponent } from './capacity-widget/capacity-widget.component';
import { SalesWidgetComponent } from './sales-widget/sales-widget.component';



@NgModule({
  declarations: [ProductionWidgetComponent, CapacityWidgetComponent, SalesWidgetComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductionWidgetComponent, CapacityWidgetComponent, SalesWidgetComponent]
})
export class WidgetsModule { }
