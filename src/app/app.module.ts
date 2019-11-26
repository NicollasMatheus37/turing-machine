import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuringMachineComponent } from './turing-machine/turing-machine.component';
import { CommonModule } from '@angular/common';
import { RibbonComponent } from './ribbon/ribbon.component';

@NgModule({
  declarations: [
    AppComponent,
    TuringMachineComponent,
    RibbonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
