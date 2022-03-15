import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';

import { SpeciesListComponent } from './species-list/species-list.component';


@NgModule({
  declarations: [
    SpeciesListComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ],
  exports: [
    SpeciesListComponent
  ]
})
export class SpeciesModule { }
