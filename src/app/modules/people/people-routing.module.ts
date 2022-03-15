import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'index', component: PeopleComponent },
      { path: 'search/:text', component: PeopleComponent },
      { path: ':id', component: PersonComponent },
      { path: '**', redirectTo: 'index' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
