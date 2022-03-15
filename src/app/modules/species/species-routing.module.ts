import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './species-list/species-list.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'index', component: SpeciesListComponent },
    { path: '**', redirectTo: 'index' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
