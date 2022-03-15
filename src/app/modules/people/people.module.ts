import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

import { HeightPipe } from './pipes/height.pipe';
import { HomeworldPipe } from './pipes/homeworld.pipe';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    HeightPipe,
    HomeworldPipe
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [
    PeopleComponent,
    PersonComponent
  ]
})
export class PeopleModule { }
