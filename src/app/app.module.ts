import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { DataModule } from './data/data.module';

import { TopnavComponent } from './layout/topnav/topnav.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContainerComponent } from './layout/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    NavbarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
