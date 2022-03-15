import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [{ 
    path: '',
    children: [
      { path: 'index', component: VehiclesListComponent },
      { path: '**', redirectTo: 'index' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
