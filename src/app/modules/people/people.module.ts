import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

import { HeightPipe } from './pipes/height.pipe';
import { HomeworldPipe } from './pipes/homeworld.pipe';


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleDetailComponent,
    HeightPipe,
    HomeworldPipe
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [
    PeopleListComponent,
    PeopleDetailComponent
  ]
})
export class PeopleModule { }
