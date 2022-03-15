import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';

import { SpeciesComponent } from './species/species.component';


@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ],
  exports: [
    SpeciesComponent
  ]
})
export class SpeciesModule { }
