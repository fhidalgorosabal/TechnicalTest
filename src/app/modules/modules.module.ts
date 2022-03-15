import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { StarshipsModule } from './starships/starships.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule
  ]
})
export class ModulesModule { }
