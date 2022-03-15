import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [{ 
    path: '',
    children: [
      { path: 'index', component: VehiclesComponent },
      { path: '**', redirectTo: 'index' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
