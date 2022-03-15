import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'index', component: PeopleListComponent },
      { path: 'search/:text', component: PeopleListComponent },
      { path: ':id', component: PeopleDetailComponent },
      { path: '**', redirectTo: 'index' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
