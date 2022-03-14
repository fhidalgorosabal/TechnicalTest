import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './modules/films/film.component';

import { FilmsComponent } from './modules/films/films.component';
import { PeopleComponent } from './modules/people/people.component';
import { PersonComponent } from './modules/people/person.component';
import { PlanetsComponent } from './modules/planets/planets.component';
import { SpeciesComponent } from './modules/species/species.component';
import { StarshipsComponent } from './modules/starships/starships.component';
import { VehiclesComponent } from './modules/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'films', component: FilmsComponent },
  { path: 'films/:text', component: FilmsComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:text', component: PeopleComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: '**', redirectTo: 'films' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
