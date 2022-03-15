import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';

import { StarshipsListComponent } from './starships-list/starships-list.component';

@NgModule({
  declarations: [
    StarshipsListComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ],
  exports: [
    StarshipsListComponent
  ]
})
export class StarshipsModule { }
