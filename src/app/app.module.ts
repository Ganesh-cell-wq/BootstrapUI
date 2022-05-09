import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Shared/login/login.component';
import { SampleComponent } from './Shared/sample/sample.component';
import { VerticalSidebarComponent } from './Shared/vertical-sidebar/vertical-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent,
    VerticalSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
