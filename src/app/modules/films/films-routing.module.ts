import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'index', component: FilmsComponent },
      { path: 'search/:text', component: FilmsComponent },
      { path: ':id', component: FilmComponent },
      { path: '**', redirectTo: 'index' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
