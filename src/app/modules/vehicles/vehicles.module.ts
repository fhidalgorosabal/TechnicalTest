import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';

import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
