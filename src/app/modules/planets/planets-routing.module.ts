import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'index', component: PlanetsListComponent },
    { path: '**', redirectTo: 'index' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
