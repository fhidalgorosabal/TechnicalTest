import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'index', component: StarshipsListComponent },
    { path: '**', redirectTo: 'index' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
