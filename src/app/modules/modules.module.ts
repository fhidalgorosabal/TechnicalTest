import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HeightPipe } from './people/pipes/height.pipe';
import { HomeworldPipe } from './people/pipes/homeworld.pipe';



@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent,
    PeopleComponent,
    PersonComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    HeightPipe,
    HomeworldPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilmsComponent,
    FilmComponent,
    PeopleComponent,
    PersonComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ]
})
export class ModulesModule { }
