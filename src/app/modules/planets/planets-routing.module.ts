import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'index', component: PlanetsComponent },
    { path: '**', redirectTo: 'index' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
