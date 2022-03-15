import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'index', component: SpeciesComponent },
    { path: '**', redirectTo: 'index' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
