import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path : '' ,
  component: PagesComponent,
  children: [
    {
      path: 'departments',
      loadChildren:()=>import("./gestion-departement/gestion-departement.module").then((m)=>m.GestionDepartementModule)
    },

    {
      path: 'employees',
      loadChildren:()=>import("./gestion-employe/gestion-employe.module").then((m)=>m.GestionEmployeModule )
    }
  ]
}
];                      

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


/*
{ path : '' ,
      component: PagesComponent
}*/