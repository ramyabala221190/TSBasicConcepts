import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceExamplesComponent } from './interface-examples/interface-examples.component';
import {HttpClientModule} from '@angular/common/http';
import { EnumExamplesComponent } from './enum-examples/enum-examples.component';
import { FormsModule } from '@angular/forms';
import { GenericsExamplesComponent } from './generics-examples/generics-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceExamplesComponent,
    EnumExamplesComponent,
    GenericsExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
