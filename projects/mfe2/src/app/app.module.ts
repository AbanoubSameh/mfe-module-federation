import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
