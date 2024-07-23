import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEmployeComponent } from './gestion-employe.component';

const routes: Routes = [
  {
    path: '',
    component:GestionEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEmployeRoutingModule { }
