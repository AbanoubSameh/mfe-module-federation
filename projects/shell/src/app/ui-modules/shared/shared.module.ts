import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteComponentWrapperComponent } from './components/remote-component-wrapper/remote-component-wrapper.component';



@NgModule({
  declarations: [RemoteComponentWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [RemoteComponentWrapperComponent]
})
export class SharedModule { }
